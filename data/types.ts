export type BlockType = 
  | 'Hero'
  | 'Introduction'
  | 'ZfeAlert'
  | 'UndergroundParking'
  | 'DocsPreparation'
  | 'TipsAndMistakes'
  | 'LocalCoverage'
  | 'Copropriety'
  | 'VhuCompliance'
  | 'VehicleTypes'
  | 'FaqLocal'
  | 'Cta'

export interface BaseBlock {
  type: BlockType;
}

export interface HeroBlock extends BaseBlock {
  type: 'Hero';
  title: string;
  subtitle: string;
  badge?: string;
  bgType?: 'city' | 'nature' | 'urban';
}

export interface IntroductionBlock extends BaseBlock {
  type: 'Introduction';
  title: string;
  content: string;
}

export interface ZfeAlertBlock extends BaseBlock {
  type: 'ZfeAlert';
  title: string;
  content: string;
  level: 'info' | 'warning';
}

export interface UndergroundParkingBlock extends BaseBlock {
  type: 'UndergroundParking';
  title: string;
  content: string;
  maxHeight?: string;
}

export interface DocsPreparationBlock extends BaseBlock {
  type: 'DocsPreparation';
  title: string;
  intro: string;
  specialCase?: string; // ex: succession, carte grise perdue
}

export interface TipsAndMistakesBlock extends BaseBlock {
  type: 'TipsAndMistakes';
  title: string;
  tips: string[];
  mistakes: string[];
}

export interface LocalCoverageBlock extends BaseBlock {
  type: 'LocalCoverage';
  title: string;
  intro: string;
  zones: { name: string; delay: string; specificities?: string }[];
}

export interface CoproprietyBlock extends BaseBlock {
  type: 'Copropriety';
  title: string;
  content: string;
}

export interface VhuComplianceBlock extends BaseBlock {
  type: 'VhuCompliance';
  title: string;
  content: string;
}

export interface VehicleTypesBlock extends BaseBlock {
  type: 'VehicleTypes';
  title: string;
  accepted: string[];
}

export interface FaqLocalBlock extends BaseBlock {
  type: 'FaqLocal';
  title: string;
  questions: { q: string; a: string }[];
}

export interface CtaBlock extends BaseBlock {
  type: 'Cta';
  title: string;
  subtitle: string;
}

export type PageBlock = 
  | HeroBlock 
  | IntroductionBlock 
  | ZfeAlertBlock 
  | UndergroundParkingBlock 
  | DocsPreparationBlock 
  | TipsAndMistakesBlock 
  | LocalCoverageBlock 
  | CoproprietyBlock 
  | VhuComplianceBlock 
  | VehicleTypesBlock 
  | FaqLocalBlock 
  | CtaBlock;

export interface PageData {
  slug: string; // ex: 'paris', 'versailles'
  metaTitle: string;
  metaDescription: string;
  entityType: 'Department' | 'City';
  blocks: PageBlock[];
  relatedServicesSlugs: string[]; // Maillage interne vers services
  relatedCitiesSlugs: string[];   // Maillage interne vers villes (si département) ou département parent (si ville)
}
