<template>
  <div class="h-screen flex">
    <sidebar />
    <h5>This is Notifications</h5>
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/Sidebar.vue'
import Bottombar from '~/components/layouts/Bottombar.vue'
export default {
  components: {
    Sidebar,
    Bottombar
  }
}
</script>
