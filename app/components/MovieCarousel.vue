<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-6 px-4 md:px-0">
      <h2 class="text-2xl md:text-3xl font-bold text-white leading-tight">
        {{ title }}
      </h2>
      <NuxtLink to="#" class="text-gray-400 hover:text-brand-gold text-sm font-medium flex items-center transition-colors">
        Xem tất cả <Icon name="ph:caret-right" class="ml-1" />
      </NuxtLink>
    </div>

    <div class="relative group/slider">
      <!-- Nav Button -->
      <!-- <button class="absolute top-1/2 -right-4 -translate-y-[60%] z-20 w-10 h-10 bg-gray-800/80 hover:bg-brand-gold text-white hover:text-brand-dark rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all">
          <Icon name="ph:caret-right-bold" />
      </button> -->

      <div class="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-0 pb-4 snap-x">
        <NuxtLink
          v-for="(movie, index) in movies"
          :key="index"
          :to="`/movie/${movie.id}`"
          class="snap-start flex-shrink-0 w-[160px] md:w-[200px] group/card cursor-pointer block"
        >
          <!-- Poster -->
          <div class="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-gray-900 mb-3 border border-gray-800">
            <img
              :src="movie.image"
              :alt="movie.title"
              class="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/10 group-hover/card:bg-black/20 transition-colors"></div>

            <!-- Center Badge (P.Đề) -->
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2">
               <span class="bg-gray-600/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">
                  P.Đề
               </span>
            </div>
          </div>

          <!-- Title -->
          <div class="text-center">
            <h3 class="text-gray-100 font-bold text-sm leading-snug mb-1 line-clamp-1 group-hover/card:text-brand-gold transition-colors">
              {{ movie.title }}
            </h3>
            <p class="text-gray-500 text-xs line-clamp-1">
              {{ movie.originalTitle }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  movies: {
    type: Array as PropType<any[]>,
    default: () => []
  }
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
