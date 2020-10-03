//imports nesesarios
import React from 'react';
import { useDispatch } from 'react-redux';
import { BuyPokemonAction, ReturnPokemonAction } from '../redux/actions';

export default function ActionPokemon() {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(BuyPokemonAction(1));
            }}>Comprar Pokemon</button>

            <button className="btn btn-dark btn-sm " onClick={() => {
                dispatch(ReturnPokemonAction(1))
            }}>Devolver Pokemon</button>

        </div>
    )

}
