<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="400">
    <v-card-title>
      <v-icon large left>
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{ text }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ nickname }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1" :color="iconColor">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">{{ likesCount }}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Post',
})
export default class Post extends Vue {
  @Prop({ default: '' })
  text?: string;

  @Prop({ default: '' })
  nickname?: string;

  @Prop({ default: '' })
  postId?: string;

  @Prop({ default: 0 })
  likesCount?: number;

  @Prop({ default: false })
  isLiked?: boolean;

  get iconColor(): string {
    return this.isLiked ? 'red' : '';
  }
}
</script>
