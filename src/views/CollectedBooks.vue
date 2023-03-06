<template>
  <v-container fluid class="constrain">
    <v-row dense justify="center">
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="auto"
      >
        <v-card width="250px" @click="this.expand = !this.expand">
          <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
          >
            <!--            <v-card-item>-->

            <!--              <v-card-title class="text-white" v-text="card.title"></v-card-title>-->
            <!--            </v-card-item>-->
            <div>
              <v-btn
                flat
                icon
                rounded
                size="large"
                variant="text"
                @click="card.bookmark = !card.bookmark"
              >
                <v-icon v-if="card.bookmark">mdi-bookmark</v-icon>
                <v-icon v-if="!card.bookmark">mdi-bookmark-outline</v-icon>
              </v-btn>
              <!--              <v-btn flat variant="text">Book Title</v-btn>-->
              <span class="text-white font-weight-bold">Book Title</span>
            </div>

            <v-card-text>
              <div class="text-white">Book Title</div>
              <div class="text-white">Book Title</div>
              <div class="text-white">Book Title</div>
              <div class="text-white">Book Title</div>
            </v-card-text>
          </v-img>
          <v-expand-transition>
            <div v-if="expand">
              <div class="py-2">
                <v-slider
                  v-model="time"
                  :max="6"
                  :step="1"
                  :ticks="labels"
                  class="mx-4"
                  color="primary"
                  density="compact"
                  hide-details
                  show-ticks="always"
                  thumb-size="10"
                ></v-slider>
              </div>

              <v-list class="bg-transparent">
                <v-list-item
                  v-for="item in forecast"
                  :key="item.day"
                  :title="item.day"
                  :append-icon="item.icon"
                  :subtitle="item.temp"
                >
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CollectedBooks",
  data() {
    return {
      cards: [
        { id: 1, title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', bookmark: true },
        { id: 2, title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', bookmark: false },
        { id: 3, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: false },
        { id: 4, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: true},
      ],
      expand: false,
    }
  },
  methods: () => {

  },
}
</script>

<style scoped>
.constrain {
  max-width: 800px;
}

</style>
