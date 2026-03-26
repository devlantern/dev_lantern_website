<template>
  <footer class="bg-blue-50 border-t border-blue-100 py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2 flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <img :src="footerLogo" alt="Dev Lantern" class="h-10 w-auto" />
            <div>
              <p class="text-lg font-bold text-blue-900">Dev Lantern</p>
              <p class="text-sm text-blue-600">Build skills. Join community. Ship products.</p>
            </div>
          </div>
          <p class="text-sm text-blue-700">Your go-to platform for coding bootcamp style learning and real projects.</p>
          <div class="bg-white border border-blue-100 rounded-xl p-4">
            <h4 class="text-blue-900 font-semibold mb-2">Join our newsletter</h4>
            <p class="text-sm text-blue-600 mb-3">We’ll send you a nice letter once per week. No spam.</p>
            <form @submit.prevent="submitNewsletter" class="flex flex-col sm:flex-row gap-2">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full sm:w-auto flex-1 rounded-lg border border-blue-200 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button type="submit" class="rounded-lg bg-blue-700 text-white px-4 py-2 hover:bg-blue-800">Subscribe</button>
            </form>
            <p v-if="statusMessage" :class="{'text-green-600': statusSuccess, 'text-red-600': !statusSuccess}" class="text-xs mt-2">{{ statusMessage }}</p>
          </div>
        </div>

        <div>
          <h3 class="text-blue-900 font-semibold mb-3">Explore</h3>
          <ul class="space-y-2 text-blue-700 text-sm">
            <li><RouterLink to="/" class="hover:text-blue-900">Home</RouterLink></li>
            <li><RouterLink to="/about" class="hover:text-blue-900">About</RouterLink></li>
            <li><RouterLink to="/community" class="hover:text-blue-900">Community</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-blue-900">Contact</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-blue-900 font-semibold mb-3">Our Programs</h3>
          <ul class="space-y-2 text-blue-700 text-sm">
            <li><RouterLink to="/devMatrix" class="hover:text-blue-900">Dev Matrix</RouterLink></li>
            <li><RouterLink to="/devPodcast" class="hover:text-blue-900">Dev Lantern Podcast</RouterLink></li>
            <li><RouterLink to="/codeChallenge" class="hover:text-blue-900">Code Challenge</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-blue-900 font-semibold mb-3">Follow Us</h3>
          <div class="flex gap-2">
            <a class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200" href="#" aria-label="LinkedIn">in</a>
            <a class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200" href="#" aria-label="Facebook">f</a>
            <a class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200" href="#" aria-label="X">x</a>
            <a class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200" href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-blue-100 pt-4 text-xs text-blue-600 text-center md:text-left md:flex md:items-center md:justify-between">
        <p>© {{ copyrightYear }}, All Rights Reserved</p>
        <p>
          <a class="hover:text-blue-900" href="#">Privacy Policy</a>
          <span class="mx-2">|</span>
          <a class="hover:text-blue-900" href="#">Terms and Conditions</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import footerLogo from '../assets/hero.png'

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
