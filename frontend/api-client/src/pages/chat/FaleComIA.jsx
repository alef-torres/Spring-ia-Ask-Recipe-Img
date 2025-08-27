import React, { useState } from "react";
import api from '../services/api';

function FaleComIA() {

  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const askIA = async () => {
    try {
      const response = await api.get(`ia/ask-ia-options`, {
        params: { prompt }
      })
      const data = await response.data;
      console.log(data)
      setChatResponse(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Fale com a IA </h2>
      <input type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite para começar">
      </input>
      <button onClick={askIA}>Pergunte para a IA</button>
      <div className="output">
        <p>{chatResponse}</p>
      </div>
    </div>
  );

}

export default FaleComIA