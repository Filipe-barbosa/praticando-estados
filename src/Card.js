import React, { useEffect, useState } from 'react'

function Card({ nome, onDelete, setName }) { // esses parametros entre chaves são por que 
  const [isEdit, setIsEdit] = useState(false)
  const [nomeValue, setNomeValue] = useState(nome)
  const handleDelete = () => {
    onDelete(nome) // por que unica coisa que essa função faz e chamar outra ?
  }

  const onBlur = () => {//
    setIsEdit(false)
    setName(nomeValue)
  }

  const handleChangeName = (event) => {
    const { value } = event.target //sintaxe  para pegar o valor atualizado  que foi digitado no input
    setNomeValue(value)
  }

  useEffect(() => {
    console.log('nasci carai', nome)

    return () => {
      console.log('puta merda vei n me mata nao', nome)
    }
  }, [nome])

  return (
    <div className="card">
      {nome}
      {!isEdit // renderizacao condicional
        ? <button onClick={() => setIsEdit(true)}>Editar</button>
        : <input value={nomeValue} onChange={handleChangeName} onBlur={onBlur} />}
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Card
