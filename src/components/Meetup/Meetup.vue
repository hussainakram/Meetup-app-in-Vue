<template>
  <v-container>
    <v-layout></v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.id }}</h6>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
            ></v-card-media>
            <v-card-text>
              <div class="info--text">{{ meetup.date }}</div>
              Smooth animations help make a UI feel great. Using Vue's transition system and re-usable functional components, you can easily control the motion of your application.
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
        </v-card>
      </v-flex>
  </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
