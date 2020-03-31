import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
        currencies: {},
        selectedCurrency: "",
        amount:0
    },
    mounted(){
        this.getCurrencies() 
    },
    computed: {
        toEuros: function(){
            return (this.amount * this.selectedCurrency).toFixed(2)
        },
        fromEuros: function(){
            return (this.amount / this.selectedCurrency).toFixed(2)
        }
    },
    methods: {
        getCurrencies: function () {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(currencies => this.currencies = currencies.rates)
        .catch( err => console.error(err))
        }
    },
    })
})
