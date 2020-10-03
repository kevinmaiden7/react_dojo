import Axios from 'axios'

// Type Actions

// Games Store
export const BuyPokemon = "BUYPOKEMON"
export const ReturnPokemon = "RETURNPOKEMON"

// Type Async Action
export const FetchPokemonRequest = "FETCHPOKEMONREQUEST"
export const FetchPokemonSuccess = "FETCHPOKEMONSUCCESS"
export const FetchPokemonFailure = "FETCHPOKEMONFAILURE"

export const BuyPokemonAction = (cant) => {
    return{
        type: BuyPokemon,
        payload: cant
    }
}

export const ReturnPokemonAction = (cant) => {
    return{
        type: ReturnPokemon,
        payload: cant
    }
}

// Async Actions
export const FetchPokemonRequestAction = () => {
    return {
        type: FetchPokemonRequest,
    }
}

export const FetchPokemonSuccessAction = (pokemon) => {
    return {
        type: FetchPokemonSuccess,
        payload: pokemon
    }
}

export const FetchPokemonFailureAction = (error) => {
    return {
        type: FetchPokemonFailure,
        payload: error
    }
}

export const FetchPokemonAction = (valor) => {
    return (dispatch) => {
        dispatchEvent(FetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(FetchPokemonSuccessAction(response.data));
            })
            .catch(error => {
                dispatch(FetchPokemonFailureAction("Pokemon not found"));
            })
    }
}
