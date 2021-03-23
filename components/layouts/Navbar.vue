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
    <div class="relative z-0 md:hidden" v-show="dropdown">
      <div class="fixed justify-center inset-x-0 bottom-0">
        <div class="flex h-72">
          <div class="w-full rounded-xl mx-5 py-5 text-center bg-gray-900 ring-2 ring-red-600 text-white">
            <span class="font-bold text-lg">Menu</span>
            <div class="flex justify-end -mt-5">
              <button class="focus:outline-none" @click.prevent="dropdown = !dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current text-white mx-5" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>
              </button>
            </div>
            <div class="block my-5">
              <div class="separator h-0.5 w-full bg-gray-800"></div>
              <div class="w-full p-3 hover:bg-gray-800">
                <nuxt-link class="" to="/home">Settings</nuxt-link>
              </div>
              <div class="separator h-0.5 w-full bg-gray-800"></div>
              <div class="w-full p-3 hover:bg-gray-800">
                <nuxt-link class="" to="/home">Terms and Condition</nuxt-link>
              </div>
              <div class="separator h-0.5 w-full bg-gray-800"></div>
              <div class="w-full p-3 hover:bg-gray-800">
                <nuxt-link class="" to="/home">Logout</nuxt-link>
              </div>
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
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>',
          goto: '/'
        },
        {
          title: 'Logout',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 13v-4l8 7-8 7v-4h-6v-6h6zm0-6v-6h-16v18l8-7v-9h6v4h2z"/></svg>',
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
