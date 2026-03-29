<template>
  <div class="relative">


    <div class="relative w-full h-[520px] overflow-hidden">
      <div
        class="absolute inset-0 bg-[#0d1266] bg-cover bg-center"
        style="background-image: url('/main-header.png')"
      ></div>
      <div class="absolute inset-0 bg-[#040646]/60"></div>
    </div>

   
    <div class="w-full bg-[#EEF1F8] min-h-[500px]"></div>


    <div class="absolute top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-10">
      <div class="bg-white rounded-3xl px-8 md:px-12 py-12 shadow-2xl">

        <h1 class="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#111111] text-center mb-5">Contact Us</h1>
        <p class="text-[#6E6E6E] font-normal text-center text-sm md:text-lg mb-10">
          Have some big idea or brand to develop and need help? Then reach out we'd love to
          hear about your project and provide help.
        </p>

        <div class="flex flex-col gap-6">


          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex flex-col gap-1 w-full">
              <label class="text-base text-black font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter Fullname"
                class="border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#9C9C9C] focus:outline-none focus:border-[#243E90]"
              />
            </div>
            <div class="flex flex-col gap-1 w-full">
              <label class="text-base text-black font-medium">Email</label>
              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                class="border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#9C9C9C] focus:outline-none focus:border-[#243E90]"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-base text-black font-medium">Inquiry</label>
            <div class="relative">
            <select
            class="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#BCBCBC] focus:outline-none focus:border-            [#243E90] appearance-none bg-white pr-10"
            >
            <option value="" disabled selected>Inquiry type</option>
            <option value="general">General</option>
            <option value="partnership">Partnership</option>
            <option value="support">Support</option>
            <option value="other">Other</option>
            </select>


            <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z"  fill="#222222"/>
            </svg>
            </div>
        </div>
    </div>

          <div class="flex flex-col gap-1">
            <label class="text-base text-black font-medium">Message</label>
            <textarea
              rows="6"
              class="border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#BCBCBC] focus:outline-none focus:border-[#243E90] resize-none"
            ></textarea>
          </div>

          <button
            class="w-full bg-[#243E90] hover:bg-[#1a2e6e] text-white font-semibold py-4 rounded-xl transition-colors duration-200"
          >
            Submit
          </button>

        </div>
      </div>
    </div>

  </div>
</template>