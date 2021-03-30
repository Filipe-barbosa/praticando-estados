import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import './App.css';


// 1. Nasce
// 2. Muda
// 3. Morre

function App() {
  const [items, setItems] = useState([]) //desconstrucao do objeto
  const [itemName, setItemName] = useState('')

  // console.log('atualizou')
  // executa a função após montar e sempre que o valor de items muda
  useEffect(() => {
    console.log('adicionou item')
  }, [items])

  // executa a função após montar e sempre que o valor de items ou itemName muda
  useEffect(() => {
    console.log('mudou uma variavel ou outra', itemName)
  }, [items, itemName])

  // executa a função apenas após montar
  useEffect(() => {
    console.log('acabei de montar')
  }, [])


  const handleChangeName = (event) => {
    const { value } = event.target //sintaxe  para pegar o valor atualizado  que foi digitado no input
    setItemName(value)
  }

  const addItem = () => {
    setItemName('')
    // setItems([...items, itemName]) // novo valor
    setItems(prevItems => [...prevItems, itemName]) // funcao q retorna novo valor
    //esse prev vem do conceito pra manter o anterior ou vc pos por vontade mesmo ??

  }

  const onDelete = (nome) => {
    const newItems = items.filter(item => item !== nome) // qual é a dessa função itens.filter ele filtra a parada  pra exluir?
    setItems(newItems)
  }

  const setElementName = (index) => (newName) => {
    setItems(
      items.map((item, indexItem) => index === indexItem
        ? newName // seria a sintaxe de um if correto ?
        : item)
    )
  }

  return (
    <div className="container">
      <h1 className="main-title">Teste projetinho filipe</h1>

      <div className="box">
        <input
          value={itemName}
          type="text"
          placeholder="Nome do usuário"
          onChange={handleChangeName}
        />
        <button onClick={addItem}>Adicionar</button>

        <div className="flexContainer">
          {items.map((item, index) => (//funcao map  itera nos itens e transforma cada  item em um elemento seguindo as  intrucoes
            <Card key={item} nome={item} onDelete={onDelete} setName={setElementName(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
