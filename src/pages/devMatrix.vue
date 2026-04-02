<template>
  <div class="w-full font-sans bg-[#eef2f8] text-[#1a1a2e]">

    <section class="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden">

      <div
        class="absolute inset-0 bg-[#0d1266] bg-cover bg-center"
        style="background-image: url('/main-header.png')"
      ></div>

      <div class="absolute inset-0 bg-[#04064699]"></div>

      <div class="relative text-center px-6 py-20 max-w-5xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-7xl font-medium text-white">
          Dev <span class="text-[#c9a227]">Matrix</span>
        </h1>
      </div>
    </section >


    <!-- INTRO  SECTION -->
    <section class="bg-[#eef2f8] text-center sm:text-left py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1a3bbf] mb-5">Dev Matrix</h2>
        <p class="text-sm sm:text-base text-gray-700 leading-[1.85] max-w-6xl">
          DevMatrix is Dev Lantern's free, structured bootcamp designed to equip aspiring and growing
          tech professionals with practical, in-demand skills. We guide participants through hands-on
          learning, mentorship, and real-world application.
          (Include Dev Matrix Video Documentary and pictures).
        </p>
      </div>
    </section>


    <!--  TRACKS SECTION -->
    <section class="bg-[#eef2f8] w-full h-full pb-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-8">

        <!-- Track filter buttons -->
        <div class="flex sm:min-h-[56px] flex-wrap gap-3 mb-7">
          <button
            v-for="track in tracks"
            :key="track.id"
            @click="activeTrack = track.id"
            :class="[
              'px-6 py-3 rounded-lg sm:text-sm text-xs font-semibold transition-all duration-200 sm:min-w-[280px] text-center',
              activeTrack === track.id
                ? 'bg-[#1a2f7a] text-white shadow-md'
                : 'bg-[#E9ECF4] text-[#1a2f7a] hover:bg-[#dde4f5]'
            ]"
          >
            {{ track.label }}
          </button>
        </div>

        <!-- cohort badge -->
        <div class="relative rounded-2xl overflow-hidden bg-gray-700 w-full" style="aspect-ratio: 16/9;">
          <img
            v-if="trackImages[activeTrack]"
            :src="trackImages[activeTrack]"
            :alt="`${tracks.find(t => t.id === activeTrack)?.label} cohort image`"
            class="absolute inset-0 w-full h-full object-cover block"
          />
          <div v-else class="absolute inset-0 flex items-center justify-center bg-gray-800">
            <span class="text-white/40 text-sm">No image available</span>
          </div>

          <!-- Cohort badge -->
          <div 
            v-if="activeTrack === 1"
            class="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Cohort I
          </div>
        </div>

        <!-- Dot indicators -->
        <div class="flex items-center justify-center gap-2 mt-5">
          <button
            v-for="(track, idx) in tracks"
            :key="track.id"
            @click="activeTrack = track.id"
            :class="[
              'rounded-full transition-all duration-200',
              activeTrack === track.id
                ? 'w-8 h-3 bg-[#1a2f7a]'
                : 'w-3 h-3 bg-[#c5cde8]'
            ]"
          ></button>
        </div>

      </div>
    </section>


    <!--  APPLICATION PROCESS SECTION -->
    <section class="relative py-14 sm:py-20 w-full h-full overflow-hidden ">
      <!-- Background img-->
      <div
        class="absolute inset-0 bg-[#272727] bg-cover bg-center"
        :style="appSectionBg ? { backgroundImage: `url('${appSectionBg}')` } : {}"
      ></div>
      <div class="absolute inset-0 bg-[#272727]/80"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8">Application Process</h2>


        <!-- Step cards -->
        <div class="grid grid-row-3 sm:grid-cols-3 gap-3 mb-6">
          <div
            v-for="(card, idx) in stepCards"
            :key="idx"
            :class="[
              'rounded-xl p-5 min-h-[140px] flex flex-col justify-between',
              card.bg
            ]"
          >
            <div>
              <p class="text-[10px] uppercase tracking-widest font-semibold mb-2" :class="card.stepColor">
                Step {{ idx + 1 }}
              </p>
              <h3 class="text-xl font-bold mb-3" :class="card.titleColor">{{ card.title }}</h3>
              <p class="text-xs leading-relaxed" :class="card.textColor">{{ card.description }}</p>
            </div>
          </div>
        </div>

        <!-- Eligibility -->
        <div class="relative rounded-2xl overflow-hidden sm:min-h-[501px]">
          <!-- Photo -->
          <img
            v-if="eligibilityImage"
            :src="eligibilityImage"
            alt="Eligibility section background"
            class="absolute inset-0 w-full h-full object-cover block"
          />
          <div v-else class="absolute inset-0 bg-gray-800"></div>

          <!-- Eligibility  -->
          <div class="absolute top-6 right-6 bottom-6 w-[52%] sm:w-[45%] sm:min-h-[410px] bg-[#1c1f2e]/90 backdrop-blur-sm rounded-xl p-5 flex flex-col">
            <h3 class="text-white text-lg font-bold mb-4">Eligibility</h3>
            <ul class="space-y-8 flex-1 overflow-y-auto">
              <li
                v-for="(item, idx) in eligibilityItems"
                :key="idx"
                class="flex items-start gap-2.5 text-sm text-gray-200 leading-relaxed"
              >
                <!-- Check icon -->
                <span class="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#ffff] flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Squiggle -->
        <div class="flex justify-end mt-6 pr-2">
          <img
            v-if="squiggleImage"
            :src="squiggleImage"
            alt=""
            aria-hidden="true"
            class="w-[90px] sm:w-[120px] h-auto object-contain block"
          />
        </div>
         <!-- CTA Button -->
        <div class="mt-10 flex justify-center ">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScExMcVwvdLVk2wTN5dpJ7t0KPesYB0QP1iBDg7FifPX_X2cQ/viewform?usp=publish-editor" target="_blank"
            
            class="bg-[#243E90] hover:bg-[#ffff] hover:text-[#243E90] cursor text-white text-sm sm:text-lg font-medium px-10 sm:px-60 py-2.5 rounded-md transition-colors duration-200"
          >
            Apply Now
        </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "DevMatrix",
  data() {
    return {
      activeTrack: 1,
      activeStep: 1,

      tracks: [
        { id: 1, label: "Mobile Engineering" },
        { id: 2, label: "Frontend Development" },
        { id: 3, label: "Backend Development" },
        { id: 4, label: "Product Design" },
        { id: 5, label: "Product Management" },
      ],

      // Map track id 
      trackImages: {
        1: "/track1.png",
        2: "/frontendDev.png",
        3: "/BackendDev.png",
        4: "/productDesign.png",
        5: "/ProductManag.png",
      },

      // appSteps: [
      //   { id: 1, label: "Dev Lantern" },
      //   { id: 2, label: "Dev Matrix" },
      //   { id: 3, label: "Code Challenge" },
      // ],

      stepCards: [
        {
          bg: "bg-white",
          stepColor: "text-[#1a2f7a]",
          titleColor: "text-[#1a2f7a]",
          textColor: "text-gray-600",
          title: "Submit",
          description: "Submit your application via the form provided.",
        },
        {
          bg: "bg-[#1a2f7a]",
          stepColor: "text-blue-300",
          titleColor: "text-white",
          textColor: "text-blue-100",
          title: "Pass",
          description: "Pass the assessment.",
        },
        {
          bg: "bg-[#c9a227]",
          stepColor: "text-yellow-900",
          titleColor: "text-[#3a2a00]",
          textColor: "text-yellow-900",
          title: "Onboard",
          description: "Onboard and get Started.",
        },
      ],

      eligibilityItems: [
        "Applicants must be passionate about technology.",
        "Applicants must have basic understanding of any programming language.",
        "Applicants must be able to communicate fluently in English Language.",
        "Applicants must not have gone through this program prior.",
        // "Applicants must not have gone through this program prior.",
        "Applicants must pass the assessment.",
      ],

      // Asset paths 
      heroImage:        "/bg-3 1.png",
      appSectionBg:     "/bg-3 1.png",
      eligibilityImage: "/application.png",
      squiggleImage:    "/vector.png",
    };
  },
};
</script>