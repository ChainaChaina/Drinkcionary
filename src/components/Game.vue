<template>
  <div>
    <v-card class="ma-auto" max-width="666" outlined>
      <v-list-item three-line>
        <v-list-item-content>
           <GameRules/>
           <GamePlay/>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn color="amber darken-4" text>No</v-btn>
       
        <v-spacer></v-spacer>
        <v-btn color="orange accent-4" text @click="Play()">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import GameRules from "./GameRules";
import GamePlay from "./GamePlay";




export default {
  data() {
    return {};
  },
  components: {
    GameRules,
    GamePlay
  },
  methods: {
    Play() {
      this.$store.state.play = true; 
      console.log(this.$store.state.play);
        this.$store.dispatch('play')
        this.$store.dispatch('playRules')

    },
  },
  
};
</script>

<style>
</style>