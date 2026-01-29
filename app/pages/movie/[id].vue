<template>
  <div>
    <div class="relative w-full h-[70vh] min-h-[500px] bg-brand-dark overflow-hidden font-sans text-white">

      <!-- Video Player Overlay (Full Screen Mode) -->
      <div v-if="showPlayer" class="fixed inset-0 z-50 bg-black flex flex-col animate-fadeIn">
        <!-- Main Player Area -->
        <div class="relative flex-1 bg-black flex items-center justify-center group overflow-hidden">
             <!-- Video Mockup -->
             <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                class="w-full h-full object-contain"
                poster="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670"
                autoplay
                loop
                muted
             ></video>

             <!-- Top Controls (Back) -->
             <div class="absolute top-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/80 to-transparent">
                <button @click="showPlayer = false" class="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                    <Icon name="ph:arrow-left" class="w-8 h-8" />
                    <span class="font-bold text-lg">{{ movie.title }}</span>
                </button>
             </div>

             <!-- Center Play Button (Optional - if paused) -->
             <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                <Icon name="ph:play-circle-fill" class="w-24 h-24 text-white/50" />
             </div>

             <!-- Bottom Controls Overlay -->
             <div class="absolute bottom-0 left-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <!-- Shadow Gradient -->
                <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

                <div class="relative px-6 pb-6">
                    <!-- Progress Bar -->
                    <div class="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer relative group/progress hover:h-2 transition-all">
                        <div class="absolute top-0 left-0 h-full bg-brand-gold w-[14%] rounded-full relative">
                            <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-gold rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-lg"></div>
                        </div>
                    </div>

                    <!-- Controls Row -->
                    <div class="flex items-center justify-between">
                        <!-- Left Controls -->
                        <div class="flex items-center gap-6">
                            <!-- Play/Pause -->
                            <button class="text-white hover:text-brand-gold transition-colors">
                                <Icon name="ph:pause-circle-fill" class="w-12 h-12" />
                            </button>

                            <!-- Skip Buttons -->
                            <div class="flex items-center gap-4">
                                <button class="text-white/80 hover:text-white flex flex-col items-center gap-1 group/skip">
                                    <Icon name="ph:arrow-counter-clockwise" class="w-6 h-6 group-active/skip:-rotate-45 transition-transform" />
                                    <span class="text-[10px] font-bold">10s</span>
                                </button>
                                <button class="text-white/80 hover:text-white flex flex-col items-center gap-1 group/skip">
                                    <Icon name="ph:arrow-clockwise" class="w-6 h-6 group-active/skip:rotate-45 transition-transform" />
                                    <span class="text-[10px] font-bold">10s</span>
                                </button>
                            </div>

                            <!-- Volume -->
                            <div class="flex items-center gap-3 group/volume ml-2">
                                <button class="text-white hover:text-brand-gold">
                                    <Icon name="ph:speaker-high-fill" class="w-7 h-7" />
                                </button>
                                <div class="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300">
                                    <div class="h-1.5 bg-white/30 rounded-full w-20 cursor-pointer">
                                        <div class="h-full bg-white w-2/3 rounded-full relative">
                                            <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <!-- Time -->
                             <div class="text-sm font-medium text-gray-300 ml-2 font-mono">
                                <span class="text-white">00:14</span>
                                <span class="mx-1 opacity-50">/</span>
                                <span>2:09:35</span>
                            </div>
                        </div>

                        <!-- Right Controls -->
                        <div class="flex items-center gap-5">
                            <button class="text-white/80 hover:text-brand-gold transition-colors" title="Picture in Picture">
                                <Icon name="ph:picture-in-picture-fill" class="w-6 h-6" />
                            </button>
                             <button class="text-white/80 hover:text-brand-gold transition-colors" title="Settings">
                                <Icon name="ph:gear-six-fill" class="w-6 h-6" />
                            </button>
                             <button class="text-white/80 hover:text-brand-gold transition-colors" title="Fullscreen">
                                <Icon name="ph:corners-out-fill" class="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <!-- Bottom Action Bar -->
        <div class="bg-[#121212] px-8 py-4 flex items-center justify-between border-t border-white/5 text-sm font-medium shrink-0 z-30">
            <div class="flex items-center gap-8 text-gray-400">
                <button class="flex items-center gap-2 hover:text-brand-gold transition-colors group">
                    <Icon name="ph:heart-fill" class="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Yêu thích
                </button>
                 <button class="flex items-center gap-2 hover:text-brand-gold transition-colors group">
                    <Icon name="ph:plus-circle-fill" class="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Thêm vào
                </button>

                <div class="h-6 w-px bg-white/10 mx-2"></div>

                 <div class="flex items-center gap-3">
                    <span class="text-gray-300">Bỏ qua giới thiệu</span>
                    <button class="w-11 h-6 bg-gray-700 rounded-full relative px-1 flex items-center transition-colors hover:bg-gray-600">
                        <div class="w-4 h-4 bg-gray-400 rounded-full shadow-sm"></div>
                        <span class="absolute right-1.5 text-[10px] font-bold text-gray-400">OFF</span>
                    </button>
                </div>

                 <div class="flex items-center gap-3">
                    <span class="text-gray-300">Rạp phim</span>
                    <button class="w-11 h-6 bg-gray-700 rounded-full relative px-1 flex items-center transition-colors hover:bg-gray-600">
                        <div class="w-4 h-4 bg-gray-400 rounded-full shadow-sm"></div>
                        <span class="absolute right-1.5 text-[10px] font-bold text-gray-400">OFF</span>
                    </button>
                </div>

                <div class="h-6 w-px bg-white/10 mx-2"></div>

                 <button class="flex items-center gap-2 hover:text-brand-gold transition-colors">
                    <Icon name="ph:users-three-fill" class="w-5 h-5" />
                    Xem chung
                </button>
                 <button class="flex items-center gap-2 hover:text-brand-gold transition-colors">
                    <Icon name="ph:share-network-fill" class="w-5 h-5" />
                    Chia sẻ
                </button>
            </div>

             <button class="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                <Icon name="ph:flag-fill" class="w-5 h-5" />
                Báo lỗi
            </button>
        </div>
      </div>

      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          :src="movie.image"
          :alt="movie.title"
          class="w-full h-full object-cover opacity-60"
        />
        <!-- Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-20">
        <div class="max-w-4xl">
          <NuxtLink to="/" class="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <Icon name="ph:arrow-left" class="mr-2" />
            Quay lại trang chủ
          </NuxtLink>

          <!-- Titles -->
          <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-tight">
            {{ movie.title }}
          </h1>
          <h2 class="text-xl md:text-2xl font-serif text-gray-200 mb-6 italic tracking-wide">
            {{ movie.originalTitle }}
          </h2>

          <!-- Metadata Badges -->
          <div class="flex flex-wrap items-center gap-3 mb-6 font-medium text-xs md:text-sm">
            <span class="border border-brand-gold text-brand-gold px-2 py-0.5 rounded bg-brand-gold/10">IMDb 8.5</span>
            <span class="bg-white text-black px-2 py-0.5 rounded font-bold">{{ movie.age }}</span>
            <span class="border border-gray-600 px-2 py-0.5 rounded">{{ movie.year }}</span>
            <span class="border border-gray-600 px-2 py-0.5 rounded">{{ movie.duration }}</span>
            <span class="bg-red-600 text-white px-2 py-0.5 rounded font-bold">{{ movie.quality }}</span>
          </div>

          <!-- Genres -->
          <div class="flex flex-wrap gap-2 text-xs md:text-sm text-gray-300 mb-6 font-medium">
              <span v-for="tag in ['Hành Động', 'Phiêu Lưu', 'Khoa Học Viễn Tưởng']" :key="tag" class="bg-white/10 px-3 py-1 rounded-full hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-colors">
                  {{ tag }}
              </span>
          </div>

          <!-- Description -->
          <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            {{ movie.description }}
          </p>

          <!-- Actions -->
          <div class="flex items-center gap-4">
            <button @click="showPlayer = true" class="bg-brand-gold hover:bg-yellow-400 text-brand-dark font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
              <Icon name="ph:play-fill" class="w-6 h-6" />
              Xem Ngay
            </button>

            <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
              <Icon name="ph:heart-fill" class="w-5 h-5" />
            </button>

            <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
              <Icon name="ph:share-network-fill" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Content / Tabs -->
    <div class="min-h-screen bg-brand-dark">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Column -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Cast -->
            <section>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="ph:users" class="text-brand-gold" />
                Diễn viên
              </h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                 <div v-for="i in 4" :key="i" class="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                    <img :src="`https://i.pravatar.cc/150?u=${i}`" class="w-12 h-12 rounded-full object-cover" alt="Actor">
                    <div>
                      <div class="text-white font-medium text-sm">Actor Name</div>
                      <div class="text-gray-400 text-xs">Character</div>
                    </div>
                 </div>
              </div>
            </section>

             <!-- Episodes (if series) -->
             <section class="bg-gray-800/50 rounded-xl p-6 border border-white/5">
                <h3 class="text-xl font-bold text-white mb-4">Danh sách tập</h3>
                <div class="flex flex-wrap gap-3">
                  <button v-for="ep in 12" :key="ep" class="w-12 h-12 rounded bg-gray-700 hover:bg-brand-gold hover:text-brand-dark text-white flex items-center justify-center font-medium transition-colors">
                    {{ ep }}
                  </button>
                </div>
             </section>

             <!-- Comments Placeholder -->
             <section>
                <h3 class="text-2xl font-bold text-white mb-6">Bình luận</h3>
                <div class="bg-gray-800/30 rounded-xl p-6 text-center text-gray-400">
                  Chức năng bình luận đang được phát triển
                </div>
             </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <h3 class="text-xl font-bold text-white mb-4 border-l-4 border-brand-gold pl-3">Phim đề xuất</h3>
            <div class="space-y-4">
              <div v-for="i in 5" :key="i" class="flex gap-4 group cursor-pointer">
                <div class="w-24 aspect-[2/3] rounded overflow-hidden relative">
                   <img :src="`https://picsum.photos/seed/${i+50}/200/300`" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Related">
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-medium group-hover:text-brand-gold transition-colors line-clamp-2">Tên phim liên quan {{ i }}</h4>
                  <div class="text-gray-400 text-sm mt-1">2025 • Hành động</div>
                  <div class="flex items-center gap-1 text-brand-gold text-xs mt-2">
                    <Icon name="ph:star-fill" />
                    <span>8.{{ i }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const showPlayer = ref(false);

// Mock data based on ID (real app would fetch from API)
// For now we just return a static object but we could use the ID to customize it slightly if needed
const movie = computed(() => {
  return {
    id: id,
    title: 'Thảm Họa Thiên Thạch 2: Cuộc Di Tản',
    originalTitle: 'Greenland 2: Migration',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/sJt_i0hOugA?list=RDsJt_i0hOugA', // Mock trailer URL
    quality: 'Full HD',
    age: 'T16',
    year: '2026',
    duration: '1h 38m',
    description: 'Sau ngày tận thế, gia đình Garrity rời boong-ke an toàn ở Greenland, mạo hiểm tất cả để bước vào một hành trình đầy hiểm nguy, băng qua vùng đất hoang tàn của châu Âu nhằm tìm kiếm một mái nhà mới. Họ phải đối mặt với những thử thách khắc nghiệt của thiên nhiên và cả sự tàn nhẫn của con người trong thế giới hậu tận thế.',
  }
})

useHead({
  title: `Xem phim ${movie.value.title}`,
})
</script>
