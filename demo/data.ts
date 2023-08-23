import type { Component } from 'vue'

const mediaFiles = import.meta.glob('./*.{mp4,jpg,png,gif}', { eager: true, as: 'url' })

export const demoItems = Array.from(Object.entries(import.meta.glob('./*.md', { eager: true })))
  .map(([path, page]: any) => {
    const date = path.slice(2, -3) as string;
    const comp = page.default as Component;
    const mediaPath = `./${path.slice(2, -3)}`;
    
    const supportedMediaExtensions = ['mp4', 'jpg', 'png', 'gif'];
    const media = supportedMediaExtensions.reduce((acc, ext) => {
      if (mediaFiles[`${mediaPath}.${ext}`]) {
        acc[ext] = mediaFiles[`${mediaPath}.${ext}`];
      }
      return acc;
    }, {} as Record<string, string>);
    
    return {
      date,
      comp,
      media,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
