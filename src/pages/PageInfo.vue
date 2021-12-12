<template>
  <q-page padding>
    <div class="info-text" v-for="texts in text">
      <h5 class="text__title">{{texts.title}}</h5>
      <p class="text__subtitle">{{texts.subtitle}}</p>
    </div>


    <p></p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageInfo',
  methods:{

  },

  data(){
    return{
      text: [
        {
          title: "To'plam tushunchasi haqida:",
          subtitle: "To‘plamlar nazariyasiga fan sifatida XIX asrning oxirida matematikani standartlashtirish bo‘yicha o‘z dasturini taklif etgan Kantor tomonidan asos solingan deb hisoblansada, to‘plamlar bilan Kantordan oldinroq Bolsano shug‘ullangan.To'plamni tashkil etuvchilar shu to'plamning elementlari deb ataladi.To'plamlar nazariyasida to'plamning elementlari bir biridan farqli deb hisoblanadi, ya ni muayyan bir to'plamning elementlari takrorlanmaydi.To'plamni tashkil etuvchi elementlar soni chekli yoki cheksiz bo'lishi mumkin.To'plamlarni belgilashda, odatda, lotin yoki grek alifbosining bosh harflari, uning elementlari uchun esa alifboning kichik harflari qo'llaniladi.To'plamni tashkil etuvchi elementlar figurali qavslar orasiga olinib ifodalanishi mumkin."
        },
        {
          title: "To'plamlarning birlashmasi:",
          subtitle: 'Agar Z to’plam X va Y to’plamlarning faqatgina bir martadan\n' +
            'ishtirok etgan elementlaridan tashkil topgan bo’lsa, Z to’plamga X va Y\n' +
            'to’plamlarning birlashmasi (yig’indisi) deyiladi va Z =  X U Y ko’rinishida\n' +
            'belgilanadi.'
        },
        {
          title: "To'plamlarning kesishmasi:",
          subtitle: 'Ikkita X va Y to’plamlarning kesishmasi (ko’paytmasi) deb,\n' +
            'shunday Z to’plamga aytiladiki, uning har bir elementi X to’plamga ham, Y\n' +
            'to’plamga ham tegishli bo’ladi va Z = X ∩ Y ko’rinishda belgilanadi.'
        },
        {
          title: "To'plamlarning ayirmasi:",
          subtitle: 'X to’plamdan Y to’plamning farqi (ayirmasi) deb, shunday Z\n' +
            'to’plamga aytiladiki, uning har bir elementi X ga tegishli bo’lsa, Y ga tegishli\n' +
            'bo’lmaydi, ya’ni Z = X /Y .'
        },
        {
          title: "To'plamning quvvati:",
          subtitle: 'To’plam elementlarining soni\n' +
            'tushunchasining ixtiyoriy to’plamlar (chekli yoki cheksiz) uchun\n' +
            'umumlashtirilganidir. To’plamning quvvati berilgan to’plamga ekvivalent\n' +
            'bo’lgan barcha to’plamlarga, ya’ni elementlari berilgan to’plamning elementlari\n' +
            'bilan o’zaro bir qiymatli moslikda bo’la oladigan barcha to’plamlarga umumiy\n' +
            'bo’lgan narsa sifatida aniqlanadi.'
        }
      ]
    }

  }
})
</script>

<style scoped lang="scss">

.info-text {
  width: 500px;

  @media (max-width: 768px) {
    text-align: justify-all;
    width: 100%;

  }

  .text__title{
    font-size: 24px;
    font-weight: bold;
  }

  .text__subtitle {
    font-size: 18px;
  }

}

</style>
