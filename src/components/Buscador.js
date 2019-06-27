import React from 'react'


const Buscador = ({ buscarDados }) => {
  const buscarImagens = (e) => {
    e.preventDefault()
    const valueInput = e.target.inputText.value
    buscarDados(valueInput)
  }

  return (
    <form action="" onSubmit={buscarImagens}>
      <div className="row">
        <div className="form-group col-md-8">
          <input type="text" name='inputText' className='form-control form-control-lg' placeholder='Buscar imagem' />
        </div>
        <div className="form-group col-md-4">
          <input type="submit" value="Buscar" className='btn btn-block btn-lg btn-primary' />
        </div>
      </div>
    </form>
  )
}

export default Buscador
