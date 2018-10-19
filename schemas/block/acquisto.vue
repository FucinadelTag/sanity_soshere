<template lang="html">
    <section class="acquisto">
        <h2 class="title is-1">Aerosol Pinguino</h2>
        <h3 class="subtitle">Veloce e silenzioso</h3>
        <p class="p_stretto">
            <span class="leggero">Prezzo: <span class="prezzo_intero">{{prodotto.prezzoIntero}}€</span></span><br>
            Offerta: <span class="prezzo">{{prodotto.prezzoScontato}}€</span> <span class="sconto">Sconto del {{prodotto.precentualeSconto}}%</span><br>
            <span class="leggero">Risparmi: {{prodotto.risparmio}}€ </span><span> - </span><i>Fino al <strong class="dataPromo"><scadenzaPromo /></strong></i> <br>
            <i class="leggero">Spedizione <strong>senza</strong> costi aggiuntivi</i><br>
        </p>
        <br>
        <p>
            <addToCartButton v-bind:sku="prodotto.sku" />
            <!-- <a class="button"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Aggiungi al Carrello</a> -->
        </p>
    </section>

</template>

<script>
import scadenzaPromo from '~/components/scadenzaPromo.vue'
import addToCartButton from '~/components/addToCartButton.vue'

export default {


    props: ['sku'],
    data: function () {
        return {
            prodotti: this.$store.getters['prodotti/getProdotti']
        }
    },
    computed: {
        // a computed getter
        prodotto: function () {
            return (this.prodotti[this.sku]);

        }
    },
    components: {
        scadenzaPromo,
        addToCartButton,
    },
}
</script>

<style lang="scss">

.acquisto {
    .prezzo {
        font-size: 1.8rem;
        color: #ff2424;
        padding: 0.3125rem;
        font-weight: bold;
    }

    .prezzo_intero {
        text-decoration: line-through;
    }

    .sconto {
        font-size: rem-calc(20, null);
        font-weight: 700;
        color: $rosso-color;
    }

    .leggero {
      color: $dark-gray;
      font-size: 0.9rem;
    }

    .small {
      font-size: 0.9rem;
    }

    .p_stretto {
      line-height: 1.2;
    }
}

</style>
