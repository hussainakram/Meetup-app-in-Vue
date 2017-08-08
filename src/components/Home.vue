<template>
  <v-container>
    <v-layout row wrap mb-2>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large route to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large route to="/meetups/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <v-carousel icon="stop">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
            style="cursor: pointer;">
              <div class="title">
                {{ meetup.title }}
              </div>
            </v-carousel-item>
        </v-carousel>
        <v-flex xs12 class="text-xs-center">
          <p>Join our Meetups!</p>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
<style type="text/css">
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 12px;
    font-size: 2em;
  }
</style>
