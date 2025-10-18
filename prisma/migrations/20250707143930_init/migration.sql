-- CreateTable
CREATE TABLE "Demande" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT,
    "adresse" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "typeVehicule" TEXT NOT NULL,
    "marque" TEXT,
    "modele" TEXT,
    "annee" TEXT,
    "etatVehicule" TEXT NOT NULL,
    "description" TEXT,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statut" TEXT NOT NULL DEFAULT 'Nouvelle',
    "dateIntervention" TIMESTAMP(3),

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("id")
);
