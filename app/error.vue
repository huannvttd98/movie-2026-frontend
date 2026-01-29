<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

// Determine message based on error code
const errorMessage = computed(() => {
  if (props.error?.statusCode === 404) {
    return 'Trang bạn tìm kiếm không tồn tại.'
  }
  return 'Đã xảy ra lỗi không mong muốn.'
})
</script>

<template>
  <div class="bg-brand-dark min-h-screen font-sans text-white">
    <!-- Header manually included or rely on layout if error structure permits.
         Usually error.vue replaces app.vue, so we need to wrap it ourselves if we want the layout.
         However, layouts might rely on data that isn't available during error.
         Safest is to just provide a standalone nice looking page, or wrap in NuxtLayout if robust.
    -->
    <NuxtLayout name="default">
      <div class="flex flex-col items-center justify-center py-20 px-4 text-center">
        <!-- Error Code Visual -->
        <div class="relative mb-8">
            <h1 class="text-[9rem] md:text-[12rem] font-black text-brand-gray opacity-20 leading-none select-none">
                {{ error?.statusCode }}
            </h1>
            <div class="absolute inset-0 flex items-center justify-center">
                 <Icon name="ph:film-strip-bold" class="text-brand-gold w-32 h-32 md:w-40 md:h-40 opacity-80 animate-pulse" />
            </div>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-serif">
          Oops! {{ errorMessage }}
        </h2>

        <p class="text-gray-400 mb-8 max-w-lg text-lg">
          Có vẻ như thước phim này đã bị thất lạc trong kho lưu trữ. Hãy quay lại trang chủ để khám phá những bộ phim tuyệt vời khác.
        </p>

        <button
          @click="handleError"
          class="px-8 py-3 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-yellow-400 transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-brand-gold/20"
        >
          <Icon name="ph:house-fill" size="20" />
          Về Trang Chủ
        </button>
      </div>
    </NuxtLayout>
  </div>
</template>
