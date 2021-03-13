<template>
  <div class="h-screen flex">
    <sidebar />
    <navbar />
    <h5>This is Home</h5>
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
