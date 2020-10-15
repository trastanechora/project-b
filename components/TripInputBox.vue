<template>
  <v-flex xs12 sm8 md6>
    <v-card class="main-box">
      <v-card-text>
        <!-- Destination -->
        <v-layout row>
          <v-flex xl6 md6 xs12>
            <v-text-field
              class="mx-2"
              :label="languageSetting.arrivalLabel"
              :value="destination"
              :hint="languageSetting.arrivalHint"
              :placeholder="languageSetting.arrivalPlaceholder"
              outlined
            ></v-text-field>
          </v-flex>
          <v-flex xl3 md3 xs12>
            <v-menu
              v-model="startDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  :label="languageSetting.arrivalDateLabel"
                  :hint="languageSetting.arrivalDateHint"
                  :placeholder="languageSetting.arrivalDatePlaceholder"
                  appfinish-icon="mdi-calfinishar"
                  readonly
                  outlined
                  class="mx-2"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                @input="startDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xl3 md3 xs12>
            <v-menu
              ref="startTime"
              v-model="startTimeMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startTime"
                  :label="languageSetting.arrivalTimeLabel"
                  appfinish-icon="mdi-clock-time-four-outline"
                  :hint="languageSetting.arrivalTimeHint"
                  :placeholder="languageSetting.arrivalTimePlaceholder"
                  readonly
                  outlined
                  class="mx-2"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="startTimeMenu"
                v-model="startTime"
                full-width
                @click:minute="$refs.startTime.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <!-- Departure -->
        <v-layout row>
          <v-flex xl6 md6 xs12>
            <v-text-field
              class="mx-2"
              :label="languageSetting.departureLabel"
              value=""
              :hint="languageSetting.departureHint"
              :placeholder="languageSetting.departureDatePlaceholder"
              outlined
            ></v-text-field>
          </v-flex>
          <v-flex xl3 md3 xs12>
            <v-menu
              v-model="finishDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="finishDate"
                  :label="languageSetting.departureDateLabel"
                  :hint="languageSetting.departureDateHint"
                  :placeholder="languageSetting.departureDatePlaceholder"
                  appfinish-icon="mdi-calfinishar"
                  readonly
                  outlined
                  class="mx-2"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="finishDate"
                @input="finishDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xl3 md3 xs12>
            <v-menu
              ref="finishTime"
              v-model="finishTimeMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="finishTime"
                  :label="languageSetting.departureTimeLabel"
                  appfinish-icon="mdi-clock-time-four-outline"
                  :hint="languageSetting.departureTimeHint"
                  :placeholder="languageSetting.departureTimePlaceholder"
                  readonly
                  outlined
                  class="mx-2"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="finishTimeMenu"
                v-model="finishTime"
                full-width
                @click:minute="$refs.finishTime.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-layout v-if="isCoupon" row>
          <v-flex xs12>
            <v-text-field
              class="mx-2"
              :label="languageSetting.couponLabel"
              :value="destination"
              :hint="languageSetting.couponHint"
              :placeholder="languageSetting.couponPlaceholder"
              outlined
            ></v-text-field>
          </v-flex>
        </v-layout>
        <div>
          <span class="coupon-revealer"
            ><small class="coupon-activator" @click="isCoupon = !isCoupon">{{
              isCoupon
                ? languageSetting.couponButtonActive
                : languageSetting.couponButtonInactive
            }}</small></span
          >
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn class="transform-none book-button" color="primary" nuxt>
          {{ languageSetting.bookButton }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class TripInputBox extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  isCoupon: boolean = false;
  destination: string | null = null;
  startDate: string | null = null;
  startDateMenu: boolean = false;
  startTime: string | null = null;
  startTimeMenu: boolean = false;
  departure: string | null = null;
  finishDate: string | null = null;
  finishDateMenu: boolean = false;
  finishTime: string | null = null;
  finishTimeMenu: boolean = false;

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get languageSetting(): boolean {
    return this.$store.state.ui.languageSetting.tripBox;
  }
}
</script>
<style lang="stylus" scoped>
.transform-none {
  text-transform: none;
  letter-spacing: inherit;
}
.main-box {
  margin: -400px 0 0 0;
  padding: 10px;
  opacity: 0.92;
  .v-card__text {
    padding-bottom: 0;
  }
  >>> .coupon-revealer {
    text-align: right;
    display: block;
    .coupon-activator:hover {
      color: red;
      opacity: 0.6;
      transition: 0.3s;
      cursor: pointer;
    }
  }
}
.book-button {
  width: 100%;
}
</style>
