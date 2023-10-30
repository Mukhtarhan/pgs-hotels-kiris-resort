<template>
    <Header />
    <main class="container">
      <MainBlock />
      <Advantages />
      <AboutHotel />
      <Contacts />
    </main>
    <Footer />
  </template>
  
  <script setup>
  import Contacts from '@/components/Contacts.vue';
  import AboutHotel from '@/components/AboutHotel.vue';
  import Advantages from '@/components/Advantages.vue';
  import MainBlock from '../components/MainBlock.vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  </script>
 