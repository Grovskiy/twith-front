<template>
  <v-app-bar app color="white" flat>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    />
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="link in links" :key="link" :to="{ name: link }">
        {{ link }}
      </v-tab>
    </v-tabs>
    <button @click="signOut">
      <v-icon color="darken-2">
        mdi-exit-to-app
      </v-icon>
    </button>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({ name: 'TheHeader' })
export default class TheHeader extends Vue {
  @Action public signOut!: () => void;
  links = ['Home', 'PostPage', 'Auth'];
}
</script>
