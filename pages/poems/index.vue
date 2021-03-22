<template>
  <div class="h-screen flex">
    <navbar />
    <sidebar />
    <h5>This is Poems</h5>
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
