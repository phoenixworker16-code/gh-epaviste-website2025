"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ScrollToTop from "@/components/scroll-to-top";
import { StorageManager } from "@/lib/storage-manager";

export default function FormulaireEnlevement() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    adresse: "",
    ville: "",
    codePostal: "",
    typeVehicule: "",
    marque: "",
    modele: "",
    annee: "",
    etatVehicule: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetFormData = () => {
    setFormData({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      adresse: "",
      ville: "",
      codePostal: "",
      typeVehicule: "",
      marque: "",
      modele: "",
      annee: "",
      etatVehicule: "",
      description: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const demandeData = {
        id: `DEMANDE-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
        ...formData,
        dateCreation: new Date().toISOString(),
        statut: "Nouvelle" as const,
        dateIntervention: null,
      };

      const storageManager = StorageManager.getInstance();
      const success = storageManager.saveDemande(demandeData);

      if (success) {
        setIsSubmitted(true);
        setTimeout(() => {
          resetFormData();
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error("Échec de la sauvegarde de la demande.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center" role="status" aria-live="polite">
          <CardContent className="p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-black mb-4">Demande Envoyée !</h2>
            <p className="text-gray-600 mb-6">
              Votre demande d&apos;enlèvement a bien été envoyée. Nous vous recontacterons sous 2 heures pour organiser
              l&apos;intervention.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                aria-label="Faire une nouvelle demande d&apos;enlèvement"
              >
                Nouvelle Demande
              </Button>
              <Link href="/" passHref>
                <Button variant="outline" className="w-full" asChild>
                  <a aria-label="Retourner à la page d&apos;accueil">Retour à l&apos;Accueil</a>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbNav />

      <main className="py-12" id="main-content">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              Demande d&apos;Enlèvement d&apos;Épave <span className="text-yellow-500">Gratuit</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Remplissez ce formulaire et nous vous contacterons dans les plus brefs délais pour organiser l&apos;enlèvement
              de votre véhicule.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <section className="lg:col-span-2" aria-labelledby="formulaire-enlèvement-heading">
              <Card>
                <CardHeader>
                  <CardTitle id="formulaire-enlèvement-heading" className="text-2xl text-black">Informations de Contact et Véhicule</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-xl font-bold text-black mt-4 mb-2">Vos coordonnées</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="prenom" className="text-black font-medium">
                          Prénom <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="prenom"
                          value={formData.prenom}
                          onChange={(e) => handleChange("prenom", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="nom" className="text-black font-medium">
                          Nom <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="nom"
                          value={formData.nom}
                          onChange={(e) => handleChange("nom", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telephone" className="text-black font-medium">
                          Téléphone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) => handleChange("telephone", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-black font-medium">
                          Email (facultatif)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="adresse" className="text-black font-medium">
                        Adresse du véhicule <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="adresse"
                        value={formData.adresse}
                        onChange={(e) => handleChange("adresse", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Numéro et nom de rue"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ville" className="text-black font-medium">
                          Ville <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="ville"
                          value={formData.ville}
                          onChange={(e) => handleChange("ville", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="codePostal" className="text-black font-medium">
                          Code Postal <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="codePostal"
                          value={formData.codePostal}
                          onChange={(e) => handleChange("codePostal", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <hr className="my-8" />

                    <h2 className="text-xl font-bold text-black mb-2">Informations du Véhicule</h2>

                    <div>
                      <Label htmlFor="typeVehicule" className="text-black font-medium">
                        Type de véhicule <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => handleChange("typeVehicule", value)}
                        disabled={isSubmitting}
                        value={formData.typeVehicule}
                      >
                        <SelectTrigger id="typeVehicule" className="mt-1 focus:border-yellow-500 focus:ring-yellow-500">
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="voiture">Voiture</SelectItem>
                          <SelectItem value="moto">Moto/Scooter</SelectItem>
                          <SelectItem value="utilitaire">Utilitaire</SelectItem>
                          <SelectItem value="4x4">4x4/Pick-up</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="marque" className="text-black font-medium">
                          Marque (facultatif)
                        </Label>
                        <Input
                          id="marque"
                          value={formData.marque}
                          onChange={(e) => handleChange("marque", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="ex: Renault"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="modele" className="text-black font-medium">
                          Modèle (facultatif)
                        </Label>
                        <Input
                          id="modele"
                          value={formData.modele}
                          onChange={(e) => handleChange("modele", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="ex: Clio"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="annee" className="text-black font-medium">
                          Année (facultatif)
                        </Label>
                        <Input
                          id="annee"
                          type="number"
                          value={formData.annee}
                          onChange={(e) => handleChange("annee", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="ex: 2010"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="etatVehicule" className="text-black font-medium">
                        État du véhicule <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => handleChange("etatVehicule", value)}
                        disabled={isSubmitting}
                        value={formData.etatVehicule}
                      >
                        <SelectTrigger id="etatVehicule" className="mt-1 focus:border-yellow-500 focus:ring-yellow-500">
                          <SelectValue placeholder="Sélectionnez l&apos;état" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roulant">Roulant</SelectItem>
                          <SelectItem value="non-roulant">Non roulant</SelectItem>
                          <SelectItem value="accidente">Accidenté</SelectItem>
                          <SelectItem value="brule">Brûlé</SelectItem>
                          <SelectItem value="abandonne">Abandonné</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-black font-medium">
                        Description complémentaire (facultatif)
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Décrivez l&apos;état du véhicule, son accessibilité, etc."
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4"
                      disabled={isSubmitting}
                      aria-live="polite"
                      aria-label={isSubmitting ? "Envoi de votre demande en cours" : "Envoyer votre demande d'enlèvement"}
                    >
                      {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER MA DEMANDE D'ENLÈVEMENT"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-6" aria-labelledby="informations-utiles-heading">
              <Card>
                <CardHeader>
                  <CardTitle id="informations-utiles-heading" className="text-xl text-black">Informations Utiles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-black">Téléphone</h3>
                      <a href="tel:+33753120793" className="text-gray-600 hover:text-yellow-600" aria-label="Appeler au 00 33 7 53 12 07 93">
                        00 33 7 53 12 07 93
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-black">Email</h3>
                      <a href="mailto:contact@gh-epaviste.fr" className="text-gray-600 hover:text-yellow-600" aria-label="Envoyer un email à contact@gh-epaviste.fr">
                        contact@gh-epaviste.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-black">Zone d&apos;intervention</h3>
                      <p className="text-gray-600">Île-de-France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h2 className="font-bold text-black mb-3">Nos Engagements</h2>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span className="text-gray-700">Enlèvement 100% gratuit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span className="text-gray-700">Intervention sous 24h</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span className="text-gray-700">Service professionnel</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
        <ScrollToTop />
      </main>
    </div>
  );
}