<template>
  <div class="h-screen p-5 flex items-center justify-center overflow-hidden bg-gray-50">
    <div class="hidden ml-10 md:block">
      <div class="text-5xl mb-3 font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
      <div class="text-xl">Develop your skills in music. <br/> Compose your song and make it public to the world.</div>
    </div>
    <div class="flex flex-col w-96 lg:w-1/3 xl:w-1/3 p-6">
      <div class="block mx-10 my-5 md:hidden">
        <div class="flex justify-center">
          <img class="w-10 text-center" src="~/assets/img/logo.png" alt="fixrhythm">
        </div>
        <div class="text-4xl text-center font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
        <div class="text-xs text-center mt-2">Poetry, Arts & Music</div>
      </div>
      <form class="form-card rounded-xl w-full border shadow-lg p-5 bg-white" @submit.stop.prevent="onLogin">
        <div class="form-control">
          <div class="font-semibold text-gray-600 text-2xl sm:text-xl md:text-xl lg:text-xl mb-5">Log in</div>
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" v-model="loginData.email" type="text" placeholder="Email" />
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" v-model="loginData.password" type="password" placeholder="Password" />
        </div>
        <div class="form-control w-full mb-2">
          <button class="p-3 w-full bg-gray-900 rounded-lg text-white hover:bg-gray-800 focus:outline-none" type="submit">Login</button>
        </div>
        <div class="form-control w-full text-center mt-3 mb-3">
          <nuxt-link class="text-sm text-gray-700 hover:underline" to="forgot-password">Forgot Password?</nuxt-link>
        </div>
        <div class="form-control w-full text-center mb-5">
          <hr />
        </div>
        <div class="form-control w-full mb-2">
          <nuxt-link to="create-account">
            <button class="p-3 w-full bg-red-800 rounded-lg text-white hover:bg-red-700 focus:outline-none">Create Account</button>
          </nuxt-link>
        </div>
        <div class="form-control w-full -mb-3">
          <p class="mr-2 text-right text-xs text-gray-500">Fixrhythm &copy; {{ new Date().getFullYear() }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin() {
      this.$router.push('home')
    }
  }
}
</script>
