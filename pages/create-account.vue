<template>
  <div class="flex items-center justify-center container m-auto my-10">
    <div class="flex">
      <div class="form-card w-full rounded-xl border shadow-lg p-5 bg-white">
        <div class="top flex">
          <div class="button">
            <nuxt-link to="/">
              <svg class="w-6 h-6 mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </nuxt-link>
          </div>
          <div class="text-2xl mb-5 font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
        </div>
        <div class="form-control">
          <div class="font-semibold text-gray-600 text-xl sm:text-lg md:text-lg lg:text-lg mb-2">Sign Up</div>
          <div class="font-normal text-gray-600 text-sm sm:text-xs md:text-xs lg:text-xs mb-5">
            Start your fantasies in poetry and music composition.
          </div>
        </div>
        <div class="block md:flex md:space-x-2">
          <div class="form-control w-full mb-2">
            <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="text" placeholder="First Name" />
          </div>
          <div class="form-control w-full mb-2">
            <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="text" placeholder="Screen Name" />
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="text" placeholder="Email" />
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="password" placeholder="Create Password" />
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-full border-2 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none" type="password" placeholder="Re-enter Password" />
        </div>
        <div class="form-control w-full mb-2">
          <button class="p-3 w-full bg-gray-900 rounded-lg text-white hover:bg-gray-800 focus:outline-none">Sign Up</button>
        </div>
        <div class="form-control w-full -mb-3">
          <p class="mr-2 text-center text-xs font-normal text-gray-500">
            By clicking Sign Up, you agree to our <nuxt-link class="hover:underline text-red-600" to="#">Terms</nuxt-link>, <nuxt-link class="hover:underline text-red-600" to="#">Data Policy</nuxt-link> and <nuxt-link class="hover:underline text-red-600" to="#">Cookies Policy</nuxt-link>. <br/> You may receive Email Notifications from us and can opt out any time.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>