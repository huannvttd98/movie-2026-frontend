<template>
  <div class="relative w-full h-screen min-h-[600px] bg-brand-dark overflow-hidden font-sans text-white transition-all duration-500">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 select-none">
      <transition
        enter-active-class="transition-opacity duration-700 ease-in-out"
        leave-active-class="transition-opacity duration-700 ease-in-out"
        mode="in-out"
      >
        <img
          :key="activeMovie.image"
          :src="activeMovie.image"
          :alt="activeMovie.title"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </transition>

      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40 z-10"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-20">
      <transition name="slide-text" mode="out-in">
        <div :key="activeMovie.id" class="max-w-3xl">
          <!-- Titles -->
          <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-tight drop-shadow-lg">
            {{ activeMovie.title }}
          </h1>
          <h2 class="text-2xl md:text-4xl font-serif text-gray-200 mb-6 italic tracking-wide">
            {{ activeMovie.subtitle }}
          </h2>
          <p class="text-brand-gold text-sm mb-4">{{ activeMovie.originalTitle }}</p>

          <!-- Metadata Badges -->
          <div class="flex flex-wrap items-center gap-3 mb-6 font-medium text-xs md:text-sm">
            <span class="border border-brand-gold text-brand-gold px-2 py-0.5 rounded bg-brand-gold/10">IMDb {{ activeMovie.imdb }}</span>
            <span class="bg-white text-black px-2 py-0.5 rounded font-bold">{{ activeMovie.age }}</span>
            <span class="border border-gray-600 px-2 py-0.5 rounded">{{ activeMovie.year }}</span>
            <span class="border border-gray-600 px-2 py-0.5 rounded">{{ activeMovie.duration }}</span>
          </div>

          <!-- Genres -->
          <div class="flex flex-wrap gap-2 text-xs md:text-sm text-gray-300 mb-6 font-medium">
              <span v-for="tag in activeMovie.tags" :key="tag" class="hover:text-brand-gold cursor-pointer transition-colors bg-white/5 px-2 py-0.5 rounded">
                  {{ tag }}
              </span>
          </div>

          <!-- Description -->
          <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl line-clamp-3">
            {{ activeMovie.description }}
          </p>

          <!-- Actions -->
          <div class="flex items-center gap-4">
            <button class="bg-brand-gold hover:bg-yellow-400 text-brand-dark rounded-full w-14 h-14 flex items-center justify-center transition-transform hover:scale-105 shadow-brand-gold/50 shadow-lg">
              <Icon name="ph:play-fill" class="w-6 h-6 ml-1" />
            </button>

            <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors border border-white/10">
              <Icon name="ph:heart-fill" class="w-5 h-5" />
            </button>

            <NuxtLink :to="`/movie/${activeMovie.id}`" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors border border-white/10">
              <Icon name="ph:info" class="w-6 h-6" />
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>

    <!-- Right Side Thumbnails (Absolute Position) -->
    <div class="absolute bottom-24 right-4 md:right-10 z-20 hidden lg:flex items-center gap-3">
        <!-- Next Movie (Big) -->
        <button
           v-if="nextMovies.length > 0"
           @click="setMovie(nextMovies[0])"
           class="border-2 border-brand-gold rounded-lg overflow-hidden w-32 aspect-video transition-all hover:scale-105 shadow-xl relative group ring-2 ring-black/50">
            <img :src="nextMovies[0].thumbnail" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </button>

        <!-- Other Upcoming (Small) -->
        <button
            v-for="(movie) in nextMovies.slice(1)"
            :key="movie.id"
            @click="setMovie(movie)"
            class="border border-gray-600 rounded-lg overflow-hidden w-20 aspect-video opacity-60 hover:opacity-100 transition-all hover:scale-105 relative group">
            <img :src="movie.thumbnail" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
        </button>

        <!-- Arrow (Next) -->
         <button @click="nextSlide" class="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full hover:bg-brand-gold hover:text-black transition-colors transform active:scale-95">
            <Icon name="ph:caret-right" />
         </button>
    </div>

    <!-- Bottom Loading Bar / Divider -->
    <div class="absolute bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gray-700/50">
        <!-- Animated progress bar effect -->
        <div class="h-full bg-brand-gold/80 relative overflow-hidden w-1/4"  >
             <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full -translate-x-full animate-shimmer"></div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const movies = [
  {
    id: 1,
    title: 'Thảm Họa Thiên Thạch 2',
    subtitle: 'Cuộc Di Tản',
    originalTitle: 'Greenland 2: Migration',
    imdb: '5.7',
    age: 'T16',
    year: '2026',
    duration: '1h 38m',
    tags: ['Hành Động', 'Chiếu Rạp', 'Gay Cấn', 'Khoa Học', 'Viễn Tưởng', 'Phiêu Lưu'],
    description: 'Sau ngày tận thế, gia đình Garrity rời boong-ke an toàn ở Greenland, mạo hiểm tất cả để bước vào một hành trình đầy hiểm nguy, băng qua vùng đất hoang tàn của châu Âu nhằm tìm kiếm một mái nhà mới.',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Dune: Hành Tinh Cát',
    subtitle: 'Phần Hai',
    originalTitle: 'Dune: Part Two',
    imdb: '8.8',
    age: 'C18',
    year: '2024',
    duration: '2h 46m',
    tags: ['Hành Động', 'Phiêu Lưu', 'Khoa Học Viễn Tưởng'],
    description: 'Paul Atreides hợp nhất với Chani và người Fremen trong khi tìm kiếm sự trả thù chống lại những kẻ âm mưu đã phá hủy gia đình anh.',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2670&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=300&auto=format&fit=crop'
  },
   {
    id: 3,
    title: 'Biệt Đội Đánh Thuê 4',
    subtitle: 'Sự Trở Lại',
    originalTitle: 'Expend4bles',
    imdb: '6.5',
    age: 'C18',
    year: '2025',
    duration: '1h 43m',
    tags: ['Hành Động', 'Phiêu Lưu', 'Hài'],
    description: 'Biệt đội đánh thuê trở lại với nhiệm vụ mới, đối mặt với những kẻ thù nguy hiểm hơn bao giờ hết.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2670&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop'
  },
     {
    id: 4,
    title: 'Vùng Đất Câm Lặng',
    subtitle: 'Ngày Một',
    originalTitle: 'A Quiet Place: Day One',
    imdb: '7.2',
    age: 'T16',
    year: '2024',
    duration: '1h 50m',
    tags: ['Kinh Dị', 'Khoa Học Viễn Tưởng', 'Gay Cấn'],
    description: 'Trải nghiệm ngày thế giới trở nên im lặng khi những sinh vật đáng sợ xuất hiện.',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=300&auto=format&fit=crop'
  }
];

const currentIndex = ref(0);
const progress = ref(0);
const timer = ref<NodeJS.Timeout | null>(null);

const activeMovie = computed(() => movies[currentIndex.value]);

const nextMovies = computed(() => {
    // Get next 5 movies, wrapping around
    const result = [];
    for (let i = 1; i <= 5; i++) {
        result.push(movies[(currentIndex.value + i) % movies.length]);
    }
    return result;
});

const setMovie = (movie: any) => {
  const index = movies.findIndex(m => m.id === movie.id);
  if (index !== -1) {
    currentIndex.value = index;
    resetAutoSlide();
  }
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % movies.length;
    resetAutoSlide();
}

// Auto Slide Logic
const startAutoSlide = () => {
    progress.value = 0;
    // Update progress every 100ms
    const interval = 100;
    const duration = 10000; // 10 seconds per slide
    const step = 100 / (duration / interval);

    if (timer.value) clearInterval(timer.value);

    timer.value = setInterval(() => {
        progress.value += step;
        if (progress.value >= 100) {
            nextSlide();
        }
    }, interval);
}

const resetAutoSlide = () => {
    if (timer.value) clearInterval(timer.value);
    startAutoSlide();
}

onMounted(() => {
    startAutoSlide();
})

onUnmounted(() => {
    if (timer.value) clearInterval(timer.value);
})
</script>

<style scoped>
/* Image Transition (Right to Left) */
.slide-image-enter-active,
.slide-image-leave-active {
  transition: all 0.7s ease-in-out;
}
.slide-image-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-image-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Text Transition (Left to Right) */
.slide-text-enter-active,
.slide-text-leave-active {
  transition: all 0.7s ease-in-out;
}
.slide-text-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-text-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

/* Optional keyframes for loading bar shimmer if strict tailwind not enough */
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
