import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    play: false,
    pool: ['Cachorro', 'Camelo', 'Girafa', 'Lobo','Mesa','Cadela','Colher','Gay','Tinta','Baleia','Herói','Algemas','Dinheiro','Teclado','Cachoeira','Agulha','Arco','Elfo','Música','Demônio','Satã','Peso','Armário','Carta','Chave'],
    PalavraDaVez: '',
    poolRules: ['Vocês bebem de qualquer forma', 'Acerte de primeira ou beba', 'Acerte de segunda ou beba', 'Acerte de terceira ou beba','Acerte com 4 chances ou beba', 'acertar de primeira faz o resto do grupo beber','a partir da terceira dica, você bebe uma por dica'],
    RegraDaVez: '',
  },
  mutations: {

  },
  actions: {
    play() {
      var num = Math.floor(Math.random() * 10)
      if (this.state.pool[num] == undefined) {
        this.dispatch('play')
      } else {
        this.state.PalavraDaVez = this.state.pool[num]
        var out = this.state.pool.indexOf(this.state.PalavraDaVez)
        console.log(out)
        this.state.pool.splice(out, 1)
        console.log(this.state.PalavraDaVez)
        return
      }     
    },
    playRules() {
      var num = Math.floor(Math.random() * 10)
      if (this.state.poolRules[num] == undefined) {
        this.dispatch('playRules')
      } else {
        this.state.RegraDaVez = this.state.poolRules[num]
        console.log(this.state.RegraDaVez)
        return
      }     
    }
  },
  modules: {
  }
})
