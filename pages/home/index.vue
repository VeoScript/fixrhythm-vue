<template>
  <div class="h-screen flex">
    <sidebar />
    <navbar />
    <div class="home-display w-screen">
      <div class="mx-5 my-20">
        <div class="card w-full">
          <div class="card-main">
            <div class="card-header block ml-2 font-black text-xl text-black">
              Composed Title
              <div class="subtitle font-light text-sm">Jerome Joseph Villaruel</div>
            </div>
            <div class="card-body mt-2 p-3 bg-gray-900 rounded-md">
              this is the content of the song
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
  }
}
</script>
