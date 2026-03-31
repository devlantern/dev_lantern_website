<template>
  <div class="w-full font-sans bg-[#d8e4f0] text-[#1a1a2e]">

    <!--  HERO -->
    <section class="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">

      <div
        class="absolute inset-0 bg-[#0d1266] bg-cover bg-center"
        :style="heroImage ? { backgroundImage: `url('${heroImage}')` } : {}"
      ></div>

      <div class="absolute inset-0 bg-[#04064699]"></div>

      <div class="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          About <span class="text-[#c9a227]">Dev Lantern</span>
        </h1>
        <p class="mt-7 text-xl sm:text-base text-[#cdd5f0] leading-[1.85]">
          Dev Lantern is a subsidiary of Walure Development Initiative, a
          <a href="#" class="text-[#c9a227] font-medium hover:underline">non-governmental organization</a>
          committed to advancing sustainable development through education,
          empowerment, and capacity building.
        </p>
      </div>
    </section>


    <!-- OUR VALUES -->
    <section class="bg-white w-full h-full py-10 sm:py-14">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">Our Values</h2>

        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

          
          <div class="rounded-[18px] overflow-hidden bg-[#b8c4d0] sm:min-h-[432px]">
            <img
              v-if="valueImage1"
              :src="valueImage1"
              alt="Our Values"
              class="w-full h-full object-cover block"
            />
          </div>

          <!-- Our Mission -->
          <div class="rounded-[18px] sm:min-h-[432px] overflow-hidden bg-[#1a3bbf] relative h-[220px]">
            <img
              v-if="missionImage"
              :src="missionImage"
              alt="Our Mission"
              class="absolute inset-0 w-full h-full object-cover block"
            />
            <div class="absolute inset-0 bg-[#08106eb3] "></div>
            <div class="absolute inset-0 flex flex-col justify-end p-[22px] z-10">
              <h3 class="text-2xl font-bold text-white mb-2.5">Our Mission</h3>
              <p class="text-xl text-[#CAD1E4] leading-relaxed">
                To create a structured, intentional, and high-impact tech community
                where learning, collaboration, and innovation thrive.
              </p>
            </div>
          </div>

          <!-- Our Vision -->
          <div class="rounded-[18px] overflow-hidden bg-[#e4ecf7] relative sm:min-h-[432px] h-[220px]">
            <img
              v-if="visionImage"
              :src="visionImage"
              alt="Our Vision"
              class="absolute inset-0 w-full h-full object-cover block"
            />
            <div class="absolute inset-0 bg-[#f6f6f6cc]/50"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-[26px] z-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-2.5">Our Vision</h3>
              <p class="text-xl text-[#4B61A4] leading-relaxed">
                To become leading community for meaningful tech conversations,
                talent development, and ecosystem growth across Africa.
              </p>
            </div>
          </div>

          <!-- Bottom-right -->
          <div class="rounded-[18px] hidden sm:block overflow-hidden bg-[#b8c4d0] min-h-[432px]">
            <img
              v-if="valueImage2"
              :src="valueImage2"
              alt="Community"
              class="w-full h-full object-cover block"
            />
          </div>

        </div>
      </div>
    </section>


    <!--  KEY MEMBERS -->
    <section class="relative  py-10 sm:py-14 overflow-hidden">

      <div
        class="absolute inset-0 bg-white bg-cover bg-center"
        :style="keyMembersBg ? { backgroundImage: `url('${keyMembersBg}')` } : {}"
      ></div>
      <div class="absolute inset-0 bg-[#d8e4f0]/80"></div>

      <div class="relative z-10 max-w-6xl  mx-auto px-4 sm:px-6">

        <!--squiggle -->
       <img
      src="../assets/Vector 3.png"
      alt=""
      aria-hidden="true"
      class="absolute sm:top-[-50px] right-4 z-10 w-[80px]  sm:w-[300px] h-auto object-contain"
    />

        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Key Members</h2>

        <!-- Row 1 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">

          <div class="relative overflow-hidden bg-[#9a9a9a] h-[380px] sm:min-h-[744px]">
            <img
              v-if="members[0].photo"
              :src="members[0].photo"
              :alt="members[0].name"
              class="absolute inset-0 w-full h-full object-cover object-top grayscale"
            />
            <div class="absolute min-h-[186px] bottom-2 left-4 right-4 bg-gray-300/[0.58] px-3 pt-2.5 pb-2">
              <p class="sm:text-[30px] font-bold text-white mb-3 mt-4">{{ members[0].name }}</p>
              <p class="text-[18px] text-white mb-4">{{ members[0].role }}</p>
              <div class="flex gap-2 items-center">
                <a href="#" aria-label="Twitter" class="flex opacity-80 hover:opacity-100 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" class="flex opacity-80 hover:opacity-100 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>
                </a>
              </div>
            </div>
          </div>

         
          <div class="sm:flex sm:flex-col gap-1 grid grid-cols-2 ">
            <div
              v-for="member in members.slice(1, 3)"
              :key="member.name"
              class="relative overflow-hidden bg-gray-300 h-[200px] sm:min-h-[360px]"
            >
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="absolute inset-0 w-full h-full object-cover object-top grayscale"
              />
              <div class="absolute sm:min-h-[186px] bottom-2 left-4 right-4 bg-gray-300/[0.58] px-3 pt-2 pb-1.5">
                <p class="text-sm sm:text-[30px] font-bold text-white mb-4.5">{{ member.name }}</p>
                <p class=" text-xs sm:text-[18px] text-white mb-3 mt-5">{{ member.role }}</p>
                <div class="flex gap-2 items-center">
                  <a href="#" class="flex opacity-80 hover:opacity-100 transition-opacity">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </a>
                  <a href="#" class="flex opacity-80 hover:opacity-100 transition-opacity">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-3 sm:grid-cols-3 gap-3 mb-3">
          <div
            v-for="member in members.slice(3, 6)"
            :key="member.name"
            class="relative overflow-hidden bg-[#9a9a9a] h-[180px] sm:min-h-[429px]"
          >
            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover object-top grayscale"  
            />
            <div class="absolute sm:min-h-[186px] bottom-2 left-4 right-4 bg-gray-300/[0.58] px-2.5 sm:pt-2 pb-1.5">
              <p class="text-xs sm:text-[30px] font-bold text-white mb-3 mt-4">{{ member.name }}</p>
              <p class=" text-xs sm:text-[18px] text-white mb-1.5">{{ member.role }}</p>
              <div class="flex gap-2 items-center">
                <a href="#" class="flex opacity-80 hover:opacity-100 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" class="flex opacity-80 hover:opacity-100 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3-->
        <div class="grid grid-cols-3 sm:grid-cols-3 gap-3">
          <div
            v-for="member in members.slice(6, 9)"
            :key="member.name"
            class="relative overflow-hidden bg-[#9a9a9a] h-[180px] sm:min-h-[429px]"
          >
            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover object-top grayscale"
            />
            <div class="absolute sm:min-h-[186px] bottom-2 left-4 right-4 bg-gray-300/[0.58] px-2.5 pt-2 pb-1.5">
              <p class=" text-sm sm:text-[30px] font-bold text-white mb-2 mt-4">{{ member.name }}</p>
              <p class=" text-xs sm:text-[18px] text-white mb-1.5">{{ member.role }}</p>
              <div class="flex gap-2 items-center">
                <a href="#" class="flex opacity-80 hover:opacity-100 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" class="flex opacity-80 hover:opacity-100 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- WHAT MAKES US DIFFERENT-->
    <section class="bg-white py-10 sm:py-14 pb-16 sm:pb-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-9 items-center">

        <!-- Left -->
        <div>
          <h2 class="text-[48px] min-h-[154px] text-[#6E6E6E] font-normal leading-relaxed mb-5">
            What Makes Us<br />
            <strong class="text-xl font-extrabold text-gray-900">Different</strong>
          </h2>

          <div class="bg-[#2c2c2c] rounded-[14px] px-6 py-5 min-h-[264px]">
            <ul class="flex flex-col gap-4 list-none">
              <li class="flex items-center gap-3 text-[24px] font-medium text-[#BCBCBC]">
                <span class="w-2.5 h-2.5 rounded-full bg-[#555] border-2 border-[#888] shrink-0"></span>
                Depth over noise
              </li>
              <li class="flex items-center gap-3 text-[24px] font-medium text-[#BCBCBC]">
                <span class="w-2.5 h-2.5 rounded-full bg-[#555] border-2 border-[#888] shrink-0"></span>
                Practical over theory
              </li>
              <li class="flex items-center gap-3 text-[24px] font-medium text-[#BCBCBC]">
                <span class="w-2.5 h-2.5 rounded-full bg-[#555] border-2 border-[#888] shrink-0"></span>
                Builders over hype
              </li>
              <li class="flex items-center gap-3 text-[24px] font-medium text-[#BCBCBC]">
                <span class="w-2.5 h-2.5 rounded-full bg-[#555] border-2 border-[#888] shrink-0"></span>
                Structured growth paths
              </li>
            </ul>
          </div>
        </div>

        <!-- Right -->
        <div class="rounded-[18px] overflow-hidden bg-[#b8c4d0] h-[444px] sm:min-h-[444px]">
          <img
            v-if="differenceImage"
            :src="differenceImage"
            alt="What Makes Us Different"
            class="w-full h-full object-cover block"
          />
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      heroImage:       "/bg-3 1.png",
      squiggleImage:   "/vector.png",
      keyMembersBg:    "/bg2.png",

      valueImage1:     "/value1.png",
      missionImage:    "/bg9 1.png",
      visionImage:     "/bg9 2.png",
      valueImage2:     "/value2.png",

      differenceImage: "/diff.png",

      members: [
        { name: "Samuel Adeleye",       role: "Chairman",                  photo: "/samuel.png"   },
        { name: "Otega Ovie",           role: "Technology",                photo: "/otega.png"    },
        { name: "Fehintola Oladele",    role: "Community",                 photo: "/tola.png"     },
        { name: "Segun Oroyo",          role: "Branding & Publicity",      photo: "/segun.png"    },
        { name: "Chigozie Ifeanyichu",  role: "Legal",                     photo: "/chigozie.png" },
        { name: "Tunde Adetunla",       role: "Project",                   photo: "/tunde.png"    },
        { name: "Anuoluwa Balogun",     role: "Project Assistant",         photo: "/anu.png"      },
        { name: "Nnamdi Azodo",         role: "Sponsorship & Partnership", photo: "/nnamdi.png"   },
        { name: "Odey Odey",            role: "Finance",                   photo: "/odey.png"     },
      ],
    };
  },
};
</script>