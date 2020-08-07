<template>
  <div v-if="$store.state.play ==true">
    <div class="overline mb-4">DRINKCIONARY</div>

    <!-- <v-list-item-subtitle >quem joga</v-list-item-subtitle> -->
    <v-list-item-title class="headline mb-1">{{$store.state.PalavraDaVez}} </v-list-item-title>
    <v-list-item-subtitle>{{$store.state.RegraDaVez}}</v-list-item-subtitle>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>