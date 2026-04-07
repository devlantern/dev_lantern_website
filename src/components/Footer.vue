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

      <!-- Top section -->
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
            <!-- <li><RouterLink to="/dev-matrix" class="hover:text-[#1a237e]">Programs</RouterLink></li> -->
            <li><RouterLink to="/about" class="hover:text-[#1a237e]">About</RouterLink></li>
            <li><RouterLink to="/community" class="hover:text-[#1a237e]">Community</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#1a237e]">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Our Programs -->
        <div>
          <h3 class="text-[#1a237e] font-semibold mb-4">Our Programs</h3>
          <ul class="space-y-2.5 text-sm text-[#3949ab] mb-6">
            <li><RouterLink to="/dev-matrix" target="blank" class="hover:text-[#1a237e]">Dev Matrix</RouterLink></li>
            <li><RouterLink to="/programs/podcast" target="blank" class="hover:text-[#1a237e]">Dev Podcast</RouterLink></li>
            <li><RouterLink to="/programs/code-challenge" target="blank" class="hover:text-[#1a237e]">Code Challenge</RouterLink></li>
          </ul>

          <!-- Social Icons -->
          <div class="flex gap-3">
          <a href="https://linktr.ee/lanterndevs" target="_blank" aria-label="Linktree"
            class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897h1.294v4.629c0 .16 0 .324.08.486.16.484.636.814 1.134.814h2.347c.498 0 .975-.33 1.134-.814.08-.162.08-.325.08-.486v-4.63h1.294c.524 0 .972-.38 1.052-.896 0-.162 0-.323-.08-.486l-4.214-7.897-4.093 7.897zm4.093-12.04L7.2 10.61c-.08.162-.08.324-.08.486 0 .57.447 1.05 1.012 1.05h1.134v.001h1.58v-2.43h2.347v2.43h1.58v-.001h1.134c.565 0 1.012-.48 1.012-1.05 0-.162-.08-.324-.08-.486l-4.793-7.584z"/>
            </svg>
          </a>
            <a href="https://www.instagram.com/dev_lantern" target="_blank" aria-label="Instagram"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
           </a>
            <a href="https://x.com/dev_lantern" target="_blank" aria-label="X"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="http://youtu.be/mKwOF8AFMP4" target="_blank" aria-label="YouTube"
              class="h-9 w-9 rounded-full border border-[#c5cae9] bg-[#eef0f8] flex items-center justify-center text-[#3949ab] hover:bg-[#c5cae9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-[#c5cae9]" />

      <!--  Copyright  -->
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
import walureLogo from '../assets/poweredBy.png'

const email = ref('')
const statusMessage = ref('')
const statusSuccess = ref(false)
const copyrightYear = ref(new Date().getFullYear())

const submitNewsletter = async () => {
  console.log('API Key:', import.meta.env.VITE_BREVO_API_KEY)
  statusMessage.value = ''

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email.value,
        listIds: [2],                       
        updateEnabled: true,
      }),
    })

    if (res.status === 201 || res.status === 204) {
      statusSuccess.value = true
      statusMessage.value = 'Thanks for subscribing!'
      email.value = ''
    } else {
      const data = await res.json()
      statusSuccess.value = false
      statusMessage.value = data.message || 'Something went wrong.'
    }
  } catch (err) {
    statusSuccess.value = false
    statusMessage.value = 'Network error. Please try again.'
  }
}
</script>