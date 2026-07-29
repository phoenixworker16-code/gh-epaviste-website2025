import { z } from 'zod';
import type { 
  PageData, 
  PageBlock,
  HeroBlock,
  IntroductionBlock,
  ZfeAlertBlock,
  UndergroundParkingBlock,
  DocsPreparationBlock,
  TipsAndMistakesBlock,
  LocalCoverageBlock,
  CoproprietyBlock,
  VhuComplianceBlock,
  VehicleTypesBlock,
  FaqLocalBlock,
  CtaBlock
} from '../types';

export const HeroBlockSchema = z.object({
  type: z.literal('Hero'),
  title: z.string(),
  subtitle: z.string(),
  badge: z.string().optional(),
  bgType: z.enum(['city', 'nature', 'urban']).optional()
}) satisfies z.ZodType<HeroBlock>;

export const IntroductionBlockSchema = z.object({
  type: z.literal('Introduction'),
  title: z.string(),
  content: z.string()
}) satisfies z.ZodType<IntroductionBlock>;

export const ZfeAlertBlockSchema = z.object({
  type: z.literal('ZfeAlert'),
  title: z.string(),
  content: z.string(),
  level: z.enum(['info', 'warning'])
}) satisfies z.ZodType<ZfeAlertBlock>;

export const UndergroundParkingBlockSchema = z.object({
  type: z.literal('UndergroundParking'),
  title: z.string(),
  content: z.string(),
  maxHeight: z.string().optional()
}) satisfies z.ZodType<UndergroundParkingBlock>;

export const DocsPreparationBlockSchema = z.object({
  type: z.literal('DocsPreparation'),
  title: z.string(),
  intro: z.string(),
  specialCase: z.string().optional()
}) satisfies z.ZodType<DocsPreparationBlock>;

export const TipsAndMistakesBlockSchema = z.object({
  type: z.literal('TipsAndMistakes'),
  title: z.string(),
  tips: z.array(z.string()),
  mistakes: z.array(z.string())
}) satisfies z.ZodType<TipsAndMistakesBlock>;

export const LocalCoverageBlockSchema = z.object({
  type: z.literal('LocalCoverage'),
  title: z.string(),
  intro: z.string(),
  zones: z.array(z.object({
    name: z.string(),
    delay: z.string(),
    specificities: z.string().optional()
  }))
}) satisfies z.ZodType<LocalCoverageBlock>;

export const CoproprietyBlockSchema = z.object({
  type: z.literal('Copropriety'),
  title: z.string(),
  content: z.string()
}) satisfies z.ZodType<CoproprietyBlock>;

export const VhuComplianceBlockSchema = z.object({
  type: z.literal('VhuCompliance'),
  title: z.string(),
  content: z.string()
}) satisfies z.ZodType<VhuComplianceBlock>;

export const VehicleTypesBlockSchema = z.object({
  type: z.literal('VehicleTypes'),
  title: z.string(),
  accepted: z.array(z.string())
}) satisfies z.ZodType<VehicleTypesBlock>;

export const FaqLocalBlockSchema = z.object({
  type: z.literal('FaqLocal'),
  title: z.string(),
  questions: z.array(z.object({
    q: z.string(),
    a: z.string()
  }))
}) satisfies z.ZodType<FaqLocalBlock>;

export const CtaBlockSchema = z.object({
  type: z.literal('Cta'),
  title: z.string(),
  subtitle: z.string()
}) satisfies z.ZodType<CtaBlock>;

export const PageBlockSchema = z.discriminatedUnion('type', [
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
]) satisfies z.ZodType<PageBlock>;

export const PageDataSchema = z.object({
  slug: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  entityType: z.enum(['Department', 'City']),
  blocks: z.array(PageBlockSchema),
  relatedServicesSlugs: z.array(z.string()),
  relatedCitiesSlugs: z.array(z.string())
}) satisfies z.ZodType<PageData>;
