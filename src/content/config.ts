import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    featured: z.boolean(),
    relatedDistricts: z.array(z.string()),
    relatedServices: z.array(z.string())
  })
});

export const collections = { blog };
