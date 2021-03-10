<template>
  <div class="h-screen flex items-center justify-center p-5 bg-gray-100">
    <div class="block sm:hidden md:hidden lg:hidden">
      <div class="text-4xl font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
      <div class="text-xl w-3/4">Develop your skills in music, compose your song and make it public to the world.</div>
    </div>
    <div class="flex flex-col">
      <div class="hidden sm:block md:block lg:block">
        <div class="text-4xl text-center font-black uppercase"><span class="text-red-600">Fix</span>rhythm</div>
      </div>
      <div class="form-card border-2 p-5">
        <div class="form-control">
          <div class="font-semibold mb-5">Sign in</div>
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-72" type="text" placeholder="Email" />
        </div>
        <div class="form-control w-full mb-2">
          <input class="p-3 w-72" type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
