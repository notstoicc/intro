import type { Component } from 'vue'

const mediaFiles = import.meta.glob('./*.{mp4,jpg,png,gif}', { eager: true, as: 'url' })

export const demoItems = Array.from(Object.entries(import.meta.glob('./*.{md,mp4,jpg,png,gif}', { eager: true })))
  .map(([path, page]: any) => {
    const date = path.slice(2, -3) as string;
    const comp = page.default as Component;
    const mediaPath = `./${path.slice(2, -3)}`;

    const supportedMediaExtensions = ['mp4', 'jpg', 'png', 'gif'];
    const media: Record<string, string> = {};

    supportedMediaExtensions.forEach(ext => {
      if (mediaFiles[`${mediaPath}.${ext}`]) {
        media[ext] = mediaFiles[`${mediaPath}.${ext}`];
      }
    });

    return {
      date,
      comp,
      media,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
