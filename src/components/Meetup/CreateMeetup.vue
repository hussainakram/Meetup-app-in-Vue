<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-md3>
        <h4 class="success--text">Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <form @submit.prevent="onCreatemeetup">
      <v-layout row>
        <v-flex xs12 sm6 offset-md3>
          <v-text-field
            name="title"
            label="Title"
            id="title"
            v-model="title"
            required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-md3>
          <v-text-field
            name="location"
            label="Location"
            id="location"
            v-model="location"
            required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-md3>
          <v-text-field
            name="imageUrl"
            label="Image URL"
            id="image-url"
            v-model="imageUrl"
            required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-md3>
          <img :src="imageUrl" v-model="imageUrl" height="300px">
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-md3>
          <v-text-field
            name="description"
            label="Description"
            id="description"
            v-model="description"
            multi-line
            required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-md3>
          <v-btn class="primary" :disabled= "!formIsValid" type="submit">Create Meetup</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
               this.location !== '' &&
               this.description !== '' &&
               this.imageUrl !== ''
      }
    },
    methods: {
      onCreatemeetup () {
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          id: 'qaqaqawe',
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$store.push('/meetups')
      }
    }
  }
</script>
