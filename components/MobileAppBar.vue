<template>
  <v-bottom-navigation v-model="activeItem" app fixed grow color="primary">
    <v-btn>
      <span class="menu-title">Home</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn>
      <span class="menu-title">Menu</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-menu
      v-model="menuSetting"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          small
          fab
          class="transform-none"
          v-bind="attrs"
          v-on="on"
        >
          <span class="menu-title">Setting</span>
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon>mdi-web</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{
                languageSetting.selectLang
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                languageSetting.comingLang
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item link @click="switchLanguage('EN')">
            <v-list-item-title
              v-text="languageSetting.english"
            ></v-list-item-title>
          </v-list-item>
          <v-list-item link @click="switchLanguage('ID')">
            <v-list-item-title
              v-text="languageSetting.bahasa"
            ></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-menu
      v-model="menuAccount"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          small
          fab
          class="transform-none"
          v-bind="attrs"
          v-on="on"
        >
          <span class="menu-title">Account</span>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Mae</v-list-item-title>
              <v-list-item-subtitle>Travel Addict</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menuAccount = false">
            Cancel
          </v-btn>
          <v-btn color="primary" text @click="menuAccount = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MobileAppBar extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  menuSetting: boolean = false
  menuAccount: boolean = false
  activeItem: string = 'top'
  message: boolean = false
  hints: boolean = false
  fav: boolean = true

  /* ------------------------------------
  => Methods
  ------------------------------------ */
  switchTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }

  switchLanguage(params: string): void {
    this.$store.dispatch('ui/changeLanguage', params)
  }

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get languageSetting(): boolean {
    return this.$store.state.ui.languageSetting.header
  }
}
</script>
<style lang="stylus" scoped>
.menu-title {
  font-size: 10px;
  font-weight: 400;
  font-family: unset;
  margin-top: 2px;
  text-transform: none;
  letter-spacing: inherit;
}
</style>
