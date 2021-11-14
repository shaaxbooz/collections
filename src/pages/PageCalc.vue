<template>
  <q-page padding>
    <div class="calc">
      <div class="container">
        <div class="left">
          <!--  Birinchi To'plamga element kiritish -->
          <div class="calc__input">
            <h5>Birinchi to'plam: A={</h5>
            <h5>{{elements_1 || 'Ø'}}</h5>
            <h5>}</h5>
            <input type="text"  v-model="element_1">
            <div class="create__delete">
              <button v-on:click="element__delete('1-')">-</button>
              <button v-on:click="element__create('1+')">+</button>
            </div>
          </div>
          <!--  Ikkinchi To'plamga element kiritish -->
          <div class="calc__input">
            <h5>Ikkinchi to'plam: B={</h5>
            <h5>{{elements_2 || 'Ø'}}</h5>
            <h5>}</h5>
            <input type="text"  v-model="element_2">
            <div class="create__delete">
              <button v-on:click="element__delete('2-')">-</button>
              <button v-on:click="element__create('2+')">+</button>
            </div>
          </div>
          <div class="calc__actions">
            <button v-on:click="birlashma__amali()">A U B</button>
            <button v-on:click="kesishma__amali">A ∩ B</button>
            <button v-on:click="ayirma__amali('1')">A / B</button>
            <button v-on:click="ayirma__amali('2')">B / A</button>
            <button v-on:click="quvvat__amali('1')">n(A)</button>
            <button v-on:click="quvvat__amali('2')">n(B)</button>
          </div>
          <div class="calc__result">
            <h5 v-for="result in results">
              {{ result }}
            </h5>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageTodo',
  methods: {
    quvvat__amali(key){
      if(key==='1'){
        if(this.firstCollection.length > 0){
          this.res_quvvat = '';
          this.res_quvvat += 'Quvvati : n( A )=' + this.firstCollection.length;
          this.results.reverse();
          this.results.push(this.res_quvvat);
          this.results.reverse();
        }
      }

      if(key==='2'){
        if(this.secondCollection.length > 0){
          this.res_quvvat = '';
          this.res_quvvat += 'Quvvati : n( B )=' + this.secondCollection.length;
          this.results.reverse();
          this.results.push(this.res_quvvat);
          this.results.reverse();
        }
      }
    },


    ayirma__amali(key){
      if(key==='1'){
        this.ayirma = [];
        this.kesishma = [];

        for(let i = 0; i < this.firstCollection.length; i++) {
          for( let j = 0; j < this.secondCollection.length; j++) {
            if (this.firstCollection[i]===this.secondCollection[j]){
              this.kesishma.push(this.firstCollection[i]);
            }
          }
        }

        this.kesishma.sort((a,b)=> a > b ? 1:-1)


        let k = 0;

        for(let i = 0; i < this.firstCollection.length; i++) {
          k = 0;
          for (let j = 0; j < this.kesishma.length; j++) {

            if (this.firstCollection[i] !== this.kesishma[j]) {
              k++;
            }

          }

          if (k === this.kesishma.length) {
            this.ayirma.push(this.firstCollection[i]);
          }
        }





        if(this.firstCollection.length === this.kesishma.length){
          this.ayirma = [' Ø ']
        }

        if(this.kesishma.length===0){
          this.ayirma =[]
            for(let i = 0; i < this.firstCollection.length; i++) {
              this.ayirma.push(this.firstCollection[i]);
            }

            for(let n = 0; n < this.secondCollection.length; n++) {
              this.ayirma.push(this.secondCollection[n]);
            }
          }

        this.ayirma.sort((a, b) => a > b ? 1 : -1);

        this.res_ayirma = ''

        this.res_ayirma += 'Ayirmasi : A / B={'

        for(let i = 0; i < this.ayirma.length ; i++){
          if(i===0){
            this.res_ayirma +=  this.ayirma[i];
          }
          else {
            this.res_ayirma += ', ' + this.ayirma[i];
          }
        }

        this.res_ayirma += '}'
        this.results.reverse();
        this.results.push(this.res_ayirma)
        this.results.reverse();
      }

      if(key==='2'){
        this.ayirma = [];
        this.kesishma = [];

        for(let i = 0; i < this.firstCollection.length; i++) {
          for( let j = 0; j < this.secondCollection.length; j++) {
            if (this.firstCollection[i]===this.secondCollection[j]){
              this.kesishma.push(this.firstCollection[i]);
            }
          }
        }

        this.kesishma.sort((a,b)=> a > b ? 1:-1)


        let k = 0;

        for(let i = 0; i < this.secondCollection.length; i++) {
          k = 0;
          for (let j = 0; j < this.kesishma.length; j++) {

            if (this.secondCollection[i] !== this.kesishma[j]) {
              k++;
            }

          }

          if (k === this.kesishma.length) {
            this.ayirma.push(this.secondCollection[i]);
          }
        }

        if(this.secondCollection.length === this.kesishma.length){
          this.ayirma = [' Ø ']
        }

        if(this.kesishma.length===0){
          this.ayirma =[]
          for(let i = 0; i < this.firstCollection.length; i++) {
            this.ayirma.push(this.firstCollection[i]);
          }

          for(let n = 0; n < this.secondCollection.length; n++) {
            this.ayirma.push(this.secondCollection[n]);
          }
        }

        this.ayirma.sort((a, b) => a > b ? 1 : -1);

        this.res_ayirma = ''

        this.res_ayirma += 'Ayirmasi : B / A={'

        for(let i = 0; i < this.ayirma.length ; i++){
          if(i===0){
            this.res_ayirma +=  this.ayirma[i];
          }
          else {
            this.res_ayirma += ', ' + this.ayirma[i];
          }
        }

        this.res_ayirma += '}'
        this.results.reverse();
        this.results.push(this.res_ayirma)
        this.results.reverse();
      }
    },




    kesishma__amali(){
      this.kesishma = [];

      for(let i = 0; i < this.firstCollection.length; i++) {
        for( let j = 0; j < this.secondCollection.length; j++) {
          if (this.firstCollection[i]===this.secondCollection[j]){
            this.kesishma.push(this.firstCollection[i]);
          }
        }
      }

      this.kesishma.sort((a,b)=> a > b ? 1:-1)


      this.res_kesishma = ''

      this.res_kesishma += 'Kesishmasi : A ∩ B={'

      for(let i = 0; i < this.kesishma.length ; i++){
        if(i===0){
          this.res_kesishma += this.kesishma[i];
        }
        else {
          this.res_kesishma += ', ' + this.kesishma[i];
        }
      }

      this.res_kesishma += '}'

      this.results.reverse();
      this.results.push(this.res_kesishma)
      this.results.reverse();
    },

    birlashma__amali(){
      this.birlashma = [];


      for(let i = 0; i < this.firstCollection.length; i++) {
        this.birlashma.push(this.firstCollection[i]);
      }

      for(let n = 0; n < this.secondCollection.length; n++) {
        this.birlashma.push(this.secondCollection[n]);

        let k = 0;

          for(let i = 0; i < this.birlashma.length; i++) {
            k = 0;
            for (let j = 0; j < this.birlashma.length; j++) {

              if (this.birlashma[i] === this.birlashma[j]) {
                k++;
              }

              if (k === 2) {
                this.birlashma.pop();
              }
            }
          }
      }

      this.birlashma.sort((a,b)=> a > b ? 1:-1)


      this.res_birlashma = ''

      this.res_birlashma += 'Birlashmasi: A U B={'

      for(let i = 0; i < this.birlashma.length ; i++){
        if(i===0){
          this.res_birlashma += this.birlashma[i];
        }
        else {
          this.res_birlashma += ', ' + this.birlashma[i];
        }
      }

      this.res_birlashma += '}'

      this.results.reverse();
      this.results.push(this.res_birlashma)
      this.results.reverse();
    },

    element__delete (key){
      if(key === '1-'){
        this.firstCollection = [];
        this.elements_1 = '';
        this.element_1 = '';
      }
      else if(key === '2-'){
        this.secondCollection = [];
        this.elements_2 = '';
        this.element_2 = '';
      }
    },

    element__create (key){

      if (key === '1+') {
        if (this.element_1===''){
        }
        else {
          this.firstCollection.push(this.element_1);

          let k = 0;

          for(let i = 0; i < this.firstCollection.length; i++) {
            k = 0;
            for(let j = 0; j < this.firstCollection.length; j++) {

              if(this.firstCollection[i]===this.firstCollection[j]){
                k++;
              }
              if(k===2) {
                this.firstCollection.pop();
              }
            }
          }


          if (this.firstCollection.length===1) {
            this.elements_1 += this.element_1;
          }
          else {
            this.elements_1 += ', ' + this.element_1;
          }
        }
        this.element_1 = ''
      }



      else if (key === '2+') {
        if(this.element_2===''){
        }
        else {
          this.secondCollection.push(this.element_2);

          let k = 0;

          for(let i = 0; i < this.secondCollection.length; i++) {
            k = 0;
            for(let j = 0; j < this.secondCollection.length; j++) {

              if(this.secondCollection[i]===this.secondCollection[j]){
                k++;
              }
              if(k===2) {
                this.secondCollection.pop();
              }

            }
          }

          if(this.secondCollection.length===1){
            this.elements_2 += this.element_2;
          }
          else {
            this.elements_2 += ', ' + this.element_2;
          }
        }
        this.element_2 = ''
      }
    },
  },
  data() {
    return{
      firstCollection: [],
      secondCollection: [],
      elements_1: '',
      elements_2: '',
      element_1 : '',
      element_2 : '',
      results : [],
      birlashma: [],
      res_birlashma: '',
      kesishma: [],
      res_kesishma: '',
      ayirma: [],
      res_ayirma: '',
      res_quvvat: '',
      quvvat:[]
    }
  }
})
</script>

<style lang="scss" scoped>

  .calc {

    .calc__input {
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        width: 30px;
        height: 25px;
        font-size: 16px;
        padding-left: 8px;
      }

      .create__delete {
        text-align: center;
        display: flex;
        gap: 5px;

        button {
          font-size: 18px;
          padding: 0 8px;
        }
      }
    }

    .calc__actions {
      display: flex;
      flex-direction: row;
      gap: 15px;

      button {
        font-size: 18px;
        padding: 3px 8px;
      }
    }
  }

  .calc__result {
    height: 375px !important;
    overflow: hidden;
  }

</style>
