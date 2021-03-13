<template>
  <div>
    <div class="desktop-display fixed top-0 w-full">
      <nav class="top-0 w-full bg-gray-900 text-xs">
        <ul class="flex justify-around items-center text-center text-white text-lg font-bold">
          <li>
            <h5>{{ title }}</h5>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      let currentPath = this.$route.fullPath
      if (currentPath.includes('/home')) return 'Home'
      else if (currentPath.includes('/notifications')) return 'Notifications'
      else if (currentPath.includes('/songs')) return 'Songs'
      else if (currentPath.includes('/poems')) return 'Poems'
      else if (currentPath.includes('/profile')) return 'Profile'
    }
  }
}
</script>
