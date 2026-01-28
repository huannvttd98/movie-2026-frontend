<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-brand-dark/90 to-transparent">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Logo & Search -->
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="bg-brand-gold rounded-full p-1.5 ">
            <Icon name="ph:play-fill" class="text-brand-dark w-5 h-5" />
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-white font-bold text-xl tracking-wide">RoPhim</span>
            <span class="text-brand-text-gray text-xs">Phim hay cả rổ</span>
          </div>
        </NuxtLink>

        <!-- Search Bar -->
        <div class="relative hidden lg:block group">
          <div class="relative flex items-center bg-brand-gray/80 rounded-full overflow-hidden border border-transparent focus-within:border-brand-text-gray/50 transition-all w-80">
            <Icon name="ph:magnifying-glass" class="w-5 h-5 text-gray-400 ml-4 absolute pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm kiếm phim, diễn viên"
              class="w-full bg-transparent text-sm text-gray-200 py-2.5 pl-12 pr-4 outline-none placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-300">
        <NuxtLink to="#" class="hover:text-brand-gold transition-colors">Phim Lẻ</NuxtLink>
        <NuxtLink to="#" class="hover:text-brand-gold transition-colors">Phim Bộ</NuxtLink>
        <button class="flex items-center gap-1 hover:text-brand-gold transition-colors">
          Thể loại <Icon name="ph:caret-down" class="w-3 h-3" />
        </button>
        <button class="flex items-center gap-1 hover:text-brand-gold transition-colors">
          Quốc gia <Icon name="ph:caret-down" class="w-3 h-3" />
        </button>
        <NuxtLink to="#" class="hover:text-brand-gold transition-colors">Xem Chung</NuxtLink>
        <button class="flex items-center gap-1 hover:text-brand-gold transition-colors">
          Thêm <Icon name="ph:caret-down" class="w-3 h-3" />
        </button>
        <NuxtLink to="#" class="flex items-center gap-2 text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full hover:bg-brand-gold/20 transition-colors">
          <span class="bg-brand-gold text-brand-dark text-[10px] font-bold px-1 rounded">NEW</span>
          Rổ Bóng
        </NuxtLink>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-4">
        <button class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
          <Icon name="ph:device-mobile" class="w-5 h-5 text-brand-gold" />
          <div class="hidden md:flex flex-col items-start leading-none text-xs">
            <span class="text-gray-400">Tải ứng dụng</span>
            <span class="font-bold">RoPhim</span>
          </div>
        </button>

        <button class="flex items-center gap-2 bg-gray-100 hover:bg-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-full transition-colors">
          <Icon name="ph:user-fill" class="w-4 h-4" />
          <span>Thành viên</span>
        </button>
      </div>
    </div>
  </header>
</template>
