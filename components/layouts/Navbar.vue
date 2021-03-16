<template>
  <div class="flex">
    <div class="fixed top-0 w-full">
      <nav class="top-0 w-full bg-gray-900 shadow-xl p-3 text-xs">
        <ul class="flex relative text-left text-white text-lg font-bold">
          <li>
            <h5 class="lg:ml-5 bg-red-600 px-3 py-1 rounded-full w-full text-base text-center tracking-tight">{{ title }}</h5>
          </li>
          <li class="absolute flex items-center inset-y-0 right-0 space-x-3">
            <nuxt-link to="/profile">
              <img class="h-8 w-8 rounded-full ring-2 ring-gray-700" src="https://avatars.githubusercontent.com/u/26340308?s=460&u=f9dcea548505a99a2c873efb8b933aac0fe07abd&v=4" alt="account_avatar">
            </nuxt-link>
            <div class="relative">
              <button class="mt-2 focus:outline-none" @click.prevent="dropdown = !dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current text-gray-100" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
              </button>
              <div class="absolute bg-gray-900 w-44 shadow-lg mt-4 rounded-sm right-0" v-show="dropdown">
                <ul class="flex flex-col items-center p-2">
                  <li v-for="(droplink, i) in dropdownLink" :key="i" class="flex w-44 py-2 px-2">
                    <nuxt-link class="w-full font-semibold ml-2 text-sm text-white" :to="droplink.goto">{{ droplink.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
      dropdownLink: [
        {
          title: 'Settings',
          goto: '/settings'
        },
        {
          title: 'Logout',
          goto: '/'
        }
      ]
    }
  },
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
