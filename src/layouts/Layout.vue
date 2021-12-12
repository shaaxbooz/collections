<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center"> To'plamlar ustida amallar </q-toolbar-title>
      </q-toolbar>
    </q-header>

		<q-footer>
			<q-tabs>
        <q-route-tab
					v-for="link in links"
					:key="link.title"
					:icon="link.icon"
					:label="link.title"
					:to="link.link"
					exact
				/>
      </q-tabs>
		</q-footer>

    <q-drawer
      show-if-above
      bordered
      :width="250"
      :breakpoint="794"
      class="bg-primary">
      <q-list dark>
        <q-item-label header> Menu </q-item-label>

        <Links
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Links from "components/Links.vue";

const links = [
	{
    title: "Solve",
    icon: "table_view",
    link: "/",
  },
	{
    title: "Info",
    icon: "school",
    link: "/info",
  },
];

import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",

  components: {
    Links,
  },

  setup() {
    return {
      links: links
    }
  },
})
</script>


<style lang="scss" scoped>
.q-footer {
	@media (min-width: 768px) {
		display: none;
	}
}


</style>
