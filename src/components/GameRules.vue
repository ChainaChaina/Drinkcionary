<template>
  <div v-if="$store.state.play ==false">
    <div class="overline mb-4">DRINKCIONARY</div>

    <v-list-item-title class="headline mb-1">Rules</v-list-item-title>
    <v-list-item-subtitle>One hint, one chance</v-list-item-subtitle>
    <v-list-item-subtitle>team with less trys, wins.</v-list-item-subtitle>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>