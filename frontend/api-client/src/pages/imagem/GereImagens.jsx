import React, { useState } from "react";
import api from '../services/api';

function GereImagens() {

  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const Gere = async () => {
    try {
      const response = await api.get(`imagens`, {
        params: { prompt }
      })
      const data = await response.data;
      console.log(data)
      setImageUrls(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Gere imagens com a IA</h2>
      <input type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite a imagem que você quer">
      </input>
      <button onClick={Gere}>Gere uma imagem</button>
      <div className="image-grid">
        {imageUrls.map((url, index) => (<img key={index} src={url} />))}
        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div key={index + imageUrls.length} className="empty-image-slot"></div>
        ))}
      </div>
    </div>
  );

}

export default GereImagens