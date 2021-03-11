<template>
  <div>
    <v-col cols="12" md="12">
      <v-textarea
        v-model="content"
        solo
        :hide-details="true"
        label="What do you want to share..."
      />
    </v-col>
    <v-col>
      <v-btn @click="sendPost">Send Content</v-btn>
    </v-col>
    <v-col>
      <Post
        v-for="(post, key) in posts"
        :key="key"
        :text="post.content"
        :nickname="post.author.nickName"
        class="mb-2"
      />
    </v-col>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostService from '@/services/PostService';
import Post from '@/blocks/Post.vue';

@Component({
  name: 'PostPage',
  components: {
    Post,
  },
})
export default class PostPage extends Vue {
  content = '';
  posts = [];

  async mounted() {
    await this.getPosts();
  }
  async getPosts() {
    try {
      const {
        data: { data },
      } = await PostService.posts();
      this.posts = data;
    } catch (e) {
      /* suppress error */
    }
  }
  async sendPost() {
    try {
      await PostService.post({ content: this.content });
    } catch (e) {
      /* suppress error */
    }
  }
}
</script>
