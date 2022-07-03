import { defineComponent } from "vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import { usePokemons } from "../composables/usePokemons";

import getPokemonOptions from "../helpers/getPokemonOptions";
import { Pokemon } from "../interfaces/pokemon";
import { usePokemonStore } from "../store/pokemonStore";

export default defineComponent({
    name: 'PockemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    }, 
    setup: () => {

        const { 
            pokemonArr, pokemon, showAnswer, showPokemon, message, 
            mixPokemonArray, checkAnswer, newGame 
        } = usePokemons();
        
        // First render (onMounted).
        mixPokemonArray();
        
        return {
            //! Reactive props.
            PokemonPicture,
            pokemonArr,
            pokemon,
            showPokemon,
            showAnswer,
            message,
            //! Methods 
            mixPokemonArray,
            checkAnswer,
            newGame
        }
    }
})

