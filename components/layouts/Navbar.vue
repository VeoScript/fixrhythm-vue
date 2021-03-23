<template>
  <div class="flex">
    <div class="fixed top-0 w-full">
      <nav class="top-0 w-full bg-gray-900 shadow-xl p-3 text-xs">
        <ul class="flex relative text-left text-white text-lg font-bold">
          <li>
            <h5 class="md:ml-72 bg-red-600 px-3 py-1 rounded-full text-base text-center tracking-tight">{{ title }}</h5>
          </li>
          <li class="hidden md:flex ml-2 w-full">
            <input class="bg-gray-50 w-full text-black text-sm p-1 pl-3 rounded-full focus:outline-none" type="text" placeholder="Search songs, poems and composers">
          </li>
          <li class="absolute flex md:hidden lg:hidden items-center inset-y-0 right-0 space-x-3">
            <nuxt-link class="flex items-center" to="/profile">
              <img class="h-8 w-8 rounded-full ring-4 ring-black" src="https://avatars.githubusercontent.com/u/26340308?s=460&u=f9dcea548505a99a2c873efb8b933aac0fe07abd&v=4" alt="account_avatar">
              <span class="text-white ml-2 font-thin text-sm">Jerome</span>
            </nuxt-link>
            <button class="focus:outline-none" @click.prevent="dropdown = !dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current text-gray-100" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="relative md:hidden" v-show="dropdown">
      <div class="fixed h-screen flex items-end justify-center inset-x-0 bottom-0" style="background-color: rgba(0,0,0,0.5)" @click.prevent="dropdown = !dropdown">
        <div class="flex mb-10 w-full">
          <div class="w-full rounded-xl mx-5 py-5 text-center bg-gray-900 ring-2 ring-red-600 text-white">
            <div class="font-bold text-lg mb-5">Menu</div>
            <div class="block" v-for="(droplink, i) in dropdownLink" :key="i">
              <div class="separator h-0.5 w-full bg-gray-800"></div>
                <nuxt-link :to="droplink.goto">
                  <div class="w-full p-3 text-sm hover:bg-gray-800">
                    {{ droplink.title }}
                  </div>
                </nuxt-link>
            </div>
          </div>
        </div>
      </div>
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
          title: 'About us',
          goto: '/about'
        },
        {
          title: 'Terms of Service',
          goto: '/terms'
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
