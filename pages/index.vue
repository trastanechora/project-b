<template>
  <v-layout justify-center row wrap>
    <v-parallax
      class="banner"
      src="https://lajollamom.com/wp-content/uploads/2016/01/how-to-save-money-on-rental-cars.jpg"
    ></v-parallax>
    <!-- TRIP FORM Section -->
    <TripInputBox />
    <!-- ANNOUNCEMENT Section -->
    <v-flex md12 sm12 xs12 mt-3>
      <v-layout justify-center row wrap>
        <v-flex xl6 md8 sm10 xs10 class="announcer">
          <h2>{{ languageSetting.announcements }}</h2>
          <hr />
          <v-layout class="slider-content">
            <v-flex
              v-for="(item, i) in announcements"
              :key="i"
              ma-3
              class="slider-item"
            >
              <AnnouncementCard
                :color="item.color"
                :src="item.src"
                :title="item.title"
                :description="item.description"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- PROMO Section -->
    <v-flex md12 sm12 xs12 mt-3>
      <v-layout justify-center row wrap>
        <v-flex xl6 md8 sm10 xs10 class="announcer">
          <h2>{{ languageSetting.promoAndDeals }}</h2>
          <hr />
          <v-layout class="slider-content">
            <v-flex v-for="(item, i) in deals" :key="i" lg4 md12 sm12 ma-3>
              <PromoCard
                :src="item.src"
                :title="item.title"
                :amount="item.amount"
                :valid-on="item.validOn"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TripInputBox from '~/components/TripInputBox.vue'
import AnnouncementCard from '~/components/AnnouncementCard.vue'
import PromoCard from '~/components/PromoCard.vue'
import { NewsItem, PromoItem } from '~/@types'

@Component({
  components: {
    TripInputBox,
    AnnouncementCard,
    PromoCard
  }
})
export default class Home extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  announcements: NewsItem[] = [
    {
      color: '#1F7087',
      src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      title: 'Download MySejahtera',
      description:
        'As our new policy takes place, MySejahtera apps is mandatory. Read more!'
    },
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'New Fresh Interface',
      description:
        'As our new interface get a new paints, MySejahtera apps is getting better. Read more!'
    },
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'Suitable for All Devices',
      description:
        'As our new innovation, MySejahtera apps is fit great in all of your devices. Read more!'
    }
  ]

  deals: PromoItem[] = [
    {
      color: '#1F7087',
      src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      title: 'Download App Get 50% off',
      amount: '-50%',
      validOn: 'October 2020'
    },
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'Invite Friends get Refferals',
      amount: '-25%',
      validOn: 'October 2020'
    },
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'One Time Deal Prize',
      amount: '-70%',
      validOn: 'November 2020'
    },
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'Take Survey get 10% off',
      amount: '-10%',
      validOn: 'December 2020'
    },
    {
      color: '#1F7087',
      src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      title: 'New Year Free Ride!',
      amount: '-100%',
      validOn: 'January 2021'
    }
  ]

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get languageSetting(): boolean {
    return this.$store.state.ui.languageSetting.homeContent
  }
}
</script>

<style lang="stylus" scoped>
.transform-none {
  text-transform: none;
  letter-spacing: inherit;
}
.banner {
  background-image: url(https://picsum.photos/1920/1080?random)
  background-size: cover;
  width: 100%
  height: 600px;
}
.slider-content {
  overflow: auto;
  .slider-item {
    min-width: 400px;
    >>> .v-card__subtitle {
      min-height: 75px;
    }
  }
}
</style>
