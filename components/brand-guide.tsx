"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, Type, Layout, Smartphone } from "lucide-react"
// Si vous réintroduisez des images de logos, n'oubliez pas d'importer Image de Next.js
// import Image from "next/image" 

export default function BrandGuide() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8" role="document" aria-label="Guide de cohérence visuelle GH Épaviste">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Guide de Cohérence Visuelle</h1>
        <p className="text-xl text-gray-600">GH Épaviste - Standards de design</p>
      </div>

      {/* Palette de Couleurs */}
      <Card aria-labelledby="colors-heading">
        <CardHeader>
          <CardTitle id="colors-heading" className="flex items-center">
            <Palette className="w-6 h-6 mr-2 text-yellow-500" aria-hidden="true" />
            Palette de Couleurs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6" role="list" aria-label="Couleurs principales de la marque">
            <div className="text-center" role="listitem">
              <div className="w-20 h-20 bg-yellow-500 rounded-lg mx-auto mb-3 border-2 border-gray-200" aria-hidden="true"></div>
              <h4 className="font-bold text-black">Jaune Principal</h4>
              <p className="text-sm text-gray-600">#FFC107</p>
              <p className="text-xs text-gray-500">yellow-500</p>
            </div>
            <div className="text-center" role="listitem">
              <div className="w-20 h-20 bg-black rounded-lg mx-auto mb-3 border-2 border-gray-200" aria-hidden="true"></div>
              <h4 className="font-bold text-black">Noir</h4>
              <p className="text-sm text-gray-600">#000000</p>
              <p className="text-xs text-gray-500">black</p>
            </div>
            <div className="text-center" role="listitem">
              <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-3 border-2 border-gray-200" aria-hidden="true"></div>
              <h4 className="font-bold text-black">Blanc</h4>
              <p className="text-sm text-gray-600">#FFFFFF</p>
              <p className="text-xs text-gray-500">white</p>
            </div>
            <div className="text-center" role="listitem">
              <div className="w-20 h-20 bg-gray-600 rounded-lg mx-auto mb-3 border-2 border-gray-200" aria-hidden="true"></div>
              <h4 className="font-bold text-black">Gris</h4>
              <p className="text-sm text-gray-600">#6B7280</p>
              <p className="text-xs text-gray-500">gray-600</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typographie */}
      <Card aria-labelledby="typography-heading">
        <CardHeader>
          <CardTitle id="typography-heading" className="flex items-center">
            <Type className="w-6 h-6 mr-2 text-yellow-500" aria-hidden="true" />
            Typographie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div aria-label="Exemple de Titre Principal H1">
            <h1 className="text-4xl font-bold text-black mb-2">Titre Principal H1</h1>
            <p className="text-sm text-gray-600">text-4xl font-bold text-black</p>
          </div>
          <div aria-label="Exemple de Titre Secondaire H2">
            <h2 className="text-3xl font-bold text-black mb-2">Titre Secondaire H2</h2>
            <p className="text-sm text-gray-600">text-3xl font-bold text-black</p>
          </div>
          <div aria-label="Exemple de Titre Tertiaire H3">
            <h3 className="text-xl font-bold text-black mb-2">Titre Tertiaire H3</h3>
            <p className="text-sm text-gray-600">text-xl font-bold text-black</p>
          </div>
          <div aria-label="Exemple de Texte principal">
            <p className="text-lg text-gray-700 mb-2">Texte principal - Lorem ipsum dolor sit amet</p>
            <p className="text-sm text-gray-600">text-lg text-gray-700</p>
          </div>
          <div aria-label="Exemple de Texte secondaire">
            <p className="text-sm text-gray-600 mb-2">Texte secondaire - Informations complémentaires</p>
            <p className="text-sm text-gray-600">text-sm text-gray-600</p>
          </div>
        </CardContent>
      </Card>

      {/* Composants */}
      <Card aria-labelledby="components-heading">
        <CardHeader>
          <CardTitle id="components-heading" className="flex items-center">
            <Layout className="w-6 h-6 mr-2 text-yellow-500" aria-hidden="true" />
            Composants Standards
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Boutons */}
          <div aria-labelledby="buttons-subtitle">
            <h4 id="buttons-subtitle" className="font-bold text-black mb-4">Boutons</h4>
            <div className="flex flex-wrap gap-4" role="group" aria-label="Exemples de boutons">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Bouton Principal</Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Bouton Secondaire
              </Button>
              <Button variant="destructive">Bouton Danger</Button>
            </div>
          </div>

          {/* Badges */}
          <div aria-labelledby="badges-subtitle">
            <h4 id="badges-subtitle" className="font-bold text-black mb-4">Badges de Statut</h4>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Exemples de badges de statut">
              <Badge className="bg-blue-100 text-blue-800">Nouvelle</Badge>
              <Badge className="bg-yellow-100 text-yellow-800">En cours</Badge>
              <Badge className="bg-purple-100 text-purple-800">Planifiée</Badge>
              <Badge className="bg-green-100 text-green-800">Terminée</Badge>
              <Badge className="bg-red-100 text-red-800">Annulée</Badge>
            </div>
          </div>

          {/* Cards */}
          <div aria-labelledby="cards-subtitle">
            <h4 id="cards-subtitle" className="font-bold text-black mb-4">Cards</h4>
            <div className="grid md:grid-cols-2 gap-4" role="group" aria-label="Exemples de cartes">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h5 className="font-bold text-black mb-2">Card Standard</h5>
                  <p className="text-gray-600">Contenu de la card avec hover effect</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200">
                <CardContent className="p-6">
                  <h5 className="font-bold text-black mb-2">Card Accentuée</h5>
                  <p className="text-gray-600">Card avec bordure jaune pour mise en valeur</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage des Logos */}
      <Card aria-labelledby="logos-heading">
        <CardHeader>
          <CardTitle id="logos-heading" className="flex items-center">
            <Smartphone className="w-6 h-6 mr-2 text-yellow-500" aria-hidden="true" />
            Usage des Logos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Exemples d'utilisation des logos">
            <div className="text-center p-6 bg-white border rounded-lg" role="listitem">
              <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-3 flex items-center justify-center" aria-hidden="true">
                <span className="text-xs">LOGO NOIR</span>
              </div>
              <h4 className="font-bold text-black">Header & PDF</h4>
              <p className="text-sm text-gray-600">Logo noir sur fond blanc</p>
              <p className="text-xs text-gray-500">h-16 w-auto</p>
            </div>
            <div className="text-center p-6 bg-black border rounded-lg" role="listitem">
              <div className="w-16 h-16 bg-gray-700 rounded mx-auto mb-3 flex items-center justify-center" aria-hidden="true">
                <span className="text-xs text-white">LOGO BLANC</span>
              </div>
              <h4 className="font-bold text-white">Footer</h4>
              <p className="text-sm text-gray-300">Logo blanc sur fond noir</p>
              <p className="text-xs text-gray-400">h-16 w-auto</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 border rounded-lg" role="listitem">
              <div className="w-16 h-16 bg-yellow-200 rounded mx-auto mb-3 flex items-center justify-center" aria-hidden="true">
                <span className="text-xs">LOGO JAUNE</span>
              </div>
              <h4 className="font-bold text-black">Signature PDF</h4>
              <p className="text-sm text-gray-600">Logo jaune pour signatures</p>
              <p className="text-xs text-gray-500">15x15px</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Espacement */}
      <Card aria-labelledby="spacing-heading">
        <CardHeader>
          <CardTitle id="spacing-heading" className="flex items-center">
            Standards d&#39;Espacement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4" role="list" aria-label="Standards d'espacement de la marque">
            <div className="flex items-center space-x-4" role="listitem">
              <div className="w-4 h-4 bg-yellow-500" aria-hidden="true"></div>
              <span className="text-sm">Sections principales : **py-16 (64px)**</span>
            </div>
            <div className="flex items-center space-x-4" role="listitem">
              <div className="w-3 h-3 bg-yellow-500" aria-hidden="true"></div>
              <span className="text-sm">Cards et composants : **p-6 (24px)**</span>
            </div>
            <div className="flex items-center space-x-4" role="listitem">
              <div className="w-2 h-2 bg-yellow-500" aria-hidden="true"></div>
              <span className="text-sm">Éléments internes : **space-y-4 (16px)**</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Validation */}
      <Card className="bg-green-50 border-green-200" aria-labelledby="validation-heading">
        <CardHeader>
          <CardTitle id="validation-heading" className="text-green-800 flex items-center">
            <span aria-hidden="true">✅</span> Cohérence Validée
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div aria-labelledby="validated-points-subtitle">
              <h4 id="validated-points-subtitle" className="font-bold text-green-800 mb-2">Points Validés :</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>✓ Palette de couleurs cohérente</li>
                <li>✓ Typographie unifiée</li>
                <li>✓ Logos harmonisés</li>
                <li>✓ Composants standardisés</li>
                <li>✓ Espacement régulier</li>
              </ul>
            </div>
            <div aria-labelledby="applied-standards-subtitle">
              <h4 id="applied-standards-subtitle" className="font-bold text-green-800 mb-2">Standards Appliqués :</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>✓ Design responsive</li>
                <li>✓ Accessibilité respectée</li>
                <li>✓ Transitions fluides</li>
                <li>✓ Hiérarchie visuelle claire</li>
                <li>✓ Branding cohérent</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}