<template>
  <nav class="bg-gray-100 px-6 md:px-10 py-4 flex items-center justify-between relative font-sans">
    <!-- Logo -->
    <div class="flex items-center">
      <RouterLink to="/">
        <img :src="logo" alt="Dev Lantern" class="h-10 w-auto" />
      </RouterLink>
    </div>

    <!-- Desktop Nav -->
    <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-[#7585B9]">
      <li>
        <RouterLink to="/" class="hover:text-blue-700" active-class="font-semibold text-[#243E90]">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="hover:text-blue-700" active-class="font-semibold text-[#243E90]">About</RouterLink>
      </li>

      <!-- Program Dropdown -->
      <li class="relative" @mouseenter="isProgramOpen = true" @mouseleave="isProgramOpen = false">
        <button
        class="flex items-center gap-1 hover:text-blue-700 font-semibold focus:outline-none"
        :class="isProgramActive ? 'text-[#243E90]' : 'text-[#7585B9]'"
>
          Program
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': isProgramOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <transition name="dropdown">
          <ul
          v-if="isProgramOpen"
          class="absolute top-full left-0 mt-2 w-44 bg-white shadow-lg rounded-md py-2 z-50 text-[#1a237e]"
          >
          <li>
            <RouterLink
            to="/dev-matrix"
            class="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-700"
            @click="isProgramOpen = false"
            >Dev Matrix</RouterLink>
          </li>
            <li>
              <RouterLink
                to="/programs/podcast"
                class="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-700"
                @click="isProgramOpen = false"
              >Dev Podcast</RouterLink>
            </li>
            <li>
              <RouterLink
                to="/programs/dev-challenge"
                class="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-700"
                @click="isProgramOpen = false"
              >Dev Challenge</RouterLink>
            </li>
          </ul>
        </transition>
      </li>

      <li>
        <RouterLink to="/community" class="hover:text-blue-700" active-class="font-semibold text-[#243E90]">Community</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="hover:text-blue-700" active-class="font-semibold text-[#243E90]">Contact</RouterLink>
      </li>
    </ul>

    <!-- CTA Button -->
    <div class="hidden md:block">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScExMcVwvdLVk2wTN5dpJ7t0KPesYB0QP1iBDg7FifPX_X2cQ/viewform?usp=publish-editor" target="_blank"
            
           class="bg-[#1a237e] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#283593] transition-colors duration-200"
          >
            Apply Now
        </a>
    </div>

    <!-- Mobile Hamburger -->
    <button
      class="md:hidden text-[#1a237e] focus:outline-none"
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

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 px-6 py-4 space-y-3 text-sm font-medium text-[#1a237e]"
      >
        <RouterLink to="/" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false">Home</RouterLink>
        <RouterLink to="/about" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false">About</RouterLink>

        <!-- Mobile Program submenu -->
        <div>
          <button
            class="flex items-center gap-1 py-1 w-full hover:text-blue-700 font-semibold"
            @click="isMobileProgramOpen = !isMobileProgramOpen"
          >
            Program
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': isMobileProgramOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition name="fade">
            <div v-if="isMobileProgramOpen" class="pl-4 mt-1 space-y-2 text-sm">
              <RouterLink to="/dev-matrix" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false">Dev Matrix</RouterLink>
              <RouterLink to="/programs/podcast" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false"> Dev Podcast</RouterLink>
              <RouterLink to="/programs/code-challenge" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false">Dev Challenge</RouterLink>
            </div>
          </transition>
        </div>

        <RouterLink to="/community" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false">Community</RouterLink>
        <RouterLink to="/contact" class="block py-1 hover:text-blue-700" @click="isMenuOpen = false">Contact</RouterLink>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLScExMcVwvdLVk2wTN5dpJ7t0KPesYB0QP1iBDg7FifPX_X2cQ/viewform?usp=publish-editor" target="_blank"
            
            class="block mt-2 bg-[#1a237e] text-white text-center px-4 py-2.5 rounded-md hover:bg-[#283593] transition-colors"
          @click="isMenuOpen = false"
          >
            Apply Now
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'

const isMenuOpen = ref(false)
const isProgramOpen = ref(false)
const isMobileProgramOpen = ref(false)

const route = useRoute()

const isProgramActive = computed(() => {
  return ['/dev-matrix', '/programs/podcast', '/programs/code-challenge'].includes(route.path)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>