import { useState } from "react";
import type { GameState } from "../hooks/use-game-manager";
interface Props{
    handlePokemonNameSubmit:(userInput: string)=>void;
    gameState:GameState
}

const PokemonForm = ({handlePokemonNameSubmit, gameState}:Props) => {

    const [inputValue,setInputValue]=useState("");
    const handleSubmit=(e: React.FormEvent)=>{
        //Validar si el formulario está vacío.
        e.preventDefault();
        if (!inputValue.trim()){
            console.log("Input is empty.");
            return;
        }
        handlePokemonNameSubmit(inputValue.trim().toLowerCase());
        setInputValue("");
    }

    return <form className="input-group my-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="¿Quién es ese Pokemon?"
                    aria-label="¿Quién es ese Pokemon?"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                    autoFocus
                    disabled={gameState !== "playing"}
                />
                <div
  className="btn-toolbar"
  role="toolbar"
  aria-label="Toolbar with button groups"
>
  <div className="btn-group me-2" role="group" aria-label="First group">
                <button
                    className="btn btn-outline-dark"
                    type="submit"
                    disabled={!inputValue.trim() || gameState !== "playing"}
                    >
                    Jugar
                </button>
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btn-info">
      Hacer Trampas
    </button>
  </div>
</div>

                
            </form>;
}
export default PokemonForm;