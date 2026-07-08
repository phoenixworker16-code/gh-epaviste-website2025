import { JSDOM } from 'jsdom';

/**
 * Checks HTML content for prohibited claims about GH Épaviste.
 * Allows legitimate legal mentions of the partner VHU centre, but blocks any
 * phrasing that could be interpreted as GH Épaviste being the VHU centre or
 * performing prohibited operations (dépollution, recyclage, délivrance du
 * certificat de destruction).
 */
export function ensureLegal(html: string): void {
  const dom = new JSDOM(html);
  const text = dom.window.document.body.textContent?.toLowerCase() ?? '';

  // Phrases that are explicitly allowed – they reference the partner centre.
  const allowedPatterns = [
    /le centre vhu agréé partenaire délivre le certificat de destruction/i,
    /le centre vhu agréé partenaire réalise la dépollution/i,
    /le centre vhu agréé partenaire recycle les véhicules/i,
    /le centre vhu agréé partenaire détruit les véhicules/i
  ];

  // Prohibited core phrases (any occurrence not part of an allowed pattern).
  const prohibitedPhrases = [
    'gh épaviste est un centre vhu',
    'gh épaviste est agréé vhu',
    'gh épaviste réalise la dépollution',
    'gh épaviste détruit les véhicules',
    'gh épaviste recycle',
    'gh épaviste délivre le certificat de destruction',
    'gh épaviste réalise le recyclage',
    'gh épaviste réalise la destruction'
  ];

  // Helper to determine if a prohibited phrase is within an allowed context.
  const isAllowed = (phrase: string): boolean => {
    return allowedPatterns.some((regex) => regex.test(html));
  };

  for (const phrase of prohibitedPhrases) {
    if (text.includes(phrase)) {
      if (!isAllowed(phrase)) {
        throw new Error(`Contenu illégal détecté: "${phrase}" - Le texte doit indiquer que GH Épaviste est uniquement le transporteur.`);
      }
    }
  }
}
