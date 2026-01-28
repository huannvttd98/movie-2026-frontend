<template>
  <div>
    <!-- Route Loading Bar -->
    <NuxtLoadingIndicator color="#F3C969" :height="3" />

    <!-- Initial Splash Screen -->
    <div
      class="fixed inset-0 z-[9999] bg-[#0f1014] flex flex-col items-center justify-center transition-opacity duration-700"
      :class="mounted ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'"
    >
        <div class="relative">
             <div class="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mb-4 relative z-10 animate-pulse">
                <Icon name="ph:play-fill" class="text-brand-dark w-8 h-8 ml-1" />
             </div>
             <!-- Ripple effect -->
             <div class="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-20"></div>
        </div>
        <div class="text-white font-bold text-2xl tracking-[0.2em] relative">
            RoPhim
        </div>
        <div class="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div class="h-full bg-brand-gold rounded-full w-1/2 animate-[loading_1s_ease-in-out_infinite]"></div>
        </div>
    </div>

    <!-- Main App -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false)

onMounted(() => {
    // Artificial delay to show the logo briefly
    setTimeout(() => {
        mounted.value = true
    }, 800)
})
</script>

<style>
@keyframes loading {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
}
</style>
