<template>
  <div class="h-screen flex mb-10">
    <navbar />
    <sidebar />
    <div class="home-display md:ml-64 lg:ml-64 mb-72 w-screen">
      <div class="mx-5 my-20">
        <div class="card w-full mb-5">
          <div class="card-main rounded-xl ring-1 ring-gray-300 p-2">
            <div class="card-header ml-2 text-black uppercase">
              <div class="title">
                <nuxt-link class="flex font-black text-2xl" to="/view_song">
                  limitado 
                  <span class="ml-2" v-html="isong"></span>
                </nuxt-link>
              </div>
              <div class="subtitle">
                <nuxt-link class="font-text-sm capitalize" to="/view_profile">
                  Jerome Joseph Villaruel
                </nuxt-link>
              </div>
              <div class="rating mt-2 flex font-black text-xs text-gray-500">
                <button class="focus:outline-none mr-1" v-html="liked"></button><span class="text-blue-600">350</span>
                <button class="focus:outline-none mx-1" v-html="unlike"></button><span class="text-red-600">85</span>
              </div>
            </div>
            <div class="card-body px-2 text-gray-900 font-semibold text-sm">
              <div class="discription whitespace-pre-line -mt-5 text-xl tracking-tighter">
                  This song was all about problems, depressions, stress and our capacity as a human. The real world that control our life and the time was an illusion, that we need our life more than our wants and luxuries. 
              </div>
            </div>
          </div>
        </div>
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
  },
  data () {
    return {
      isong: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current mt-1" viewBox="0 0 24 24"><path d="M19.803 13.207l-.829 1.093-1.554-3.826c-.077-.189-.244-.306-.437-.306-.157 0-.356.084-.444.321l-1.356 3.664-1.872-8.759c-.062-.291-.288-.394-.462-.394-.203 0-.428.131-.473.424l-1.629 10.581-1.658-6.968c-.067-.282-.291-.382-.463-.382-.167 0-.374.092-.453.349l-1.453 4.753-1.07-2.53c-.078-.185-.245-.299-.436-.299-.154 0-.294.076-.385.209l-1.257 1.805-.087.058h-2.985c-.276 0-.5.224-.5.5s.224.5.5.5h3.284c.152 0 .296-.074.386-.206l.948-1.353 1.24 2.929c.079.187.241.299.433.299.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384.203 0 .428-.131.473-.425l1.605-10.425 1.673 7.83c.058.272.277.395.467.395.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51c.077.189.245.306.438.306.152 0 .292-.075.382-.206l1.146-1.583.087-.046h3.026c.272 0 .492-.22.492-.492s-.22-.494-.492-.494h-3.322c-.151 0-.294.077-.383.207z"/></svg>',

      ipoem: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-800" viewBox="0 0 24 24"><path d="M20 16.78c.002-1.8.003-2.812 0-4.027-.001-.417.284-.638.567-.638.246 0 .49.168.538.52.19 1.412.411 2.816.547 3.146.042.099.113.141.185.141.123 0 .244-.123.206-.284-.255-1.069-.493-2.519-.607-3.334 1.904 1.854 2.314 2.005 2.192 3.548-.089 1.129-.52 2.508.373 4.255l-2.563.893c-.062-.314-.138-.637-.226-.933-.515-1.721-1.214-1.752-1.212-3.287zm-16.567-4.665c-.246 0-.49.168-.538.52-.19 1.412-.411 2.816-.547 3.146-.042.099-.113.141-.185.141-.123 0-.244-.123-.206-.284.255-1.069.493-2.519.607-3.334-1.904 1.854-2.314 2.005-2.192 3.548.09 1.128.521 2.507-.372 4.254l2.562.894c.062-.314.138-.637.226-.933.515-1.721 1.214-1.752 1.212-3.287-.002-1.8-.003-2.812 0-4.027.001-.418-.285-.638-.567-.638zm1.567.642zm14.001 2.637c-2.354.194-4.35.62-6.001 1.245v-9.876l.057-.036c1.311-.816 3.343-1.361 5.943-1.603v7.633c-.002-.459.165-.881.469-1.186.377-.378.947-.562 1.531-.391v-8.18c-3.438.105-6.796.658-9 2.03-2.204-1.372-5.562-1.925-9-2.03v8.18c.583-.17 1.153.012 1.531.391.304.305.471.726.469 1.184v-7.631c2.6.242 4.632.788 5.943 1.604l.057.035v9.876c-1.651-.626-3.645-1.052-6-1.246v1.385c0 .234-.021.431-.046.622 2.249.193 4.372.615 6.046 1.381.638.292 1.362.291 2 0 1.675-.766 3.798-1.188 6.046-1.381-.025-.191-.046-.386-.046-.621l.001-1.385zm-12.001-2.426c1.088.299 2.122.64 3 .968v1.064c-.823-.345-1.879-.705-3-1.015v-1.017zm0-1.014c1.121.31 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968v1.017zm0-5.09v1.017c1.121.311 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968zm0 3.058c1.121.31 2.177.67 3 1.015v-1.063c-.878-.328-1.912-.669-3-.968v1.016zm10 4.063c-1.121.31-2.177.67-3 1.015v-1.064c.878-.328 1.912-.669 3-.968v1.017zm0-3.048c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017zm-3-3.105v1.064c.823-.345 1.879-.705 3-1.015v-1.017c-1.088.299-2.122.64-3 .968zm3 1.074c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017z"/></svg>',

      like: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>',

      liked: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>',

      unlike: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>',

      unliked: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>',

      star: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>'
    }
  }
}
</script>
