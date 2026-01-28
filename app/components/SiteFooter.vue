<template>
  <footer class="relative bg-[#06070a] text-gray-400 text-sm pt-12 pb-8 overflow-hidden">
    <!-- Background overlay (Big Logo) -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none select-none">
       <Icon name="ph:play-circle-light" class="w-[600px] h-[600px] text-white" />
    </div>

    <div class="container mx-auto px-4 relative z-10">

      <!-- Nationalist Badge -->
      <div class="inline-flex items-center gap-2 bg-red-900/80 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-8 hover:bg-red-800 transition-colors cursor-default border border-red-700">
        <Icon name="ph:star-fill" class="text-yellow-400 w-3 h-3" />
        <span>Hoàng Sa & Trường Sa là của Việt Nam!</span>
      </div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
        <!-- Logo -->
        <div class="flex items-center gap-3">
           <div class="bg-brand-gold rounded-full p-2">
            <Icon name="ph:play-fill" class="text-brand-dark w-6 h-6" />
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-white font-bold text-2xl tracking-wide">RoPhim</span>
            <span class="text-gray-500 text-xs">Phim hay cả rổ</span>
          </div>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-2 flex-wrap">
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:telegram-logo" class="w-4 h-4" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:discord-logo" class="w-4 h-4" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:x-logo" class="w-4 h-4" />
            </a>
             <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:facebook-logo" class="w-4 h-4" />
            </a>
             <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:tiktok-logo" class="w-4 h-4" />
            </a>
             <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:youtube-logo" class="w-4 h-4" />
            </a>
             <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:at" class="w-4 h-4" /> <!-- Threads placeholder -->
            </a>
             <a href="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Icon name="ph:instagram-logo" class="w-4 h-4" />
            </a>
        </div>
      </div>

      <!-- Links -->
      <div class="flex flex-wrap gap-x-6 gap-y-2 mb-4 font-medium text-gray-300">
        <a href="#" class="hover:text-brand-gold transition-colors">Hỏi-Đáp</a>
        <a href="#" class="hover:text-brand-gold transition-colors">Chính sách bảo mật</a>
        <a href="#" class="hover:text-brand-gold transition-colors">Điều khoản sử dụng</a>
        <a href="#" class="hover:text-brand-gold transition-colors">Giới thiệu</a>
        <a href="#" class="hover:text-brand-gold transition-colors">Liên hệ</a>
      </div>

      <!-- Partners -->
      <div class="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-xs text-gray-500 font-medium">
        <a href="#" class="hover:text-gray-300 transition-colors">Dongphim</a>
        <a href="#" class="hover:text-gray-300 transition-colors">Ghienphim</a>
        <a href="#" class="hover:text-gray-300 transition-colors">Motphim</a>
        <a href="#" class="hover:text-gray-300 transition-colors">Subnhanh</a>
      </div>

      <!-- Description -->
      <p class="text-gray-500 text-xs leading-relaxed mb-6 max-w-4xl">
        RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn phí Vietsub, thuyết minh, lồng tiếng full HD.
        Kho phim mới khổng lồ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ... đa dạng thể loại.
        Khám phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
      </p>

      <!-- Copyright -->
      <div class="text-xs text-gray-600">
        © 2024 RoPhim
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors z-50 group"
    >
      <Icon name="ph:arrow-up-bold" class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
