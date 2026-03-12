// Define a type for your `Demande` object.
// This interface should be the single source of truth for the Demande structure.
export interface Demande {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  plaqueImmatriculation: string;
  ville: string;
  codePostal: string;
  dateCreation: string;
  statut: "Nouvelle" | "En cours" | "Planifiée" | "Terminée" | "Annulée";
  dateIntervention?: string | null;
  // Champs anciens conservés en optionnel pour la compatibilité avec les données existantes
  adresse?: string;
  typeVehicule?: string;
  marque?: string;
  modele?: string;
  annee?: string;
  etatVehicule?: string;
  description?: string;
}

/**
 * @class StorageManager
 * Gestionnaire centralisé pour le stockage et la récupération des 'demandes' dans localStorage.
 * Implémente le pattern Singleton pour garantir qu'une seule instance existe.
 * Notifie les écouteurs enregistrés lors des changements de stockage.
 */
export class StorageManager {
  private static instance: StorageManager; // Instance statique pour le pattern Singleton
  private listeners: Set<() => void> = new Set(); // Set pour stocker les fonctions de rappel
  private storageKey = "demandes"; // Clé utilisée pour localStorage

  /**
   * Constructeur privé pour forcer le pattern Singleton.
   * Attache un écouteur d'événements 'storage' à la fenêtre si dans un environnement de navigateur.
   */
  private constructor() {
    // Vérifier la disponibilité de `window` pour s'assurer que le code ne s'exécute que dans un contexte de navigateur.
    if (typeof window !== "undefined") {
      // Binder `this` au gestionnaire pour s'assurer qu'il fait référence à l'instance de la classe.
      window.addEventListener("storage", this.handleStorageChange.bind(this));
    }
  }

  /**
   * Retourne l'instance unique du StorageManager.
   * Crée l'instance si elle n'existe pas déjà.
   * @returns {StorageManager} L'instance singleton.
   */
  static getInstance(): StorageManager {
    if (!StorageManager.instance) {
      StorageManager.instance = new StorageManager();
    }
    return StorageManager.instance;
  }

  /**
   * Gère l'événement 'storage', déclenché lorsque localStorage change dans un autre onglet/fenêtre.
   * Notifie tous les écouteurs enregistrés si le changement est pertinent pour `this.storageKey`.
   * @param {StorageEvent} e L'objet StorageEvent.
   */
  private handleStorageChange(e: StorageEvent): void {
    // Ne réagir qu'aux changements pour la storageKey spécifique que nous gérons.
    if (e.key === this.storageKey) {
      // Journaliser la longueur de la nouvelle valeur pour un meilleur contexte en développement.
      console.log("🔄 Changement de stockage détecté (depuis un autre onglet/fenêtre). Nouvelle longueur des données:", e.newValue?.length ?? 0);
      this.notifyListeners();
    }
  }

  /**
   * Enregistre une fonction de rappel à notifier lorsque les données de stockage changent.
   * Retourne une fonction pour désabonner l'écouteur.
   * @param {() => void} callback La fonction à appeler lorsque le stockage change.
   * @returns {() => void} Une fonction de nettoyage pour supprimer l'écouteur.
   */
  addListener(callback: () => void): () => void {
    this.listeners.add(callback);
    // Retourner une fonction de nettoyage pour supprimer l'écouteur du set.
    return () => {
      this.listeners.delete(callback);
    };
  }

  /**
   * Notifie tous les écouteurs enregistrés d'un changement de stockage.
   * Inclut une gestion robuste des erreurs pour les rappels individuels des écouteurs.
   */
  private notifyListeners(): void {
    this.listeners.forEach((callback) => {
      try {
        callback();
      } catch (error) {
        // Journaliser les erreurs dans les rappels des écouteurs sans arrêter les autres écouteurs.
        console.error("Erreur dans le rappel de l'écouteur de stockage:", error);
      }
    });
  }

  /**
   * Sauvegarde une nouvelle 'demande' dans localStorage.
   * Ajoute la nouvelle demande à la liste existante.
   * Déclenche manuellement un `StorageEvent` pour notifier les autres onglets/fenêtres.
   * @param {Demande} demande L'objet 'demande' à sauvegarder.
   * @returns {boolean} Vrai si la sauvegarde a réussi, faux sinon.
   */
  saveDemande(demande: Demande): boolean {
    if (typeof window === "undefined") {
      console.warn("Tentative de saveDemande dans un environnement non-navigateur. Opération ignorée.");
      return false;
    }
    try {
      const existing = this.getAllDemandes(); // Récupérer les demandes existantes
      existing.push(demande); // Ajouter la nouvelle demande

      const newDemandesString = JSON.stringify(existing);
      const oldDemandesString = JSON.stringify(existing.slice(0, -1)); // Obtenir l'état avant d'ajouter le nouveau

      localStorage.setItem(this.storageKey, newDemandesString);

      // Forcer la notification interne immédiatement après la sauvegarde.
      this.notifyListeners();

      // Déclencher manuellement StorageEvent pour les autres onglets/fenêtres si absolument nécessaire.
      // Un petit délai peut être utile pour laisser le navigateur traiter l'écriture dans localStorage.
      setTimeout(() => {
        window.dispatchEvent(
          new StorageEvent("storage", {
            key: this.storageKey,
            newValue: newDemandesString,
            oldValue: oldDemandesString,
            url: window.location.href, // Ajouter l'URL actuelle pour l'exhaustivité
            storageArea: localStorage, // Spécifier la zone de stockage
          }),
        );
      }, 0); // Utiliser 0ms pour la mise en file d'attente des microtâches, ou supprimer setTimeout si non nécessaire.

      console.log("✅ Demande sauvegardée. ID:", demande.id);
      return true;
    } catch (error) {
      console.error("❌ Erreur lors de la sauvegarde de la demande:", error);
      return false;
    }
  }

  /**
   * Récupère toutes les 'demandes' de localStorage.
   * @returns {Demande[]} Un tableau d'objets 'demande', ou un tableau vide si aucun trouvé ou une erreur se produit.
   */
  getAllDemandes(): Demande[] {
    if (typeof window === "undefined") {
      console.warn("Tentative de getAllDemandes dans un environnement non-navigateur. Retourne un tableau vide.");
      return [];
    }
    try {
      const data = localStorage.getItem(this.storageKey);
      // S'assurer que JSON.parse gère null en toute sécurité et retourne un tableau.
      // Ajouter une assertion de type pour une meilleure sécurité si vous êtes sûr de la structure.
      return data ? (JSON.parse(data) as Demande[]) : [];
    } catch (error) {
      console.error("❌ Erreur lors de la lecture des demandes depuis localStorage:", error);
      return []; // Retourner un tableau vide en cas d'erreur d'analyse pour éviter d'autres problèmes.
    }
  }

  /**
   * Met à jour une 'demande' existante dans localStorage par son ID.
   * @param {string} id L'ID de la 'demande' à mettre à jour.
   * @param {Partial<Demande>} updates Un objet contenant les propriétés à mettre à jour.
   * @returns {boolean} Vrai si la mise à jour a réussi, faux sinon.
   */
  updateDemande(id: string, updates: Partial<Demande>): boolean {
    if (typeof window === "undefined") {
      console.warn("Tentative de updateDemande dans un environnement non-navigateur. Opération ignorée.");
      return false;
    }
    try {
      const demandes = this.getAllDemandes();
      const index = demandes.findIndex((d) => d.id === id);

      if (index !== -1) {
        // Créer un nouvel objet pour assurer l'immuabilité et déclencher les mises à jour correctement.
        demandes[index] = { ...demandes[index], ...updates };
        localStorage.setItem(this.storageKey, JSON.stringify(demandes));
        this.notifyListeners(); // Notifier les écouteurs dans l'onglet actuel
        console.log(`✅ Demande mise à jour: ID ${id}`);
        return true;
      }
      console.warn(`⚠️ Demande avec l'ID ${id} non trouvée pour la mise à jour.`);
      return false;
    } catch (error) {
      console.error("❌ Erreur lors de la mise à jour de la demande:", error);
      return false;
    }
  }

  /**
   * Supprime une 'demande' de localStorage par son ID.
   * @param {string} id L'ID de la 'demande' à supprimer.
   * @returns {boolean} Vrai si la suppression a réussi, faux sinon.
   */
  deleteDemande(id: string): boolean {
    if (typeof window === "undefined") {
      console.warn("Tentative de deleteDemande dans un environnement non-navigateur. Opération ignorée.");
      return false;
    }
    try {
      const demandes = this.getAllDemandes();
      const filtered = demandes.filter((d) => d.id !== id);

      // Ne mettre à jour que si quelque chose a été réellement supprimé pour éviter les écritures inutiles.
      if (filtered.length < demandes.length) {
        localStorage.setItem(this.storageKey, JSON.stringify(filtered));
        this.notifyListeners(); // Notifier les écouteurs dans l'onglet actuel
        console.log(`✅ Demande supprimée: ID ${id}`);
        return true;
      }
      console.warn(`⚠️ Demande avec l'ID ${id} non trouvée pour la suppression.`);
      return false;
    } catch (error) {
      console.error("❌ Erreur lors de la suppression de la demande:", error);
      return false;
    }
  }

  /**
   * Efface toutes les 'demandes' de localStorage.
   */
  clearAll(): void {
    if (typeof window === "undefined") {
      console.warn("Tentative de clearAll dans un environnement non-navigateur. Opération ignorée.");
      return;
    }
    try {
      localStorage.setItem(this.storageKey, "[]");
      this.notifyListeners(); // Notifier les écouteurs dans l'onglet actuel
      console.log("🗑️ Toutes les demandes ont été effacées.");
    } catch (error) {
      console.error("❌ Erreur lors de l'effacement de toutes les demandes:", error);
    }
  }

  /**
   * Nettoie l'écouteur d'événements de stockage lorsque le gestionnaire n'est plus nécessaire.
   * Ceci est important dans les frameworks comme React où les composants montent/démontent.
   */
  destroy(): void {
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", this.handleStorageChange.bind(this));
    }
    this.listeners.clear(); // Effacer tous les écouteurs
  }
}
