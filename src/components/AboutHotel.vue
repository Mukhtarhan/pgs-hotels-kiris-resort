<template>
  <div class="about-hotel" id="tour">
    <CardServices
      v-for="item in about"
      :key="item.title"
      :title="item.title"
      :img="item.img"
      :content="item.content"
      :content-position="item.contentPosition"
    />
  </div>
</template>

<script setup>
import CardServices from '@/components/ui/CardService.vue';
import imgAbout_1 from '@/assets/img/about-1.png';
import imgAbout_2 from '@/assets/img/about-2.png';
import imgAbout_3 from '@/assets/img/about-3.png';
import imgAbout_4 from '@/assets/img/about-4.png';

const about = [
  {
    img: imgAbout_1,
    title: 'Об отеле',
    content:
      'Отель Pgs Hotels Kiris Resort 5* располагается в живописном пригороде Кемера у подножия могущественных Торосских гор на самом берегу Средиземного моря. Отель предлагает гостям элитные условия для отдыха и широкий спектр развлечений на любой вкус, а также изобилие национальных блюд и десертов по системе «Все включено».',
    contentPosition: 'left',
  },
  {
    img: imgAbout_2,
    title: 'Развлечения',
    content:
      'Отель предлагает гостям: дайвинг на частном пляже, серфинг, полеты на воздушном шаре, большой аквапарк с аттракционами для взрослых и детей, теннис, гольф, дартс, сквош. Гости отеля также могут посещать групповые занятия аэробики, йоги, пилатеса; брать уроки бальных и современных танцев, кулинарии. В амфитеатре отеля ежедневно проводятся юмористические представления, бурные шоу-программы, фольклорные выступления.',
    contentPosition: 'right',
  },
  {
    img: imgAbout_3,
    title: 'Условия для детей',
    content:
      'Для детей в отеле представлены: детский бассейн, игровая площадка, меню в ресторане, анимация детских праздников.',
    contentPosition: 'left',
  },
  {
    img: imgAbout_4,
    title: 'Питание ',
    content:
      'В отеле представлено изобилие национальных блюд и десертов по системе «Все включено».',
    contentPosition: 'right',
  },
];
</script>

<style lang="scss" scoped>
.about-hotel {
  width: 936px;
  margin: 140px auto;
}
</style>