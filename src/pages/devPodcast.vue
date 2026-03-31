<template>
  <div class="w-full font-sans bg-[#eef2f8] text-[#1a1a2e]">

    <!-- HERO SECTION  -->
    <section class="relative w-full min-h-[595px] flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[#243E90] bg-cover bg-center"
        :style="heroImage ? { backgroundImage: `url('${heroImage}')` } : {}"
      ></div>
      <div class="absolute inset-0 bg-[#243E90]/70"></div>
      <div class="relative z-10 text-center px-6 py-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Dev <span class="text-[#c9a227]">Podcast</span>
        </h1>
      </div>
    </section>


    <!--  INTRO TEXT -->
    <section class="bg-[#eef2f8] max-w-[1191px] mx-auto py-12 sm:py-16">
      <div class="px-4 sm:px-12">
        <h2 class="text-2xl text-center sm:text-left sm:text-3xl font-bold text-[#1a3bbf] mb-5">Dev Podcast</h2>
        <p class="text-sm font-bold sm:text-base text-gray-700 leading-[1.85] max-w-6xl">
          In 2024, we launched the Dev Podcast to create meaningful experience-driven conversations within
          tech ecosystem. This is a platform to spotlight African tech builders and innovators quickly became a
          channel for practical insight, career clarity, and industry exposure. The podcast continues to amplify
          voices shaping the future into technology.
        </p>
      </div>
    </section>


    <!-- RELATED PODCAST -->
    <section class="bg-[#eef2f8] pb-14  w-full h-full">
      <div class="max-w-6xl mx-auto px-4 sm:px-8">
        <div class="bg-white  rounded-2xl p-5 sm:p-7">

          <h3 class="text-lg sm:text-xl font-semibold text-[#6E6E6E] mb-5">Related Podcast</h3>

          <!-- Functional filter cards -->
          <div class="flex flex-wrap gap-2 sm:gap-3 mb-7">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="activeCategory = cat.id"
              :class="[
                'flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-medium transition-all duration-200 border text-[#1a2f7a] border-[#E9ECF4]',
              ]"
            >
              <span class="flex-shrink-0" v-html="cat.icon"></span>
              {{ cat.label }}
            </button>
          </div>

          <!-- Video thumbnail -->
          <div class="relative rounded-2xl overflow-hidden bg-gray-700 w-full" style="aspect-ratio: 16/9;">

            <!-- YouTube iframe (shown after play is clicked) -->
            <iframe
              v-if="isPlaying"
              :src="`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`"
              class="absolute inset-0 w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <!-- Thumbnail -->
            <template v-else>
              <img
                v-if="podcastThumbnail"
                :src="podcastThumbnail"
                alt="Podcast video thumbnail"
                class="absolute inset-0 w-full h-full object-cover block"
              />

              <!-- Timestamp badge -->
              <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-md">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
                2:00
              </div>

              <!-- Play button -->
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  @click="isPlaying = true"
                  class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white transition-all duration-200"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1a2f7a"><polygon points="6,3 20,12 6,21"/></svg>
                </button>
              </div>

              <div class="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-90">
                <img
                  v-if="logoImage"
                  :src="logoImage"
                  alt="Dev Lantern"
                  class="h-7 object-contain"
                />
                <span v-else class="text-white text-[10px] font-bold tracking-widest uppercase">Dev Lantern</span>
              </div>
            </template>

          </div>

        </div>
      </div>
    </section>


   <!--  WHY YOU SHOULD BE OUR GUEST -->
<section class="relative h-full w-full mx-auto py-12 sm:py-16 overflow-hidden">
  <div
    class="absolute inset-0 bg-[#0d1266] bg-cover bg-center"
    :style="guestSectionBg ? { backgroundImage: `url('${guestSectionBg}')` } : {}"
  ></div>
  <div class="absolute inset-0 bg-[#0a1060]/80"></div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8">Why you should be our Guest</h2>

    <!-- Row 1: Influence | Image | Recognition -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
      <div class="bg-[#5a5a4a] sm:min-h-[286px] rounded-2xl p-5 flex flex-col justify-start">
        <h3 class="text-2xl font-bold text-white mb-3">Influence</h3>
        <p class="text-xl  text-white leading-relaxed">
          Submit your application via the form provided. Share your journey, experiences, and insights,
          shaping the thoughts and actions of Africa's next generation of tech leaders.
        </p>
      </div>
      <div class="rounded-2xl sm:min-h-[286px] overflow-hidden bg-gray-600">
        <img v-if="guestImage1" :src="guestImage1" alt="Guest image 1" class="w-full h-full object-cover block" />
      </div>
      <div class="bg-[#7585B9] sm:min-h-[286px] rounded-2xl p-5 flex flex-col justify-start">
        <h3 class="text-2xl font-bold text-white mb-3">Recognition</h3>
        <p class="text-xl text-white leading-relaxed">
          Build your personal and professional brand, by bringing your content to life by
          reaching a new demographic audience.
        </p>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
      <div class="bg-white sm:min-h-[269px] rounded-2xl p-8 flex flex-col justify-center">
        <h3 class="text-2xl font-bold text-[#1a2f7a] mb-3">Legacy</h3>
        <p class="text-xl text-[#4B61A4] leading-relaxed">
          Be remembered as one of the voices that moved the needle on Africa's innovation landscape.
        </p>
      </div>
      <div class="rounded-2xl sm:min-h-[269px] overflow-hidden bg-gray-600">
        <img v-if="guestImage2" :src="guestImage2" alt="Guest image 2" class="w-full h-full object-cover block" />
      </div>
    </div>

    <!-- Row 3 -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="rounded-2xl sm:min-h-[286px] overflow-hidden bg-gray-600">
        <img v-if="guestImage3" :src="guestImage3" alt="Guest image 3" class="w-full h-full object-cover hidden sm:block" />
      </div>
      <div class="bg-[#D3B973] sm:min-h-[286px] rounded-2xl p-5 flex flex-col justify-center">
        <h3 class="text-2xl font-bold text-white mb-3">Connection</h3>
        <p class="text-xl text-white/90 leading-relaxed">
          Expand your network by being part of our global tech community,
          fostering potential collaborations and mentorships.
        </p>
      </div>
      <div class="bg-[#E9ECF4] sm:min-h-[286px] rounded-2xl p-5 flex flex-col justify-center">
        <h3 class="text-2xl font-bold text-[#1a2f7a] mb-3">Exposure</h3>
        <p class="text-xl text-[#1F357A] leading-relaxed">
          Get featured in front of our growing audience of tech enthusiasts, developers,
          entrepreneurs and innovators.
        </p>
      </div>
    </div>

  </div>
</section>


    <!-- CTA -->
    <section class="relative bg-[#eef2f8] w-full h-full py-16 sm:py-20 overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="text-base sm:text-2xl text-gray-700 leading-[1.9] mb-8">
          Have some big idea or brand to develop and need help?<br class="hidden sm:block" />
          Then reach out we'd love to hear about your project and provide help.
        </p>
        <a href="/contact" class="px-10 py-3.5 bg-[#243E90] text-white text-sm font-semibold rounded-lg hover:bg-[#152568] transition-colors">
          Contact Us Now
        </a>
      </div>

      <!-- Squiggle -->
      <<div class="absolute top-50 right-[-200px] z-10">
    <img
      src="../assets/Vector 3.png"
      alt=""
      aria-hidden="true"
      class="lg:h-full"
    />
  </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "DevPodcast",
  data() {
    return {

      isPlaying: false,
      youtubeVideoId: "OCeLC0URkZ0",

      activeCategory: 1,

      categories: [
        {
          id: 1,
          label: "Trends and Updates",
          icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
                   <path d="M7.76 7.76a6 6 0 0 0 0 8.49"/>
                   <circle cx="12" cy="12" r="2"/>
                   <path d="M16.24 7.76a6 6 0 0 1 0 8.49"/>
                   <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                 </svg>`,
        },
        {
          id: 2,
          label: "Emerging Technology and Innovation",
          icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <rect x="2" y="3" width="20" height="14" rx="2"/>
                   <path d="M8 21h8M12 17v4"/>
                 </svg>`,
        },
        {
          id: 3,
          label: "Tech History and Lifestyle",
          icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                   <path d="M2 17l10 5 10-5"/>
                   <path d="M2 12l10 5 10-5"/>
                 </svg>`,
        },
        {
          id: 4,
          label: "Startup and Entrepreneurship",
          icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                   <circle cx="9" cy="7" r="4"/>
                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                   <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                 </svg>`,
        },
        {
          id: 5,
          label: "Venture Capital and Startup Ecosystem",
          icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <circle cx="12" cy="5" r="2"/>
                   <circle cx="5" cy="19" r="2"/>
                   <circle cx="19" cy="19" r="2"/>
                   <path d="M12 7v4M8.5 17.5l3.5-6.5M15.5 17.5l-3.5-6.5"/>
                 </svg>`,
        },
        {
          id: 6,
          label: "Sustainability and Green Technology",
          icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"/>
                   <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
                   <path d="M2 12h20"/>
                 </svg>`,
        },
      ],

      heroImage:        "/bg-3 1.png",
      podcastThumbnail: "/podcast.png",
      logoImage:        "/dev-logo.png",
      guestSectionBg:   "/bg-3 1.png",
      guestImage1:      "/guest1.png",
      guestImage2:      "/guest2.png",
      guestImage3:      "/guest3.png",
    };
  },
};
</script>