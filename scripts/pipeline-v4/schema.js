const { z } = require('zod');

/**
 * Schéma de validation Zod pour PageData
 * Calqué sur le vrai type PageData de data/types.ts
 * S'assure que toutes les données nécessaires sont présentes et au bon format
 * AVANT toute vérification métier ou génération de code.
 */

// --- Block Schemas ---

const HeroBlockSchema = z.object({
  type: z.literal('Hero'),
  title: z.string().min(5),
  subtitle: z.string().min(10),
  badge: z.string().optional(),
  bgType: z.enum(['city', 'nature', 'urban']).optional()
});

const IntroductionBlockSchema = z.object({
  type: z.literal('Introduction'),
  title: z.string().min(3),
  content: z.string().min(50)
});

const ZfeAlertBlockSchema = z.object({
  type: z.literal('ZfeAlert'),
  title: z.string().min(3),
  content: z.string().min(10),
  level: z.enum(['info', 'warning'])
});

const UndergroundParkingBlockSchema = z.object({
  type: z.literal('UndergroundParking'),
  title: z.string().min(3),
  content: z.string().min(50),
  maxHeight: z.string().optional()
});

const DocsPreparationBlockSchema = z.object({
  type: z.literal('DocsPreparation'),
  title: z.string().min(3),
  intro: z.string().min(10),
  specialCase: z.string().optional()
});

const TipsAndMistakesBlockSchema = z.object({
  type: z.literal('TipsAndMistakes'),
  title: z.string().min(3),
  tips: z.array(z.string()).min(1),
  mistakes: z.array(z.string()).min(1)
});

const LocalCoverageBlockSchema = z.object({
  type: z.literal('LocalCoverage'),
  title: z.string().min(3),
  intro: z.string().min(10),
  zones: z.array(z.object({
    name: z.string().min(2),
    delay: z.string().min(2),
    specificities: z.string().optional()
  })).min(1)
});

const CoproprietyBlockSchema = z.object({
  type: z.literal('Copropriety'),
  title: z.string().min(3),
  content: z.string().min(50)
});

const VhuComplianceBlockSchema = z.object({
  type: z.literal('VhuCompliance'),
  title: z.string().min(3),
  content: z.string().min(50)
});

const VehicleTypesBlockSchema = z.object({
  type: z.literal('VehicleTypes'),
  title: z.string().min(3),
  accepted: z.array(z.string()).min(1)
});

const FaqLocalBlockSchema = z.object({
  type: z.literal('FaqLocal'),
  title: z.string().min(3),
  questions: z.array(z.object({
    q: z.string().min(5),
    a: z.string().min(10)
  })).min(1)
});

const CtaBlockSchema = z.object({
  type: z.literal('Cta'),
  title: z.string().min(3),
  subtitle: z.string().min(5)
});

const PageBlockSchema = z.discriminatedUnion('type', [
  HeroBlockSchema,
  IntroductionBlockSchema,
  ZfeAlertBlockSchema,
  UndergroundParkingBlockSchema,
  DocsPreparationBlockSchema,
  TipsAndMistakesBlockSchema,
  LocalCoverageBlockSchema,
  CoproprietyBlockSchema,
  VhuComplianceBlockSchema,
  VehicleTypesBlockSchema,
  FaqLocalBlockSchema,
  CtaBlockSchema
]);

// --- PageData Schema ---

const PageDataSchema = z.object({
  slug: z.string().min(2),
  metaTitle: z.string().min(10),
  metaDescription: z.string().min(30),
  entityType: z.enum(['Department', 'City']),
  blocks: z.array(PageBlockSchema).min(1),
  relatedServicesSlugs: z.array(z.string()),
  relatedCitiesSlugs: z.array(z.string())
});

function validateSchema(data) {
  return PageDataSchema.safeParse(data);
}

module.exports = {
  PageDataSchema,
  PageBlockSchema,
  validateSchema
};
