<template>
  <div class="h-screen flex">
    <sidebar />
    <navbar />
    <div class="relative mx-10 my-20 w-full">
      <div class="absolute">
        <div><h1>This is Home</h1></div>
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
