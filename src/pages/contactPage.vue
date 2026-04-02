
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

        <!-- Status messages -->
        <div v-if="statusMessage" :class="['text-center text-sm font-medium mb-6 py-3 px-4 rounded-lg', statusSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700']">
          {{ statusMessage }}
        </div>

        <form @submit.prevent="onSubmit" class="flex flex-col gap-6">

          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex flex-col gap-1 w-full">
              <label class="text-base text-black font-medium">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Enter Fullname"
                required
                class="border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#9C9C9C] focus:outline-none focus:border-[#243E90]"
              />
            </div>
            <div class="flex flex-col gap-1 w-full">
              <label class="text-base text-black font-medium">Email</label>
              <input
                v-model="form.email"
                type="email"
                name="email"
                placeholder="Johndoe@gmail.com"
                required
                class="border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#9C9C9C] focus:outline-none focus:border-[#243E90]"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-base text-black font-medium">Inquiry</label>
            <div class="relative">
              <select
                v-model="form.inquiry"
                name="inquiry"
                class="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#243E90] appearance-none bg-white pr-10"
              >
                <option value="" disabled selected>Inquiry type</option>
                <option value="general">General</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
              <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#222222"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-base text-black font-medium">Message</label>
            <textarea
              v-model="form.message"
              name="message"
              rows="6"
              required
              class="border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#BCBCBC] focus:outline-none focus:border-[#243E90] resize-none"
            ></textarea>
          </div>

          
          <div class="flex justify-center">
            <div id="recaptcha-container"></div>
          </div>

          <p v-if="captchaError" class="text-red-500 text-sm text-center -mt-2">
           Please complete the CAPTCHA before submitting.
          </p>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-[#243E90] hover:bg-[#1a2e6e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors duration-200"
          >
            {{ isSubmitting ? 'Sending...' : 'Submit' }}
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'


const siteKey = '6LdkzKIsAAAAAPcwD3aL6wuHUTxwTMXqIZ5ZcFFj' 
const captchaToken = ref('')
const captchaError = ref(false)

onMounted(() => {
  window.onCaptchaDone = (token) => {
    captchaToken.value = token
    captchaError.value = false
  }

  window.onCaptchaGone = () => {
    captchaToken.value = ''
  }

  const renderCaptcha = () => {
    if (window.grecaptcha && document.getElementById('recaptcha-container')) {
      window.grecaptcha.render('recaptcha-container', {
        sitekey: siteKey,
        callback: 'onCaptchaDone',
        'expired-callback': 'onCaptchaGone',
      })
    } else {
      setTimeout(renderCaptcha, 300)
    }
  }

  renderCaptcha()
})

const WEB3FORMS_ACCESS_KEY = 'df1a4826-9339-4447-9bd4-3586a9b438d4'

const form = reactive({
  name: '',
  email: '',
  inquiry: '',
  message: '',
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const statusSuccess = ref(false)

const onSubmit = async () => {
 if (!captchaToken.value) {
    captchaError.value = true
    return
  }
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: form.name,
      email: form.email,
      inquiry: form.inquiry,
      message: form.message,
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((r) => r.json())

    if (res.success) {
      statusSuccess.value = true
      statusMessage.value = res.message || 'Message sent successfully!'
      // Reset form
      Object.assign(form, { name: '', email: '', inquiry: '', message: '' })
    } else {
      statusSuccess.value = false
      statusMessage.value = res.message || 'Something went wrong. Please try again.'
    }
  } catch (err) {
    statusSuccess.value = false
    statusMessage.value = 'Network error. Please check your connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>