<template>
  <div class="h-screen flex">
    <sidebar />
    <navbar />
    <div class="relative mx-5 my-20 w-screen">
      <div class="absolute w-full">
       <div class="w-full px-3 py-3 rounded-md ring-1 ring-gray-100 shadow-sm bg-gray-50 text-gray-900">
         <div class="c-head"><nuxt-link to="/fprofile">Sparkle Script</nuxt-link></div>
         <div class="c-body my-3">
           <div class="p-title">Limitado</div>
         </div>
       </div>
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
  }
}
</script>
