"use client"; // Indique que ce composant est un composant client React

import { useState, useEffect, useCallback } from "react"; // Ajout de useCallback pour optimiser la fonction loadDemandes
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Database } from "lucide-react";

// Définition d'une interface pour la structure d'une demande
interface Demande {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  adresse: string;
  ville: string;
  codePostal: string;
  typeVehicule: string;
  marque: string;
  modele: string;
  annee: string;
  etatVehicule: string;
  description: string;
  dateCreation: string;
  statut: "Nouvelle" | "En cours" | "Terminée" | "Annulée"; // Typage plus précis des statuts
  dateIntervention: string | null;
}

export default function DebugStorage() {
  // État pour stocker la liste des demandes
  const [demandes, setDemandes] = useState<Demande[]>([]); // Spécification du type Demande[]
  // État pour stocker la date de la dernière mise à jour
  const [lastUpdate, setLastUpdate] = useState<string>(""); // Spécification du type string

  // Fonction pour charger les demandes depuis le localStorage
  // Utilisation de useCallback pour mémoriser la fonction et éviter des recréations inutiles
  const loadDemandes = useCallback(() => {
    try {
      const data = JSON.parse(localStorage.getItem("demandes") || "[]");
      // S'assurer que les données sont bien un tableau de Demande
      if (Array.isArray(data)) {
        setDemandes(data as Demande[]);
      } else {
        console.warn("Debug: Données dans localStorage ne sont pas un tableau.", data);
        setDemandes([]);
      }
      setLastUpdate(new Date().toLocaleTimeString());
      console.log("Debug: Demandes chargées:", data.length);
    } catch (error) {
      console.error("Debug: Erreur lors du chargement des demandes depuis localStorage:", error);
      setDemandes([]);
    }
  }, []); // Pas de dépendances car elle accède directement à localStorage et Date

  // Effet pour charger les demandes au montage et configurer les écouteurs d'événements
  useEffect(() => {
    loadDemandes(); // Chargement initial

    // Intervalle de rafraîchissement régulier (peut être utile pour le débogage)
    const interval = setInterval(loadDemandes, 1000);

    // Gestionnaire pour les événements de stockage et personnalisés
    const handleStorageChange = () => {
      console.log("Debug: Événement de stockage ou de mise à jour détecté.");
      loadDemandes();
    };

    // Écouteur pour l'événement 'storage' (modifications localStorage par d'autres onglets/fenêtres)
    window.addEventListener("storage", handleStorageChange);
    // Écouteur pour l'événement personnalisé 'demandesUpdated' (modifications internes)
    window.addEventListener("demandesUpdated", handleStorageChange);

    // Fonction de nettoyage pour désabonner les écouteurs et effacer l'intervalle
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("demandesUpdated", handleStorageChange);
    };
  }, [loadDemandes]); // Dépendance à loadDemandes (qui est mémorisée par useCallback)

  // Fonction pour créer une demande de test et l'ajouter au localStorage
  const createTestDemande = () => {
    const testDemande: Demande = { // Spécification du type Demande
      id: "TEST-" + Date.now(),
      nom: "Test",
      prenom: "Utilisateur",
      telephone: "0123456789",
      email: "test@example.com",
      adresse: "123 Rue Test",
      ville: "Paris",
      codePostal: "75001",
      typeVehicule: "voiture",
      marque: "Test",
      modele: "Model",
      annee: "2020",
      etatVehicule: "accidente",
      description: "Demande de test pour le débogage.",
      dateCreation: new Date().toISOString(),
      statut: "Nouvelle", // Typage corrigé ici
      dateIntervention: null,
    };

    const existing: Demande[] = JSON.parse(localStorage.getItem("demandes") || "[]");
    existing.push(testDemande);
    localStorage.setItem("demandes", JSON.stringify(existing));

    // Déclenchement d'un CustomEvent pour notifier les composants internes
    // StorageEvent est principalement pour la communication inter-fenêtres par le navigateur
    window.dispatchEvent(new CustomEvent("demandesUpdated"));

    console.log("Debug: Test demande créée:", testDemande.id);
  };

  // Fonction pour effacer toutes les demandes du localStorage
  const clearAllDemandes = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer toutes les demandes de test ? Cette action est irréversible.")) {
      localStorage.setItem("demandes", "[]");
      // Déclenchement d'un CustomEvent pour notifier la suppression
      window.dispatchEvent(new CustomEvent("demandesUpdated"));
      console.log("Debug: Toutes les demandes ont été effacées.");
      // Pas besoin d'appeler loadDemandes ici, l'événement le fera
    }
  };

  return (
    <Card className="mb-6 border-blue-200" aria-live="polite"> {/* Ajout de aria-live pour l'accessibilité */}
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Database className="w-5 h-5 mr-2 text-blue-500" aria-hidden="true" /> {/* Icone décorative */}
          Debug - Synchronisation des Demandes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4"> {/* Amélioration du responsive */}
            <div>
              <p className="font-medium">Nombre de demandes en local: <span className="font-bold">{demandes.length}</span></p> {/* Texte plus clair */}
              <p className="text-sm text-gray-500">Dernière mise à jour: <span className="font-mono">{lastUpdate}</span></p> {/* Font mono pour l'heure */}
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end"> {/* Flex-wrap pour les petits écrans */}
              <Button onClick={loadDemandes} size="sm" variant="outline" aria-label="Actualiser les demandes">
                <RefreshCw className="w-4 h-4 mr-1" aria-hidden="true" />
                Actualiser
              </Button>
              <Button onClick={createTestDemande} size="sm" className="bg-green-500 hover:bg-green-600 text-white" aria-label="Créer une demande de test">
                Créer Test
              </Button>
              <Button onClick={clearAllDemandes} size="sm" variant="destructive" aria-label="Supprimer toutes les demandes de test">
                Reset Data
              </Button>
            </div>
          </div>

          {demandes.length > 0 && (
            <div className="bg-gray-50 p-3 rounded max-h-32 overflow-y-auto" role="region" aria-labelledby="latest-demands-heading"> {/* Rôle et label pour l'accessibilité */}
              <p id="latest-demands-heading" className="text-sm font-medium mb-2">Dernières 3 demandes:</p> {/* Texte plus clair */}
              {demandes.slice(-3).reverse().map((demande) => ( // Afficher les 3 dernières par ordre décroissant
                <div key={demande.id} className="text-xs text-gray-600 mb-1">
                  <span className="font-semibold">{demande.id}</span> - {demande.prenom} {demande.nom} (<span className={`font-semibold ${demande.statut === 'Nouvelle' ? 'text-blue-600' : demande.statut === 'Terminée' ? 'text-green-600' : 'text-orange-600'}`}>
                    {demande.statut}
                  </span>)
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}