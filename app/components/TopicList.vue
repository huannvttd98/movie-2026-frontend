<template>
  <div class="py-8">
    <h3 class="text-white text-xl font-bold mb-6">Bạn đang quan tâm gì?</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
      <NuxtLink
        v-for="(topic, index) in topics"
        :key="index"
        :to="`/genre/${topic.slug || 'marvel'}`"
        class="relative h-32 rounded-xl overflow-hidden p-4 flex flex-col justify-between cursor-pointer transition-transform hover:scale-105 group"
        :class="topic.bgClass"
      >
        <!-- Background Pattern (simple CSS radial gradient or localized overlay) -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-[10px] border-white/5 opacity-30"></div>

        <h4 class="text-white font-bold text-lg relative z-10 leading-tight" v-html="topic.title"></h4>

        <div class="flex items-center text-[10px] text-white/80 font-medium group-hover:text-white transition-colors relative z-10">
          <span v-if="!topic.hideLink">Xem chủ đề</span>
          <span v-else>{{ topic.subtitle }}</span>
          <Icon v-if="!topic.hideLink" name="ph:caret-right" class="w-3 h-3 ml-1" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const topics = [
  {
    title: 'Marvel',
    slug: 'marvel',
    bgClass: 'bg-gradient-to-br from-blue-600 to-blue-700',
  },
  {
    title: '4K',
    slug: '4k',
    bgClass: 'bg-gradient-to-br from-slate-500 to-slate-600',
  },
  {
    title: 'Sitcom',
    slug: 'sitcom',
    bgClass: 'bg-gradient-to-br from-emerald-500 to-teal-600',
  },
  {
    title: 'Lồng Tiếng<br>Cực Mạnh',
    slug: 'long-tieng',
    bgClass: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    title: 'Xuyên Không',
    slug: 'xuyen-khong',
    bgClass: 'bg-gradient-to-br from-orange-400 to-red-400',
  },
  {
    title: 'Cổ Trang',
    slug: 'co-trang',
    bgClass: 'bg-gradient-to-br from-red-500 to-rose-700',
  },
  {
    title: '+4 chủ đề',
    hideLink: true,
    subtitle: '',
    slug: 'all',
    bgClass: 'bg-gradient-to-br from-gray-700 to-gray-800',
  }
]
</script>
