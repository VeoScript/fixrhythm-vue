<template>
  <div class="flex">
    <div class="fixed top-0 w-full">
      <nav class="top-0 w-full bg-gray-900 p-3 text-xs">
        <ul class="flex relative text-left text-white text-lg font-bold">
          <li>
            <h5 class="ml-5">{{ title }}</h5>
          </li>
          <li class="absolute flex items-center inset-y-0 right-0 space-x-3">
            <nuxt-link to="/profile">
              <img class="h-8 w-8 rounded-full ring-2 ring-gray-600" src="https://avatars.githubusercontent.com/u/26340308?s=460&u=f9dcea548505a99a2c873efb8b933aac0fe07abd&v=4" alt="account_avatar">
            </nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current text-gray-100" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
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
