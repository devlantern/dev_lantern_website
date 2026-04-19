<template>
  <div class="font-sans">

    <section class="relative min-h-[520px] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0a1a4e] px-6 py-20">
      <img
        src="../assets/hero-header.png"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 z-0 bg-[#0a1a4e]/70"></div>

      <div class="relative z-10 max-w-5xl">
        <h1 class="text-white text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-6">
          Building Africa's Most<br />
          <span class="text-[#f5a623]">Intentional Tech</span>
          <span class="text-white"> Community</span>
        </h1>

        <div class="flex flex-wrap gap-4 justify-center mt-8">
          <a href="./community" target="blank" class="px-8 py-3 rounded-xl border-2 border-white text-[#0a1a4e] text-lg bg-white font-semibold hover:bg-transparent hover:text-white transition-all duration-200">
            Join Our Community
          </a>
          <a href="./programs/podcast" target="blank" class="px-5 py-3 rounded-xl text-lg bg-transparent border text-white font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2">
            Our Podcast 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#E9ECF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </a>
        </div>
      </div>

    <div class="relative z-10 mt-20 w-full overflow-hidden">
      <div class="carousel-track flex gap-4">
        <!-- images -->
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header1.png" alt="Community event 1" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header2.png" alt="Community event 2" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header3.png" alt="Community event 3" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header4.png" alt="Community event 4" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header5.png" alt="Community event 5" class="w-full h-full object-cover" />
        </div>

        <!-- Duplicate set for seamless loop -->
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header1.png" alt="Community event 1" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header2.png" alt="Community event 2" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header3.png" alt="Community event 3" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header4.png" alt="Community event 4" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="../assets/header5.png" alt="Community event 5" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </section>
  

  <section class="bg-[#E9ECF4] py-10 px-6">
    <p class="text-center text-base text-[#667085] uppercase tracking-widest mb-6 font-medium">Our Partners</p>

    <div class="relative flex items-center max-w-6xl mx-auto">

      <button
        @click="scrollLeft"
        class="flex-shrink-0 z-10 hover:opacity-70 transition-opacity disabled:opacity-30 px-2"
        :disabled="isAtStart"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.75 21.25L7.5 15L13.75 8.75M22.5 21.25L16.25 15L22.5 8.75" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div
        ref="scrollContainer"
        class="flex items-center gap-10 overflow-x-auto scroll-smooth scrollbar-hide flex-1 py-2 snap-x snap-mandatory sm:snap-none  px-6"
        style="scroll-behavior: smooth;"
        @scroll="updateScrollState"
      >
        <div class="flex items-center gap-10 mx-auto">
          <div class="snap-item snap-center shrink-0 w-full flex justify-center sm:w-auto">
            <img src="../assets/talenvo.png" alt="Talenvo"
              class="w-auto grayscale hover:grayscale-0" />
          </div>

          <div class="snap-item snap-center shrink-0 w-full flex justify-center sm:w-auto">
            <img src="../assets/walure-logo.png" alt="Walure"
              class="w-auto grayscale hover:grayscale-0" />
          </div>

          <div class="snap-item snap-center shrink-0 w-full flex justify-center sm:w-auto">
            <img src="../assets/cardify.png" alt="Cardify"
              class="w-auto grayscale hover:grayscale-0" />
          </div>

          <div class="snap-item snap-center shrink-0 w-full flex justify-center sm:w-auto">
            <img src="../assets/axiom.png" alt="Axiom"
              class="w-auto grayscale hover:grayscale-0" />
          </div>

          <div class="snap-item snap-center shrink-0 w-full flex justify-center sm:w-auto">
            <img src="../assets/Smart-Learn-logo.png" alt="Smart Learn"
              class="w-auto grayscale hover:grayscale-0" />
          </div>
        </div>
      </div>

      <button
        @click="scrollRight"
        class="flex-shrink-0 z-10 hover:opacity-70 transition-opacity disabled:opacity-30 px-2"
        :disabled="isAtEnd"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.25 21.25L22.5 15L16.25 8.75M7.5 21.25L13.75 15L7.5 8.75" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

    </div>
  </section>
    
    <section class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl font-medium text-gray-900 mb-10">Why join us?</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Network -->
          <div class="rounded-2xl overflow-hidden bg-[#272727] border p-4 border-gray-100 shadow-sm">
            <img src="../assets/network-join.png" alt="">
            <div class="p-3 md:p-6 text-white ">
              <h3 class="text-2xl md:text-3xl font-medium mb-2">Network</h3>
              <p class="text-sm md:text-base leading-relaxed">
                We bring together builders and innovators into one collaborative ecosystem. Innovations rarely happen in isolation; it thrives at the intersection of diverse skills and perspectives. Dev Lantern exists to create those intersections and foster meaningful relationships that lead to real impact.
              </p>
            </div>
          </div>

          <!-- Inspire -->
          <div class="rounded-2xl overflow-hidden shadow-sm p-4 bg-[#E9ECF4]">
             <img src="../assets/imspire-join.png" alt="">
            <div class="p-3 md:p-6 text-[#4B61A4]">
              <h3 class="text-2xl md:text-3xl font-medium  mb-2">Inspire</h3>
              <p class="text-sm md:text-base leading-relaxed">
                We amplify the voices of builders and leaders who are shaping the tech ecosystem through innovation and execution. By sharing their journeys, decisions, and lessons learned, we provide our community with relatable role models and practical inspiration. Their stories serve as both guidance and proof of what is possible.
              </p>
            </div>
          </div>

          <div class="rounded-2xl overflow-hidden border border-gray-100 p-4 shadow-sm">
            <img src="../assets/growth-join.png" alt="">
            <div class="p-3 md:p-6 text-[#4B61A4]">
              <h3 class="text-2xl md:text-3xl font-medium  mb-2">Growth</h3>
              <p class="text-sm md:text-base leading-relaxed">
                We design structured initiatives from the Dev Lantern Podcast to Dev Matrix and Code Challenges that challenge members to think deeper and build better. Dev Lantern provides the environment, exposure, and opportunities that enable individuals to advance both technically and strategically.
              </p>
            </div>
          </div>

          <div class="rounded-2xl overflow-hidden shadow-sm  p-4 bg-[#243E90]">
            <img src="../assets/learn-join.png" alt="">
            <div class="p-3 md:p-6 text-[#A1ACCF]">
              <h3 class="text-2xl md:text-3xl font-medium mb-2">Learn</h3>
              <p class="text-sm md:text-base leading-relaxed">
                We focus on actionable insights and real-life experiences. Through conversations, workshops, challenges, and content, we help our community translate ideas into execution. Our goal is to equip members with knowledge they can immediately apply in their careers and projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section class=" py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl font-medium text-gray-900 mb-10">Program Highlights</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="program in programs" :key="program.title"
            class="text-white rounded-2xl py-12 px-6 flex flex-col justify-between  relative overflow-hidden shadow-lg">

            <img src="../assets/highlight1.png" alt="" aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover z-20" />

            <div class="absolute inset-0 z-10" :style="{ backgroundColor: program.overlay }"></div>

            <div class="relative z-20 " :class="[program.textColor]">
              <h3 class="text-2xl font-medium mb-4">{{ program.title }}</h3>
              <p class=" text-lg">{{ program.description }}</p>
            </div>
            <RouterLink :to="program.link" class="relative z-20 mt-6 flex items-center gap-1 underline md:no-underline text hover:scale-105 hover:underline transition-transform duration-200-lg font-medium transition-colors" :class="[program.textColor]">
  See More <span>→</span>
</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-white pt-32 pb-24 px-6">
       <div
        class="absolute inset-0 bg-cover bg-center z-50"
        style="background-image: url('/bg-2.png')"
      ></div>

      <div class="absolute top-0 right-0">
      <img
        src="../assets/Vector 3.png"
        alt=""
        aria-hidden="true"
        class=" lg:h-full"
      />
    </div>

      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl md:text-5xl lg:text-7xl font-bold text-[#6E6E6E] mb-12">
          What We're <span class="text-[#000000]">Up To</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <!-- Left: description -->
          <div>
            <p class="text-[#525252] text-lg md:text-2xl mb-16">
              DevMatrix is Dev Lantern's free structured bootcamp designed to equip aspiring and growing tech professionals with practical, in-demand skills.
            </p>
            <p class="text-[#525252] text-lg md:text-2xl">
              We guide participants through hands-on learning, mentorship, and real-world application.
            </p>
          </div>

          <!-- Right: cohort list -->
          <div class="bg-[#232323] rounded-2xl p-3 border border-gray-100 ">
            <p class="text-lg pb-2 font-semibold text-white uppercase tracking-wider border-b border-[#6E6E6E] mb-4">Our journey so far:</p>
            <ul class="space-y-3 text-[#BCBCBC]">
              <li v-for="(cohort, index) in cohorts" :key="cohort"
                class="flex items-center gap-3 text-lg md:text-2xl py-2 font-medium">
                <svg class="shrink-0"
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12"
                    :fill="index === 0 ? '#0066FF' : index === 1 ? '#FFD700' : '#F0EAF4'" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                    fill="#9872B5"/>
                </svg>

                {{ cohort }}
              </li>
            </ul>
          </div>
        </div>


        <div class="rounded-2xl overflow-hidden relative shadow-md">
  <img
    src="../assets/dev-latern.jpg"
    alt="Dev Lantern Podcast"
    class="w-full h-56 sm:h-72 md:h-96 lg:h-120 object-cover"
  />
  <div class="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-[24px] px-3 sm:px-8 py-2 sm:py-6">
    <p class="text-white text-sm sm:text-base md:text-2xl lg:text-3xl text-center leading-relaxed">
      Each cohort is intentionally curated to meet the evolving needs of tech ecosystem, bridging the gap between learning and employability.
    </p>
  </div>
</div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollContainer = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)

const updateScrollState = () => {
  const el = scrollContainer.value
  if (!el) return

  isAtStart.value = el.scrollLeft <= 0
  isAtEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
}

const getScrollAmount = () => {
  const el = scrollContainer.value
  if (!el) return 0

  const firstItem = /** @type {HTMLElement|null} */ (el.querySelector(".snap-item"))
  if (!firstItem) return el.clientWidth * 0.75

  return firstItem.offsetWidth
}

const scrollLeft = () => {
  const el = scrollContainer.value
  if (!el) return

  el.scrollBy({ left: -getScrollAmount(), behavior: "smooth" })
  setTimeout(updateScrollState, 400)
}

const scrollRight = () => {
  const el = scrollContainer.value
  if (!el) return

  el.scrollBy({ left: getScrollAmount(), behavior: "smooth" })
  setTimeout(updateScrollState, 400)
}

onMounted(() => {
  updateScrollState()
  window.addEventListener("resize", updateScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScrollState)
})

const programs = [
  {
    title: 'Dev Lantern Podcast',
    description: 'In 2024, we launched the Dev Lantern Podcast to create meaningful experience-driven conversations within the tech ecosystem. This is a platform to spotlight African tech builders and innovators quickly became a channel for practical insight, career clarity, and industry exposure.',
    overlay: 'rgba(36, 62, 144, 1)',   
    textColor: 'text-[#CAD1E4]',
    link: './programs/podcast'
  },
  {
    title: 'Dev Matrix',
    description: 'In April 2025, we introduced Dev Matrix, our free, structured tech bootcamp designed to close the gap between learning and real-world application. The first cohort focused on Mobile Development, and in continuity is Frontend/Backend, Product Design / Management and Software Quality Assurance.',
    overlay: 'rgba(233, 236, 244, 1)', 
    textColor: 'text-[#4B61A4]', 
    link: './dev-matrix'
  },
  {
    title: 'Code Challenge',
    description: 'In August, we launched the Dev Lantern Code Challenge to push learning beyond theory and into execution. Designed as a hands-on, problem-solving initiative, the Code Challenge encourages collaboration, strengthens technical competence, and identifies emerging talent within the community.',
    overlay: 'rgba(20, 40, 110, 1)',
    textColor: 'text-[#CAD1E4]', 
    link: './programs/code-challenge'  
  },
]

const cohorts = [
  'Cohort 1: Mobile Development',
  'Cohort 2: Backend Engineering & Software Quality Assurance',
  'Cohort 3: Product Design & Product Management',
  'Cohort 4: Frontend Engineering',
]
</script>

<style scoped>
.carousel-track {
  animation: scroll-left 20s linear infinite;
}

@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>