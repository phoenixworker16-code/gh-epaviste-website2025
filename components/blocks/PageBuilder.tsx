import React from 'react'
import { PageBlock } from '@/data/types'
import {
  ShieldAlert,
  CarFront,
  Building,
  FileText,
  Lightbulb,
  AlertCircle,
  MapPin,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Composants de Blocs

function HeroBlockComponent({ block }: { block: any }) {
  return (
    <section className="bg-black text-white py-16 md:py-24 border-b-4 border-yellow-500">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        {block.badge && (
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" /> {block.badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {block.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {block.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link href="/formulaire">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 text-lg w-full sm:w-auto h-14">
                Demander un enlèvement
              </Button>
           </Link>
           <a href="tel:+33753120793">
              <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-black font-bold px-8 text-lg w-full sm:w-auto h-14">
                07 53 12 07 93
              </Button>
           </a>
        </div>
      </div>
    </section>
  )
}

function IntroductionBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-yellow-500 pl-4">{block.title}</h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
          {block.content}
        </div>
      </div>
    </section>
  )
}

function ZfeAlertBlockComponent({ block }: { block: any }) {
  const isWarning = block.level === 'warning'
  const bgColor = isWarning ? 'bg-red-50' : 'bg-blue-50'
  const borderColor = isWarning ? 'border-red-200' : 'border-blue-200'
  const iconColor = isWarning ? 'text-red-600' : 'text-blue-600'
  const titleColor = isWarning ? 'text-red-900' : 'text-blue-900'

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className={`${bgColor} border ${borderColor} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start`}>
          <ShieldAlert className={`w-12 h-12 ${iconColor} flex-shrink-0`} />
          <div>
            <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>{block.title}</h2>
            <p className="text-gray-700 leading-relaxed">{block.content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function UndergroundParkingBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Building className="w-8 h-8 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{block.title}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{block.content}</p>
          {block.maxHeight && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 flex items-center gap-3 text-indigo-900 font-medium">
              <AlertCircle className="w-5 h-5 text-indigo-600" />
              Accès garanti jusqu'à une hauteur de {block.maxHeight}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function DocsPreparationBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
          <FileText className="w-8 h-8 text-yellow-500" />
          {block.title}
        </h2>
        <p className="text-lg text-gray-700 mb-8">{block.intro}</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            "Carte grise (Certificat d'immatriculation)",
            "Pièce d'identité valide (CNI, Passeport)",
            "Certificat de non-gage (moins de 15j)"
          ].map((doc, idx) => (
             <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-gray-900">{doc}</h3>
             </div>
          ))}
        </div>

        {block.specialCase && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <strong className="text-amber-900 block mb-1">Cas particulier local :</strong>
            <span className="text-amber-800">{block.specialCase}</span>
          </div>
        )}
      </div>
    </section>
  )
}

function TipsAndMistakesBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">{block.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tips */}
          <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-800">
              <Lightbulb className="w-6 h-6 text-green-500" /> Bonnes pratiques
            </h3>
            <ul className="space-y-4">
              {block.tips.map((tip: string, idx: number) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mistakes */}
          <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-800">
              <AlertCircle className="w-6 h-6 text-red-500" /> Erreurs fréquentes
            </h3>
            <ul className="space-y-4">
              {block.mistakes.map((mistake: string, idx: number) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                  <span className="text-gray-700 leading-relaxed">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

function LocalCoverageBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">{block.title}</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-lg">{block.intro}</p>
        
        {/* Version Mobile: Cartes */}
        <div className="md:hidden flex flex-col gap-4">
          {block.zones.map((zone: any, idx: number) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                {zone.name}
              </div>
              <div className="mb-3">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {zone.delay}
                </span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-700 mr-1">Spécificités :</span>
                {zone.specificities || '-'}
              </div>
            </div>
          ))}
        </div>

        {/* Version Desktop: Tableau */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-4 px-6 font-bold text-gray-900">Zone d'intervention</th>
                <th className="py-4 px-6 font-bold text-gray-900">Délai estimé</th>
                <th className="py-4 px-6 font-bold text-gray-900">Spécificités</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {block.zones.map((zone: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    {zone.name}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {zone.delay}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 leading-relaxed">
                    {zone.specificities || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function CoproprietyBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
         <div className="bg-slate-50 border-l-4 border-slate-500 p-6 md:p-8 rounded-r-2xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
              <Building className="w-6 h-6 text-slate-600" />
              {block.title}
            </h2>
            <p className="text-slate-700 leading-relaxed">{block.content}</p>
         </div>
      </div>
    </section>
  )
}

function VhuComplianceBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-10 bg-amber-50 border-y border-amber-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <ShieldCheck className="w-12 h-12 text-amber-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-amber-900 mb-2">{block.title}</h2>
            <div className="text-amber-800 text-sm leading-relaxed prose prose-amber">
              {block.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VehicleTypesBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{block.title}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {block.accepted.map((type: string, idx: number) => (
            <div key={idx} className="bg-gray-100 px-6 py-3 rounded-full text-gray-800 font-medium flex items-center gap-2">
               <CarFront className="w-4 h-4 text-gray-500" />
               {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqLocalBlockComponent({ block }: { block: any }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": block.questions.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-16 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 flex justify-center items-center gap-3">
          <HelpCircle className="w-8 h-8 text-yellow-500" />
          {block.title}
        </h2>
        <div className="space-y-4">
          {block.questions.map((item: any, i: number) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:border-yellow-300 transition-colors overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="p-6 cursor-pointer select-none">
                <h3 className="font-bold text-lg text-gray-900 flex items-center gap-3 m-0">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    Q
                  </span>
                  <span className="flex-1">{item.q}</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </span>
                </h3>
              </summary>
              <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed pl-[3.25rem]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-20 bg-yellow-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          {block.title}
        </h2>
        <p className="text-black/80 mb-10 text-lg max-w-2xl mx-auto">
          {block.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/formulaire">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8 h-14 text-lg w-full sm:w-auto">
              Demande d'enlèvement
            </Button>
          </Link>
          <a href="tel:+33753120793">
             <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 h-14 text-lg w-full sm:w-auto">
               07 53 12 07 93
             </Button>
          </a>
        </div>
      </div>
    </section>
  )
}


// Le Builder Central
export function PageBuilder({ blocks }: { blocks: PageBlock[] }) {
  return (
    <div className="flex flex-col w-full">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'Hero': return <HeroBlockComponent key={index} block={block} />
          case 'Introduction': return <IntroductionBlockComponent key={index} block={block} />
          case 'ZfeAlert': return <ZfeAlertBlockComponent key={index} block={block} />
          case 'UndergroundParking': return <UndergroundParkingBlockComponent key={index} block={block} />
          case 'DocsPreparation': return <DocsPreparationBlockComponent key={index} block={block} />
          case 'TipsAndMistakes': return <TipsAndMistakesBlockComponent key={index} block={block} />
          case 'LocalCoverage': return <LocalCoverageBlockComponent key={index} block={block} />
          case 'Copropriety': return <CoproprietyBlockComponent key={index} block={block} />
          case 'VhuCompliance': return <VhuComplianceBlockComponent key={index} block={block} />
          case 'VehicleTypes': return <VehicleTypesBlockComponent key={index} block={block} />
          case 'FaqLocal': return <FaqLocalBlockComponent key={index} block={block} />
          case 'Cta': return <CtaBlockComponent key={index} block={block} />
          default: 
            console.warn('Unknown block type:', (block as any).type)
            return null
        }
      })}
    </div>
  )
}
