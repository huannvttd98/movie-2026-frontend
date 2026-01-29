<template>
  <div class="py-10">
    <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-2">
      {{ title }}
    </h2>

    <div class="relative group/slider">
       <!-- Navigation -->
       <button class="absolute top-[40%] -right-4 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/50 hover:bg-brand-gold text-white hover:text-brand-dark rounded-full backdrop-blur-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 shadow-xl border border-white/10">
          <Icon name="ph:caret-right-bold" class="w-6 h-6" />
       </button>

      <div class="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x px-2">
        <NuxtLink
          v-for="(movie, index) in movies"
          :key="index"
          :to="`/movie/${movie.id}`"
          class="snap-start flex-shrink-0 w-[240px] group/card cursor-pointer block"
        >
            <!-- Poster -->
            <div class="relative aspect-[2/3] rounded-xl overflow-hidden mb-4 shadow-lg bg-gray-800">
                <img
                    :src="movie.image"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    loading="lazy"
                />

                <!-- Overlay Gradient -->
                 <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                <!-- Badges -->
                <div class="absolute bottom-3 right-3 flex gap-1.5 justify-end flex-wrap pl-4">
                    <span v-if="movie.quality" class="bg-gray-800/90 text-gray-200 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm shadow-sm border border-white/10">{{ movie.quality }}</span>
                    <span v-if="movie.dub" class="bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm shadow-sm">{{ movie.dub }}</span>
                </div>
            </div>

            <!-- Rank & Info -->
            <div class="flex items-start gap-5 relative">
                 <!-- Rank Number -->
                 <div class="text-[64px] leading-[0.8] font-black italic text-brand-gold/40 group-hover/card:text-brand-gold transition-colors duration-300 select-none font-sans -ml-1">
                    {{ index + 1 }}
                 </div>

                 <div class="flex-1 min-w-0 pt-0.5">
                    <h3 class="text-white font-bold text-sm leading-tight mb-1 truncate group-hover/card:text-brand-gold transition-colors">{{ movie.title }}</h3>
                    <p class="text-gray-500 text-xs truncate mb-2.5">{{ movie.originalTitle }}</p>

                    <div class="flex items-center flex-wrap gap-2 text-[10px] font-semibold text-gray-400">
                        <span class="bg-white text-black px-1 rounded font-bold" v-if="movie.age">{{ movie.age }}</span>
                        <span>{{ movie.year }}</span>
                        <span class="w-0.5 h-0.5 bg-gray-500 rounded-full"></span>
                        <span>{{ movie.duration }}</span>
                         <span v-if="movie.cam" class="text-gray-400 border border-gray-700 px-1 rounded ml-auto">CAM</span>
                    </div>
                 </div>
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
    default: 'Top 10 phim lẻ hôm nay'
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
