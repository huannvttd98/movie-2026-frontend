<script setup lang="ts">
definePageMeta({
  layout: false
})

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const showPassword = ref(false)

const handleLogin = () => {
  // Handle login logic here
  console.log('Login:', form)
  navigateTo('/')
}
</script>

<template>
  <div class="min-h-screen bg-brand-dark flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/10 rounded-full blur-[100px] animate-pulse"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
    </div>

    <div class="w-full max-w-5xl grid md:grid-cols-2 bg-[#1a1d24] rounded-2xl shadow-2xl overflow-hidden border border-white/5 relative z-10">

      <!-- Left Side: Form -->
      <div class="p-8 md:p-12 flex flex-col justify-center">
        <div class="mb-8">
          <NuxtLink to="/" class="flex items-center gap-2 mb-8 inline-flex">
            <div class="bg-brand-gold rounded-full w-8 h-8 flex items-center justify-center">
              <Icon name="ph:play-fill" class="text-brand-dark w-5 h-5" />
            </div>
            <span class="text-white font-bold text-xl tracking-wide">RoPhim</span>
          </NuxtLink>
          <h1 class="text-3xl font-bold text-white mb-2">Đăng Nhập</h1>
          <p class="text-gray-400">Chào mừng trở lại! Vui lòng nhập thông tin.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
            <div class="relative group">
               <Icon name="ph:envelope-simple" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-gold transition-colors" />
               <input
                  v-model="form.email"
                  type="email"
                  placeholder="name@example.com"
                  class="w-full bg-[#13151a] border border-gray-700 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  required
                />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Mật khẩu</label>
            <div class="relative group">
               <Icon name="ph:lock-key" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-gold transition-colors" />
               <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  class="w-full bg-[#13151a] border border-gray-700 text-white rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  required
                />
               <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                  <Icon :name="showPassword ? 'ph:eye' : 'ph:eye-slash'" />
               </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white">
              <input type="checkbox" v-model="form.remember" class="w-4 h-4 rounded border-gray-600 bg-[#13151a] text-brand-gold focus:ring-brand-gold">
              <span>Ghi nhớ</span>
            </label>
            <a href="#" class="text-brand-gold hover:underline">Quên mật khẩu?</a>
          </div>

          <button
            type="submit"
            class="w-full bg-brand-gold text-brand-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition-transform active:scale-[0.98] shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2"
          >
            Đăng Nhập <Icon name="ph:arrow-right-bold" />
          </button>
        </form>

        <div class="relative my-8">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-700"></div>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-[#1a1d24] px-2 text-gray-500">Hoặc đăng nhập với</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <button class="flex items-center justify-center gap-2 bg-[#13151a] hover:bg-[#252830] border border-gray-700 hover:border-gray-600 text-white py-2.5 rounded-lg transition-all">
                <Icon name="logos:google-icon" /> <span class="text-sm font-medium">Google</span>
            </button>
             <button class="flex items-center justify-center gap-2 bg-[#13151a] hover:bg-[#252830] border border-gray-700 hover:border-gray-600 text-white py-2.5 rounded-lg transition-all">
                <Icon name="logos:facebook" /> <span class="text-sm font-medium">Facebook</span>
            </button>
        </div>

        <p class="mt-8 text-center text-gray-400 text-sm">
          Chưa có tài khoản?
          <NuxtLink to="/register" class="text-brand-gold font-bold hover:underline">Đăng ký ngay</NuxtLink>
        </p>
      </div>

      <!-- Right Side: Image/Branding -->
      <div class="hidden md:block relative bg-[#0f1014]">
        <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
            alt="Movie Background"
            class="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a1d24] via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-l from-[#1a1d24] to-transparent"></div>

        <div class="absolute bottom-12 left-12 right-12 z-10">
            <div class="w-16 h-1 w-16 bg-brand-gold mb-6"></div>
            <h2 class="text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Khám phá thế giới điện ảnh vô tận
            </h2>
            <p class="text-gray-300 text-lg">
                Hàng ngàn bộ phim bom tấn, phim bộ độc quyền đang chờ bạn thưởng thức.
            </p>
        </div>
      </div>

    </div>
  </div>
</template>
