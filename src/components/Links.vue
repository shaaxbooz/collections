<template>
  <q-item clickable v-ripple :to="link" exact class="text-grey">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
	</q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Links',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.q-router-link--exact-active {
	color: #fff  !important;
}
</style>
