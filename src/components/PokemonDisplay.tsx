import { GameState } from "../hooks/use-game-manager";
import type { Pokemon } from "../types/Pokemon.interface"
import Spinner from "./Spinner";

interface Props{
    pokemon: Pokemon | null;
    isLoading:boolean;
    gameState: GameState
}

const PokemonDisplay=({pokemon,isLoading, gameState}:Props)=>{
    const showAnswer= gameState !== GameState.Playing
    const image=pokemon?.image
    const name= pokemon?.name

   // console.log(name)

    return(<div className="card">
                <div className="card-header">
                    <h1 className="text-center">
                        {
                            showAnswer ? name?.toUpperCase() : "¿Quién es ese Pokemon?"
                        }
                    </h1>
                </div>
                <div className="card-body">
                    {isLoading ? (
                        <Spinner />
                    ):(
                        <img src={image}
                            alt="wartortle"
                            className="img-fluid mx-auto d-block"
                            style={{
                                maxHeight: "300px",
                                filter: showAnswer ? "none" : "brightness(0)",
                                transition: "filter 0.3s ease-in-out"
                            }}/>
                    )
                    }
                    
                </div>
            </div>)
}
export default PokemonDisplay