<template>
  <perfect-scrollbar>
    <div class="p-10 md:hidden lg:w-64 flex flex-col text-white border-r-2 border-red-500 bg-gray-900">
      <div class="flex items-center justify-center">
        <div class="desktop-display block">
          <nuxt-link to="home">
            <div class="text-4xl mb-10 font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
          </nuxt-link>
          <ul>
            <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title">
              <nuxt-link class="flex hover:bg-gray-800 p-3 mb-2 w-full rounded-3xl" :class="`${link.title === setLink ? 'bg-gray-800' : 'bg-gray-900'}`" :to="link.goto">
                <span v-html="link.icon"></span>
                <span class="text-lg font-bold">{{ link.title }}</span>
              </nuxt-link>
            </li>
          </ul>
          <div class="btn-create mt-10 text-center">
            <button class="font-bold p-3 w-full rounded-3xl bg-red-600 hover:bg-red-700 focus:outline-none">
              Compose
            </button>
          </div>
          <div class="w-full mt-10">
            <p class="mr-2 text-center text-xs text-gray-500">&copy; {{ new Date().getFullYear() }} Fixrhythm, <br/> <span class="font-thin">Developed with &#10084; by VEOSCRIPT</span></p>
          </div>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
export default {
  data () {
    return {
      setLink: 'home',
      links: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z"/></svg>',
          title: 'Home',
          goto: '/home'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/></svg>',
          title: 'Notifications',
          goto: '/notifications'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24"><path d="M19.803 13.207l-.829 1.093-1.554-3.826c-.077-.189-.244-.306-.437-.306-.157 0-.356.084-.444.321l-1.356 3.664-1.872-8.759c-.062-.291-.288-.394-.462-.394-.203 0-.428.131-.473.424l-1.629 10.581-1.658-6.968c-.067-.282-.291-.382-.463-.382-.167 0-.374.092-.453.349l-1.453 4.753-1.07-2.53c-.078-.185-.245-.299-.436-.299-.154 0-.294.076-.385.209l-1.257 1.805-.087.058h-2.985c-.276 0-.5.224-.5.5s.224.5.5.5h3.284c.152 0 .296-.074.386-.206l.948-1.353 1.24 2.929c.079.187.241.299.433.299.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384.203 0 .428-.131.473-.425l1.605-10.425 1.673 7.83c.058.272.277.395.467.395.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51c.077.189.245.306.438.306.152 0 .292-.075.382-.206l1.146-1.583.087-.046h3.026c.272 0 .492-.22.492-.492s-.22-.494-.492-.494h-3.322c-.151 0-.294.077-.383.207z"/></svg>',
          title: 'Songs',
          goto: '/songs'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24"><path d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z"/></svg>',
          title: 'Poems',
          goto: '/poems'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>',
          title: 'Profile',
          goto: '/profile'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4 fill-current text-white" viewBox="0 0 24 24"><path d="M16 13v-4l8 7-8 7v-4h-6v-6h6zm0-6v-6h-16v18l8-7v-9h6v4h2z"/></svg>',
          title: 'Logout',
          goto: '/'
        }
      ]
    }
  }
}
</script>
