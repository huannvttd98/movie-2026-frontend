<template>
  <div class="relative w-full h-screen min-h-[600px] bg-brand-dark overflow-hidden font-sans text-white">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop"
        alt="Movie Background"
        class="w-full h-full object-cover opacity-60"
      />
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-20">
      <div class="max-w-3xl">
        <!-- Titles -->
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-tight">
          Thảm Họa Thiên Thạch 2
        </h1>
        <h2 class="text-2xl md:text-4xl font-serif text-gray-200 mb-6 italic tracking-wide">
          Cuộc Di Tản
        </h2>
        <p class="text-brand-gold text-sm mb-4">Greenland 2: Migration</p>

        <!-- Metadata Badges -->
        <div class="flex flex-wrap items-center gap-3 mb-6 font-medium text-xs md:text-sm">
          <span class="border border-brand-gold text-brand-gold px-2 py-0.5 rounded bg-brand-gold/10">IMDb 5.7</span>
          <span class="bg-white text-black px-2 py-0.5 rounded font-bold">T16</span>
          <span class="border border-gray-600 px-2 py-0.5 rounded">2026</span>
          <span class="border border-gray-600 px-2 py-0.5 rounded">1h 38m</span>
        </div>

        <!-- Genres -->
        <div class="flex flex-wrap gap-2 text-xs md:text-sm text-gray-300 mb-6 font-medium">
            <span v-for="tag in ['Hành Động', 'Chiếu Rạp', 'Gay Cấn', 'Khoa Học', 'Viễn Tưởng', 'Phiêu Lưu']" :key="tag" class="hover:text-brand-gold cursor-pointer transition-colors">
                {{ tag }}
            </span>
        </div>

        <!-- Description -->
        <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl line-clamp-3">
          Sau ngày tận thế, gia đình Garrity rời boong-ke an toàn ở Greenland, mạo hiểm tất cả để bước vào một hành trình đầy hiểm nguy, băng qua vùng đất hoang tàn của châu Âu nhằm tìm kiếm một mái nhà mới.
        </p>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <button class="bg-brand-gold hover:bg-yellow-400 text-brand-dark rounded-full w-14 h-14 flex items-center justify-center transition-transform hover:scale-105">
            <Icon name="ph:play-fill" class="w-6 h-6 ml-1" />
          </button>

          <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
            <Icon name="ph:heart-fill" class="w-5 h-5" />
          </button>

          <NuxtLink to="/movie/1" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
            <Icon name="ph:info" class="w-6 h-6" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Right Side Thumbnails (Absolute Position) -->
    <div class="absolute bottom-24 right-4 md:right-10 z-20 hidden lg:flex items-center gap-3">
        <button class="border-2 border-white rounded-lg overflow-hidden w-32 aspect-video transition-all hover:scale-105 shadow-lg">
            <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover" />
        </button>
        <button v-for="i in 4" :key="i" class="border border-gray-600 rounded-lg overflow-hidden w-20 aspect-video opacity-60 hover:opacity-100 transition-all hover:scale-105">
            <img :src="`https://picsum.photos/seed/${i + 15}/200/120`" class="w-full h-full object-cover" />
        </button>
        <!-- Arrow -->
         <button class="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full hover:bg-brand-gold hover:text-black transition-colors">
            <Icon name="ph:caret-right" />
         </button>
    </div>

    <!-- Bottom Loading Bar / Divider -->
    <div class="absolute bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gray-700/50">
        <div class="h-full w-1/3 bg-white/80"></div>
    </div>

  </div>
</template>
