<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-brand-dark/90 to-transparent">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Logo & Search -->
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="bg-brand-gold rounded-full w-8 h-8 flex items-center justify-center">
            <Icon name="ph:play-fill" class="text-brand-dark w-5 h-5 " />
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
        <NuxtLink to="/genre/phim-le" class="hover:text-brand-gold transition-colors">Phim Lẻ</NuxtLink>
        <NuxtLink to="/genre/phim-bo" class="hover:text-brand-gold transition-colors">Phim Bộ</NuxtLink>

        <div class="relative group">
          <button class="flex items-center gap-1 hover:text-brand-gold transition-colors py-6">
            Thể loại <Icon name="ph:caret-down" class="w-3 h-3 transition-transform group-hover:rotate-180" />
          </button>

          <div class="absolute top-full left-0 w-[600px] bg-[#111] border border-white/5 rounded-lg shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
             <div class="grid grid-cols-4 gap-y-2 gap-x-1">
                <NuxtLink
                    v-for="genre in genres"
                    :key="genre"
                    :to="`/genre/${genre.toLowerCase().replace(/ /g, '-')}`"
                    class="text-gray-300 hover:text-brand-gold hover:translate-x-1 transition-all text-[13px] py-1.5 block"
                >
                    {{ genre }}
                </NuxtLink>
             </div>
          </div>
        </div>

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

<script setup lang="ts">
const genres = [
  "Anime", "Bí Ẩn", "Chiến Tranh", "Chiếu Rạp",
  "Chuyển Thể", "Chính Kịch", "Chính Luận", "Chính Trị",
  "Chương Trình", "Concert Film", "Cung Đấu", "Cuối Tuần",
  "Cách Mạng", "Cổ Trang", "Cổ Tích", "Cổ Điển",
  "DC", "Disney", "Gay Cấn", "Gia Đình",
  "Giáng Sinh", "Giả Tưởng", "Hoàng Cung", "Hoạt Hình",
  "Hài", "Hành Động", "Hình Sự", "Học Đường",
  "Khoa Học", "Kinh Dị", "Kinh Điển", "Kịch Nói",
  "Kỳ Ảo", "LGBT+", "Live Action", "Lãng Mạn",
  "Lịch Sử", "Marvel", "Miền Viễn Tây", "Nghề Nghiệp",
  "Người Mẫu", "Nhạc Kịch", "Phiêu Lưu", "Phép Thuật",
  "Siêu Anh Hùng", "Thiếu Nhi", "Thần Thoại", "Thể Thao",
  "Truyền Hình", "Tuổi Trẻ", "Tài Liệu", "Tâm Lý",
  "Tình Cảm", "Tập Luyện", "Viễn Tưởng", "Võ Thuật",
  "Xuyên Không", "Đau Thương", "Đời Thường", "Ẩm Thực"
]
</script>
