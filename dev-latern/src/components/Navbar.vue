<template>
  <nav class="bg-white shadow-sm px-4 md:px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <RouterLink to="/" class="flex items-center gap-2">
        <img :src="logo" alt="Dev Lantern" class="h-8 md:h-10 w-auto" />
        <span class="text-xl font-bold text-gray-800 hidden sm:inline">Dev Lantern</span>
      </RouterLink>
    </div>

    <button
      class="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
      @click="isMenuOpen = !isMenuOpen"
      aria-label="Toggle navigation"
    >
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <ul class="hidden md:flex gap-6 text-sm font-medium text-gray-600">
      <li><RouterLink to="/" class="hover:text-blue-500" active-class="text-blue-600">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-blue-500" active-class="text-blue-600">About</RouterLink></li>
      <li><RouterLink to="/community" class="hover:text-blue-500" active-class="text-blue-600">Community</RouterLink></li>
      <li><RouterLink to="/contact" class="hover:text-blue-500" active-class="text-blue-600">Contact</RouterLink></li>
    </ul>

    <transition name="fade">
      <ul
        v-if="isMenuOpen"
        class="md:hidden absolute top-16 left-4 right-4 bg-white shadow-md rounded-lg px-4 py-3 space-y-2 text-sm font-medium text-gray-700"
      >
        <li><RouterLink to="/" class="block px-2 py-1 hover:text-blue-500" @click="isMenuOpen = false">Home</RouterLink></li>
        <li><RouterLink to="/about" class="block px-2 py-1 hover:text-blue-500" @click="isMenuOpen = false">About</RouterLink></li>
        <li><RouterLink to="/community" class="block px-2 py-1 hover:text-blue-500" @click="isMenuOpen = false">Community</RouterLink></li>
        <li><RouterLink to="/contact" class="block px-2 py-1 hover:text-blue-500" @click="isMenuOpen = false">Contact</RouterLink></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/hero.png'

const isMenuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>