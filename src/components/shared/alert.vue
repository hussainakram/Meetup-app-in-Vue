<template>
  <div>
    <v-alert error dismissible @input="onClose" :value="true">
      {{ text }}
    </v-alert>
  </div>
</template>
<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>
