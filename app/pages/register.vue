<script setup lang="ts">
definePageMeta({
  layout: false
})

const form = reactive({
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  // Handle register logic here
  console.log('Register:', form)
  if (form.password !== form.confirmPassword) {
      alert('Mật khẩu không khớp!')
      return
  }
  navigateTo('/')
}
</script>

<template>
  <div class="min-h-screen bg-brand-dark flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div class="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/10 rounded-full blur-[100px] animate-pulse"></div>
         <div class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
    </div>

    <div class="w-full max-w-5xl grid md:grid-cols-2 bg-[#1a1d24] rounded-2xl shadow-2xl overflow-hidden border border-white/5 relative z-10">

      <!-- Left Side: Image/Branding (Reversed for variety) -->
      <div class="hidden md:block relative bg-[#0f1014] order-2 md:order-1">
        <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
            alt="Cinema Background"
            class="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a1d24] via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a1d24] to-transparent"></div>

        <div class="absolute bottom-12 left-12 right-12 z-10">
            <div class="w-16 h-1 w-16 bg-brand-gold mb-6"></div>
            <h2 class="text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Gia nhập cộng đồng yêu phim
            </h2>
            <p class="text-gray-300 text-lg">
                Tạo tài khoản để lưu phim yêu thích, nhận thông báo mới nhất và nhiều hơn nữa.
            </p>
        </div>
      </div>

      <!-- Right Side: Form -->
      <div class="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
        <div class="mb-6">
          <NuxtLink to="/" class="flex items-center gap-2 mb-6 inline-flex md:hidden">
            <div class="bg-brand-gold rounded-full w-8 h-8 flex items-center justify-center">
              <Icon name="ph:play-fill" class="text-brand-dark w-5 h-5" />
            </div>
            <span class="text-white font-bold text-xl tracking-wide">RoPhim</span>
          </NuxtLink>
           <h1 class="text-3xl font-bold text-white mb-2">Đăng Ký</h1>
          <p class="text-gray-400">Hoàn toàn miễn phí và chỉ mất 1 phút.</p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Họ và tên</label>
            <div class="relative group">
               <Icon name="ph:user" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-gold transition-colors" />
               <input
                  v-model="form.fullname"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  class="w-full bg-[#13151a] border border-gray-700 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  required
                />
            </div>
          </div>

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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
             <div>
                <label class="block text-sm font-medium text-gray-300 mb-1.5">Nhập lại</label>
                <div class="relative group">
                <Icon name="ph:lock-key-open" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-gold transition-colors" />
                <input
                    v-model="form.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    class="w-full bg-[#13151a] border border-gray-700 text-white rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    required
                    />
                <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                    <Icon :name="showConfirmPassword ? 'ph:eye' : 'ph:eye-slash'" />
                </button>
                </div>
            </div>
          </div>

          <div class="flex items-start gap-2 text-sm text-gray-400 mt-2">
              <input type="checkbox" v-model="form.agree" required class="mt-1 w-4 h-4 rounded border-gray-600 bg-[#13151a] text-brand-gold focus:ring-brand-gold">
              <span>
                  Tôi đồng ý với <a href="#" class="text-brand-gold hover:underline">Điều khoản sử dụng</a> và <a href="#" class="text-brand-gold hover:underline">Chính sách bảo mật</a>
              </span>
          </div>

          <button
            type="submit"
            class="w-full bg-brand-gold text-brand-dark font-bold py-3.5 rounded-lg hover:bg-yellow-400 transition-transform active:scale-[0.98] shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 mt-4"
          >
            Đăng Ký Tài Khoản
          </button>
        </form>

        <p class="mt-8 text-center text-gray-400 text-sm">
          Đã có tài khoản?
          <NuxtLink to="/login" class="text-brand-gold font-bold hover:underline">Đăng nhập ngay</NuxtLink>
        </p>
      </div>

    </div>
  </div>
</template>
