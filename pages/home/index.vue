<template>
  <div class="h-screen flex">
    <div class="f-full w-1/4 text-white bg-gray-900">
      <div class="flex items-center justify-center">
        <div class="block mt-10">
          <div class="text-4xl mb-3 font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
          <nuxt-link to="/">
            <div class="flex hover:bg-red-600 p-3 w-32 rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z"/>
              </svg>
              <span class="text-white text-lg font-bold">Home</span>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="flex hover:bg-red-600 p-3 w-full rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/>
              </svg>
              <span class="text-white text-lg font-bold">Notifications</span>
            </div>
          </nuxt-link>
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