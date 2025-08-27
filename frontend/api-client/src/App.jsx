import { useState } from 'react'
import './App.css'
import FaleComIA from './pages/chat/FaleComIA';
import GereReceitas from './pages/receita/GereReceitas';
import GereImagens from './pages/imagem/GereImagens';

function App() {

  const [activeTab, setActiveTab] = useState('ask-ia')

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>
      <div className="App">
        <button onClick={() => handleTabChange('ask-ia')}>Fale com a IA</button>
        <button onClick={() => handleTabChange('receitas')}>Gere receitas</button>
        <button onClick={() => handleTabChange('imagens')}>Gere Imagens</button>
        <div>
          {activeTab === 'ask-ia' && <FaleComIA />}
          {activeTab === 'receitas' && <GereReceitas />}
          {activeTab === 'imagens' && <GereImagens />}
        </div>
      </div>
    </>
  )
}

export default App
