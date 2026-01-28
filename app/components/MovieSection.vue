<template>
  <div class="py-8 border-b border-gray-800 last:border-0">
    <div class="flex flex-col md:flex-row gap-6">

      <!-- Left Side: Title & Action -->
      <div class="w-full md:w-1/5 flex-shrink-0 flex flex-col justify-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-100 mb-2 leading-tight">
          <span v-html="formattedTitle"></span>
        </h2>
        <NuxtLink :to="viewAllLink" class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-brand-gold transition-colors mt-2 group">
          Xem toàn bộ
          <Icon name="ph:caret-right" class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <!-- Right Side: Movie Slider -->
      <div class="flex-1 min-w-0 relative group/slider">
        <!-- Next Button (Absolute) -->
        <button class="absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-10 h-10 bg-white text-brand-dark rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-brand-gold">
          <Icon name="ph:caret-right-bold" class="w-5 h-5" />
        </button>

        <!-- Scroll Container -->
        <div class="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x">
          <div
            v-for="(movie, index) in movies"
            :key="index"
            class="snap-start flex-shrink-0 w-[200px] md:w-[220px] group/card cursor-pointer"
          >
            <!-- Thumbnail -->
            <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800 mb-3">
              <img
                :src="movie.image"
                :alt="movie.title"
                class="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <!-- Overlay Play Icon -->
              <div class="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover/card:opacity-100">
                <Icon name="ph:play-circle-fill" class="w-10 h-10 text-white drop-shadow-lg" />
              </div>

              <!-- Badges (Bottom Left) -->
              <div class="absolute bottom-2 left-2 flex gap-1 text-[10px] font-bold">
                <span v-if="movie.episodes" class="bg-gray-600/90 text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                  PĐ. {{ movie.episodes }}
                </span>
                <span v-if="movie.rating" class="bg-emerald-500/90 text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                  TM. {{ movie.rating }}
                </span>
              </div>
            </div>

            <!-- Meta -->
            <h3 class="text-white font-semibold text-sm line-clamp-2 mb-1 group-hover/card:text-brand-gold transition-colors">
              {{ movie.title }}
            </h3>
            <p class="text-gray-500 text-xs truncate">
              {{ movie.originalTitle }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  viewAllLink: {
    type: String,
    default: '#'
  },
  movies: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})

// Format title to add line break if it has multiple words presumably, or just trust the HTML passed
// But the user design shows "Phim Hàn \n Quốc Mới", creating a computed to break lines if needed.
// For now, I'll assume the prop can contain HTML or I'll just styling it.
// Actually, in the screenshot, "Phim Hàn" is on one line, "Quốc mới" on another.
// I'll make a simple formatter that splits by space and puts the last 2 words on new line if it's long?
// Or better, let the parent component pass HTML.
const formattedTitle = computed(() => {
    return props.title.replace('\n', '<br>')
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
