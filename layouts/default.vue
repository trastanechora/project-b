<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn text @click.stop="rightDrawer = !rightDrawer">
        My Bookings
      </v-btn>
      <v-btn text @click.stop="rightDrawer = !rightDrawer">
        Services
      </v-btn>
      <v-btn text @click.stop="rightDrawer = !rightDrawer">
        About Us
      </v-btn>
      <v-btn text @click.stop="rightDrawer = !rightDrawer">
        Contact
      </v-btn>
      <v-chip class="red lighten-1 ma-2" text-color="white">
        <v-avatar left>
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        Register / Login
      </v-chip>
    </v-app-bar>
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
    <v-footer padless>
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          Copyright © 2019 Agtran Travel Sdn. Bhd. <br />
          MOTAC License No. (9005) | Registration No. (1246969-V)
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { SidebarMenuItem } from '~/@types'

@Component({
  name: 'default'
})
export default class DefaultLayout extends Vue {
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
}
</script>
<style lang="stylus" scoped>
.full-width {
  max-width: none;
}
.no-padding {
  padding: 0 !important;
}
</style>
