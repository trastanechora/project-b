<template>
  <v-card>
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text fab class="transform-none">
        {{ amount }}
      </v-btn>
      <v-btn text class="transform-none">
        {{ validOn }}
      </v-btn>
      <v-btn icon class="transform-none">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn class="transform-none" outlined rounded small>
        Claim
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PromoCard extends Vue {
  /* ------------------------------------
  => Props declaration
  ------------------------------------ */
  @Prop({ required: true, type: String })
  readonly src!: string

  @Prop({ required: true, type: String })
  readonly title!: string

  @Prop({ required: true, type: String })
  readonly amount!: string

  @Prop({ required: true, type: String })
  readonly validOn!: string
}
</script>
<style lang="stylus" scoped>
.transform-none {
  text-transform: none;
  letter-spacing: inherit;
}
</style>
