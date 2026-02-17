import { defineCollection, z } from 'astro:content';

// Definição da coleção de posts do blog
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
