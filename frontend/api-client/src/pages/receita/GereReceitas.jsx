import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from '../services/api';

function GereReceitas() {

  const [ingredientes, setIngredients] = useState('')
  const [cozinha, setCuisine] = useState('Any')
  const [dieta, setDieta] = useState('Any')

  const [recipe, setRecipe] = useState('')

  const createRecipe = async () => {
    try {
      const response = await api.get(`receitas/receitIA`, {
        params: { ingredientes, cozinha, dieta }
      })
      const data = await response.data;
      console.log(data)
      setRecipe(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Gere receitas com a IA</h2>
      <input type="text"
        value={ingredientes}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Digite os seus ingredientes (separados por ,)">
      </input>

      <input type="text"
        value={cozinha}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Diga o tipo da cozinha">
      </input>

      <input type="text"
        value={dieta}
        onChange={(e) => setDieta(e.target.value)}
        placeholder="Diga sua restrição de dieta">
      </input>

      <button onClick={createRecipe}>Gere sua receita</button>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );

}

export default GereReceitas