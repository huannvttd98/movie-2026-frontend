<template>
  <div>
    <HeroBanner />
    <div class="min-h-screen bg-brand-dark">
      <!-- Content below hero -->
      <div class="container mx-auto px-4 py-8 relative z-10 -mt-24">
        <TopicList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'RoPhim - Thảm Họa Thiên Thạch 2',
})
</script>
