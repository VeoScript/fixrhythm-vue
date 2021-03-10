<template>
  <div class="h-screen flex items-center justify-center p-20 bg-gray-50">
    <div class="block ml-10 xs:hidden sm:hidden md:hidden lg:hidden">
      <div class="text-5xl mb-3 font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
      <div class="text-xl">Develop your skills in music. <br/> Compose your song and make it public to the world.</div>
    </div>
    <div class="flex flex-col">
      <div class="hidden xs:block sm:block md:block lg:block">
        <div class="flex justify-center">
          <img class="w-10 text-center" src="~/assets/img/logo.png" alt="fixrhythm">
        </div>
        <div class="text-4xl text-center font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
        <div class="text-xs text-center mt-2">Poetry, Arts & Music</div>
      </div>
      <div class="form-card w-96 border shadow-lg p-5 mt-5 ml-10 mr-10 bg-white">
        <div class="form-control">
          <div class="font-semibold text-2xl sm:text-base md:text-base lg:text-base mb-5">Log in</div>
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="text" placeholder="Email" />
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="password" placeholder="Password" />
        </div>
        <div class="form-control w-full mb-2">
          <button class="p-3 w-full bg-gray-900 rounded-lg text-white hover:bg-gray-800 focus:outline-none">Log in</button>
        </div>
        <div class="form-control w-full text-center mt-3 mb-3">
          <nuxt-link class="text-sm text-gray-700 hover:underline" to="/">Forgot Password?</nuxt-link>
        </div>
        <div class="form-control w-full text-center mb-5">
          <hr />
        </div>
        <div class="form-control w-full mb-2">
          <button class="p-3 w-full bg-red-800 rounded-lg text-white hover:bg-red-700 focus:outline-none">Create Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
