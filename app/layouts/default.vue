<template>
  <div class="bg-brand-dark min-h-screen text-white flex flex-col">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
