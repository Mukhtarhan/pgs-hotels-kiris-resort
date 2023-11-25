<template>
 <div class="support" id="help">
    <h2>Ответы на частые вопросы</h2>
    <div class="support-content">
        <SupportDetails
        v-for="question in questionList"
        :key="question"
        :question="question" />
    </div>
    <button class="btn">Задать вопрос</button>
 </div> 
</template>

<script setup>
import { ref } from 'vue';
import SupportDetails from './ui/SupportDetails.vue';


const questionList = ref([
    {
        content: 'Есть ли  люкс номера?',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aspernatur illum dolore ad ipsam, iste maxime ea illo distinctio soluta excepturi repellat debitis saepe placeat nihil beatae accusantium enim adipisci aliquam consequuntur? Corrupti quis, blanditiis aspernatur culpa dolor ratione quam.'
    },
    {
        content: 'Возвращается ли оплата за бронь?',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aspernatur illum dolore ad ipsam, iste maxime ea illo distinctio soluta excepturi repellat debitis saepe placeat nihil beatae accusantium enim adipisci aliquam consequuntur? Corrupti quis, blanditiis aspernatur culpa dolor ratione quam.'
    },
    {
        content: 'Есть ли утюг в номере?',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aspernatur illum dolore ad ipsam, iste maxime ea illo distinctio soluta excepturi repellat debitis saepe placeat nihil beatae accusantium enim adipisci aliquam consequuntur? Corrupti quis, blanditiis aspernatur culpa dolor ratione quam.'
    },
    {
        content: 'Есть ли номера с двумя спалнями?',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aspernatur illum dolore ad ipsam, iste maxime ea illo distinctio soluta excepturi repellat debitis saepe placeat nihil beatae accusantium enim adipisci aliquam consequuntur? Corrupti quis, blanditiis aspernatur culpa dolor ratione quam.'
    },
])

</script>

<style lang="scss" scoped>
.support {
    margin-bottom: 160px;
    h2 {
        margin-bottom: 28px;
        font-family: Ubuntu;
        font-size: 32px;
    }
    button {
        margin-top: 32px;
    }
}
</style>