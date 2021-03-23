<template>
  <div class="h-screen flex mb-10">
    <navbar />
    <sidebar />
    <div class="home-display my-20 md:ml-72 w-screen">
      <div class="mx-5 mb-3" v-for="(card, i) in cards" :key="i">
        <nuxt-link to="/view-song/">
          <div class="card w-full">
            <div class="card-main block transition duration-500 ease-in-out hover:shadow-lg rounded-xl ring-1 ring-gray-300 p-5">
              <div class="block md:flex md:justify-between">
                <div class="flex items-center md:w-60">
                  <img class="h-16 w-16 rounded-full mr-2" :src="card.profile" alt="account_avatar">
                  <span class="mt-2 font-black uppercase text-md text-gray-800">{{ card.title }} <br> <span class="font-light text-sm capitalize">{{ card.composer }}</span></span>
                </div>
                <div class="flex items-center mt-1 md:m-0 md:w-1/2">
                  {{ card.description }}
                </div>
                <div class="flex mt-3 md:m-0 items-center">
                  <span class="mr-2" v-html="heart"></span>{{ card.reactions }}
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="w-full h-24"></div>
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
      heart: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-red-600" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>',
      cards: [
        {
          profile: 'https://avatars.githubusercontent.com/u/26340308?s=460&u=f9dcea548505a99a2c873efb8b933aac0fe07abd&v=4',
          title: 'Limitado',
          composer: 'Jerome Joseph Villaruel',
          description: 'This song was all about problems, depressions, stress and our capacity as a human. The real world that control our life and the time was an illusion, that we need our life more than our wants and luxuries.',
          reactions: '739'
        },
        {
          profile: 'https://avatars.githubusercontent.com/u/80662581?s=460&u=c70b67eff73998308b5c1629f49f7d37eddde7e9&v=4',
          title: 'Pure heart',
          composer: 'Richlyn Hermosilla',
          description: 'Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.',
          reactions: '507'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1372834106577276933/fG7vy0A1_200x200.jpg',
          title: 'The Movie',
          composer: 'Lisa Manoban',
          description: 'It always seems impossible until it is done.',
          reactions: '10M'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1373104490946039808/6kYx-wiS_200x200.jpg',
          title: 'Solo',
          composer: 'Jennie Kim',
          description: 'Keep your face to the sunshine and you cannot see a shadow.',
          reactions: '15M'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1372774916097896455/ruwr9BXF_200x200.jpg',
          title: 'On the Ground',
          composer: 'Roseanne Park',
          description: 'Once you replace negative thoughts with positive ones, you’ll start having positive results.',
          reactions: '12M'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1342423201578532864/MXWr4IbZ_200x200.jpg',
          title: 'Cherry Lips',
          composer: 'Kim Jisoo',
          description: 'When you are enthusiastic about what you do, you feel this positive energy. It’s very simple.',
          reactions: '8M'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1347581305001701376/dJw9KHqd_200x200.jpg',
          title: 'No matter what',
          composer: 'Gecelle Cabodbod',
          description: 'You’re braver than you believe, and stronger than you seem, and smarter than you think.',
          reactions: '235'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1179711768148373504/hRjlK6qw_200x200.jpg',
          title: 'Moshi Moshi',
          composer: 'Jihad',
          description: 'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make apositive impact.',
          reactions: '76'
        },
        {
          profile: 'https://pbs.twimg.com/profile_images/1367689400520372227/VCUDhRrN_200x200.jpg',
          title: 'Bumalik ka na saken',
          composer: 'Maria Jhingky',
          description: 'The only time you fail is when you fall down and stay down.',
          reactions: '50'
        }
      ]
    }
  }
}
</script>
