import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: 'aqaqa',
        title: 'Meetup in Lahore',
        imageUrl: 'http://pakistantravelplaces.com/wp-content/uploads/2016/07/ae_pak_lahore_0171.jpg',
        date: new Date(),
        location: 'Arfa center, Lahore',
        description: "It'll be an awesome Meetup!!"
      },
      {
        id: 'aqqa',
        title: 'Meetup in Islamabad',
        imageUrl: 'http://static.thousandwonders.net/Faisal.Mosque.original.9250.jpg',
        date: new Date(),
        location: 'Hotel One, Islamabad',
        description: "It'll be an awesome Meetup!!"
      },
      {
        id: 'aqaqasa',
        title: 'Meetup in Faisalabad',
        imageUrl: 'https://photos.smugmug.com/Photography/Misc/i-XhjJfVf/11/1f6075d0/XL/IMG_5728-XL.jpg',
        date: new Date(),
        location: 'Qbatch, Faisalabad',
        description: "It'll be an awesome Meetup!!"
      }
    ],
    user: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: payload.id
      }
      commit('createMeetup', meetup)
    },
    signUserUp ({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    }
  }
})
