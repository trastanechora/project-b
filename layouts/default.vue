<template>
  <v-app dark>
    <AppBar v-if="$vuetify.breakpoint.width > 600" />
    <MobileAppBar v-else />
    <v-main class="no-padding">
      <v-container class="full-width">
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { SidebarMenuItem } from '~/@types'
import AppBar from '~/components/AppBar.vue'
import Footer from '~/components/Footer.vue'
import MobileAppBar from '~/components/MobileAppBar.vue'

@Component({
  name: 'default',
  components: {
    AppBar,
    Footer,
    MobileAppBar
  }
})
export default class DefaultLayout extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  drawer: boolean = false
  right: boolean = false
  rightDrawer: boolean = false
  title: string = 'AGTRAN'
  items: SidebarMenuItem[] = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    },
    {
      icon: 'mdi-web',
      title: 'News',
      to: '/news'
    }
  ]

  /* ------------------------------------
  => Methods
  ------------------------------------ */
  switchTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }

  switchLanguage(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }
}
</script>
<style lang="stylus" scoped>
.full-width {
  max-width: none;
  padding-top: 0;
}
.no-padding {
  padding: 0 !important;
}
.transform-none {
  text-transform: none;
  letter-spacing: inherit;
}
</style>
