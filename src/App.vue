<template>
  <v-app >
    <v-main class="grey lighten-4 pt-5 pl-5"  >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
