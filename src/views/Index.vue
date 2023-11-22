<template>
    <main class="container">
      <MainBlock />
      <Advantages />
      <AboutHotel />
      <Contacts />
      <Comment />
    </main>
  </template>
  
  <script setup>
  import Contacts from '@/components/Contacts.vue';
  import AboutHotel from '@/components/AboutHotel.vue';
  import Advantages from '@/components/Advantages.vue';
  import MainBlock from '../components/MainBlock.vue';
  import Comment from '@/components/Comment.vue';
  </script>
 