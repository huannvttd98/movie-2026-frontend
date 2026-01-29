<template>
  <div class="pt-24 pb-12 min-h-screen bg-brand-dark">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Phim {{ genreName }}
        </h1>

        <!-- Filter Button -->
        <button class="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-gray-700">
          <Icon name="ph:funnel-fill" class="w-4 h-4" />
          Bộ lọc
        </button>
      </div>

      <!-- Movie Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <NuxtLink
          v-for="(movie, index) in movies"
          :key="index"
          :to="`/movie/${movie.id}`"
          class="group block"
        >
          <!-- Poster -->
          <div class="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-gray-900 mb-3 border border-gray-800 shadow-lg group-hover:shadow-brand-gold/10 transition-shadow">
            <img
              :src="movie.image"
              :alt="movie.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

            <!-- Badges -->
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 w-full justify-center px-1">
               <span v-if="movie.episodeInfo" class="bg-gray-700/90 text-gray-200 text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm border border-white/5 truncate max-w-[45%]">
                  {{ movie.episodeInfo }}
               </span>
               <span v-if="movie.qualityInfo" class="bg-emerald-600/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm truncate max-w-[45%]">
                  {{ movie.qualityInfo }}
               </span>
            </div>
          </div>

          <!-- Title -->
          <div class="text-center px-1">
            <h3 class="text-gray-100 font-bold text-sm leading-snug mb-1 line-clamp-1 group-hover:text-brand-gold transition-colors">
              {{ movie.title }}
            </h3>
            <p class="text-gray-500 text-[11px] line-clamp-1">
              {{ movie.originalTitle }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

// Map valid slugs to proper display names (mock logic)
const genreName = computed(() => {
  if (slug === 'marvel') return 'Marvel';
  if (slug === 'hanh-dong') return 'Hành Động';
  if (slug === 'tinh-cam') return 'Tình Cảm';
  return 'Mới Cập Nhật'; // Default
});

// Mock Data matching the screenshot
const movies = [
  {
    id: 1,
    title: 'Wonder Man',
    originalTitle: 'Wonder Man',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. 8'
  },
  {
    id: 2,
    title: 'Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên',
    originalTitle: 'The Fantastic Four: First Steps',
    image: 'https://images.unsplash.com/photo-1561149877-84d268ba65b8?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. 13',
    qualityInfo: 'T.Minh'
  },
  {
    id: 3,
    title: 'Marvel Zombies',
    originalTitle: 'Marvel Zombies',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. 4',
    qualityInfo: 'TM. 4'
  },
  {
    id: 4,
    title: 'Người Nhện: Loạt Phim Hoạt Hình',
    originalTitle: 'Spider-Man',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. 13'
  },
  {
    id: 5,
    title: 'Người Nhện: Trở Về Nhà',
    originalTitle: 'Spider-Man: Homecoming',
    image: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. Đề',
    qualityInfo: 'T.Minh'
  },
  {
    id: 6,
    title: 'Eternals: Chủng Tộc Bất Tử',
    originalTitle: 'Eternals',
    image: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. Đề',
    qualityInfo: 'T.Minh'
  },
  {
    id: 7,
    title: 'Người Nhện: Xa Nhà',
    originalTitle: 'Spider-Man: Far From Home',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. Đề',
    qualityInfo: 'T.Minh'
  },
  {
    id: 8,
    title: 'Đôi Mắt của Wakanda',
    originalTitle: 'Eyes of Wakanda',
    image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop',
    episodeInfo: 'PĐ. 4'
  },
    {
    id: 9,
    title: 'Avengers: Secret Wars',
    originalTitle: 'Avengers: Secret Wars',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop',
    episodeInfo: 'Trailer'
  },
   {
    id: 10,
    title: 'Blade',
    originalTitle: 'Blade',
    image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?w=500&auto=format&fit=crop',
    episodeInfo: 'Trailer'
  }
]

useHead({
  title: `Phim ${genreName.value} - RoPhim`,
})
</script>
