<template>
  <div class="h-screen flex">
    <sidebar />
    <navbar />
    <div class="relative mx-10 my-20 w-full">
      <div class="absolute">
        <div><h1>This is Home</h1></div>
      <div class="absolute w-full">
       <div class="w-full px-3 py-3 rounded-md ring-1 ring-gray-500 bg-gray-200 text-gray-900">
         <div class="c-head">Card Header</div>
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
