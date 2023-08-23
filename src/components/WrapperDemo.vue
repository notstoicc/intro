<script setup lang="ts">
import { formatDate } from '~/logics'

const { frontmatter, media, date } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
  media: {
    type: [String, Object], // Accepts either a single URL or an object containing URLs
  },
  date: {
    type: String,
    required: true,
  },
})

const isMediaObject = typeof media === 'object';
</script>

<template>
  <div>
    <a
      border="~ base rounded-lg" block of-hidden
      class="group"
      hover="scale-101 shadow-xl z-10" transition-all duration-500 bg-base relative
      :href="frontmatter.link"
      target="_blank"
    >
      <template v-if="isMediaObject">
        <video
          v-if="media.video"
          :src="media.video"
          w-full autoplay loop muted playsinline border="b base"
        />
        <img
          v-else-if="media.image"
          :src="media.image"
          alt="Media"
          w-full border="b base"
        />
      </template>
      
      <div class="prose prose-sm p4 m0 pb3">
        <slot />
        <div op50 text-sm pt2>{{ formatDate(date, false) }}</div>
      </div>
    </a>
  </div>
</template>
