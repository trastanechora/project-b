<template>
  <v-card :color="color" dark>
    <div class="d-flex flex-no-wrap">
      <v-layout wrap>
        <v-flex xs4>
          <v-avatar class="ma-3" size="100" tile>
            <v-img :src="src"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex xs8>
          <v-card-title v-text="title"></v-card-title>
        </v-flex>
        <v-flex xs12>
          <v-card-subtitle v-text="description"></v-card-subtitle>
        </v-flex>

        <v-card-actions>
          <v-btn class="transform-none ml-2 mb-2" outlined rounded small>
            Read More
          </v-btn>
        </v-card-actions>
      </v-layout>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class AnnouncementCard extends Vue {
  /* ------------------------------------
  => Props declaration
  ------------------------------------ */
  @Prop({ required: true, type: String })
  readonly color!: string

  @Prop({ required: true, type: String })
  readonly src!: string

  @Prop({ required: true, type: String })
  readonly title!: string

  @Prop({ required: true, type: String })
  readonly description!: string
}
</script>
<style lang="stylus" scoped>
.transform-none {
  text-transform: none;
  letter-spacing: inherit;
}
</style>
