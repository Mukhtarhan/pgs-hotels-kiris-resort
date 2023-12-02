<template>
  <main>
    <div class="container">
      <MainBlock />
      <Advantages />
      <AboutHotel />
      <Contacts />
      <Comment />
      <Support />
    </div>
    <div class="sliders">
      <HotelCard />
      <News />
    </div>
  </main>
</template>
  
  <script setup>
import Support from '@/components/Support.vue';
import Contacts from '@/components/Contacts.vue';
import AboutHotel from '@/components/AboutHotel.vue';
import Advantages from '@/components/Advantages.vue';
import MainBlock from '../components/MainBlock.vue';
import Comment from '@/components/Comment.vue';
import HotelCard from '@/components/HotelCard.vue';
import News from '@/components/News.vue';
</script>
 