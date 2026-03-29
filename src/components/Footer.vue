<template>
  <!-- Newsletter Banner -->
  <div class="bg-white border-b border-gray-200 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 class="text-[#1a237e] font-semibold text-lg">Join our newsletter</h4>
        <p class="text-sm text-[#3949ab]">We'll send you a nice letter once per week. No spam.</p>
      </div>
      <form @submit.prevent="submitNewsletter" class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="flex-1 sm:w-72 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
          required
        />
        <button
          type="submit"
          class="bg-[#1a237e] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-[#283593] transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p v-if="statusMessage" :class="statusSuccess ? 'text-green-600' : 'text-red-600'" class="text-xs mt-1">
        {{ statusMessage }}
      </p>
    </div>
  </div>

  <!-- Main Footer -->
  <footer class="bg-[#eef0f8] py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Top section: Logo + Links -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        <!-- Logo -->
        <div class="md:col-span-2 flex items-start">
          <RouterLink to="/">
            <img :src="footerLogo" alt="Dev Lantern" class="h-14 w-auto" />
          </RouterLink>
        </div>

        <!-- Explore Links -->
        <div>
          <h3 class="text-[#1a237e] font-semibold mb-4">Explore</h3>
          <ul class="space-y-2.5 text-sm text-[#3949ab]">
            <li><RouterLink to="/"  class="hover:text-[#1a237e]">Home</RouterLink></li>
            <li><RouterLink to="/dev-matrix" class="hover:text-[#1a237e]">Programs</RouterLink></li>
            <li><RouterLink to="/community" class="hover:text-[#1a237e]">Community</RouterLink></li>
            <li><RouterLink to="/about" class="hover:text-[#1a237e]">About</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#1a237e]">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Our Programs + Social Icons -->
        <div>
          <h3 class="text-[#1a237e] font-semibold mb-4">Our Programs</h3>
          <ul class="space-y-2.5 text-sm text-[#3949ab] mb-6">
            <li><RouterLink to="/dev-matrix" target="blank" class="hover:text-[#1a237e]">Dev Matrix</RouterLink></li>
            <li><RouterLink to="/programs/podcast" target="blank" class="hover:text-[#1a237e]">Dev Lantern Podcast</RouterLink></li>
            <li><RouterLink to="/programs/code-challenge" target="blank" class="hover:text-[#1a237e]">Code Challenge</RouterLink></li>
          </ul>

          <!-- Social Icons -->
          <div class="flex gap-3">
            <a href="#" aria-label="LinkedIn"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.96v14H.02V8zm7.94 0h4.76v1.91h.07c.66-1.25 2.28-2.57 4.69-2.57 5.02 0 5.95 3.3 5.95 7.59V22h-4.96v-6.26c0-1.49-.03-3.41-2.08-3.41-2.08 0-2.4 1.63-2.4 3.31V22H7.96V8z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="#" aria-label="X"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Full-width Divider -->
      <div class="border-t border-[#c5cae9]" />

      <!-- Bottom Bar: Copyright left, Walure right -->
      <div class="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-sm text-[#3949ab]">
          © {{ copyrightYear }}, All Rights Reserved
          <span class="mx-1">|</span>
          <a href="#" class="hover:text-[#1a237e]">Privacy Policy</a>
          <span class="mx-1">|</span>
          <a href="#" class="hover:text-[#1a237e]">Terms and Condition</a>
        </p>

        <img :src="walureLogo" alt="Powered by Walure" class="h-12 w-auto object-contain" />
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import footerLogo from '../assets/logo.png'
import walureLogo from '../assets/walure-logo.png'

const email = ref('')
const statusMessage = ref('')
const statusSuccess = ref(false)
const copyrightYear = ref(new Date().getFullYear())

function submitNewsletter() {
  statusMessage.value = 'Thanks! You are subscribed.'
  statusSuccess.value = true
  email.value = ''
}
</script>