<template>
  <div class="h-screen flex mb-10">
    <navbar />
    <sidebar />
    <div class="home-display md:ml-64 lg:ml-64 mb-72 w-screen">
      <div class="mx-5 my-20">
        <nuxt-link to="/view-song">
          <div class="card w-full mb-5">
            <div class="card-main block rounded-xl ring-1 ring-gray-300 p-5">
              <div class="block md:flex md:justify-between">
                <div class="flex">
                  <img class="h-16 w-16 rounded-full mr-2" src="https://avatars.githubusercontent.com/u/26340308?s=460&u=f9dcea548505a99a2c873efb8b933aac0fe07abd&v=4" alt="account_avatar">
                  <span class="mt-2 font-black uppercase text-md text-gray-800">Limitado <br> <span class="font-light text-sm capitalize">Jerome Joseph Villaruel</span></span>
                </div>
                <div class="flex mt-1 md:m-0 md:w-1/2">
                  This song was all about problems, depressions, stress and our capacity as a human. The real world that control our life and the time was an illusion, that we need our life more than our wants and luxuries.
                </div>
                <div class="flex items-center">
                  <span class="mr-2" v-html="heart"></span>480
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/Sidebar.vue'
import Navbar from '~/components/layouts/Navbar.vue'
export default {
  components: {
    Sidebar,
    Navbar
  },
  data () {
    return {
      heart: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-red-600" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>',
    }
  }
}
</script>
