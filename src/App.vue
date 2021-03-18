<template>
  <v-app id="inspire">
    <TheHeader />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols="5" sm="5">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/blocks/Layout/TheHeader.vue';

@Component({
  name: 'App',
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>
