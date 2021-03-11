<template>
  <v-col class="mb-5" cols="12">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row>
          <v-text-field
            v-model="signInData.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
          />
        </v-row>
        <v-row>
          <v-text-field
            v-model="signInData.password"
            :append-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="isPasswordVisible ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="isPasswordVisible = !isPasswordVisible"
          />
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="setCredentials" :disabled="!valid">Login</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { SignInData, User } from '@/interfaces/UserInterface';
import { regEmail } from '@/helpers/regEmail';

@Component({ name: 'Auth' })
export default class Auth extends Vue {
  @State private user!: User;
  @Mutation private setUser!: (user: object) => void;
  @Action private signIn!: (credentials: SignInData) => void;
  @Mutation private logoutSuccess!: () => void;

  private signInData: SignInData = {
    email: 'test@test.com',
    password: 'Test+123456',
  };
  valid = true;
  isPasswordVisible = false;
  rules = {
    required: (value: string) => !!value || 'Required.',
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
    email: (value: string) => {
      return regEmail.test(value) || 'Invalid e-mail.';
    },
  };

  async setCredentials() {
    this.signIn(this.signInData);
  }
}
</script>
