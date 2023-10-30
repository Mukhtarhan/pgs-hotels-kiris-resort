<template>
    <Header />
    <div class="container">
      <MainBlock />
      <Advantages />
      <AboutHotel />
      <Contacts />
    </div>
    <Footer />
  </template>
  
  <script setup>
  import Contacts from '@/components/Contacts.vue';
  import AboutHotel from '@/components/AboutHotel.vue';
  import Advantages from '@/components/Advantages.vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import MainBlock from '../components/MainBlock.vue';
  </script>
 