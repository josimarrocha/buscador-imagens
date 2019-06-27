import React from 'react'
import Imagem from './Imagem'
import Paginacao from './Paginacao'

const ListImagens = ({ imagens, anterior, seguinte }) => {
  return (
    <>
      <div className='col-12 p-3 row m-auto'>
        {!!imagens.length && imagens.map(imagem => (
          <Imagem
            key={imagem.id}
            imagem={imagem}
          />
        ))}
      </div>
      {!!imagens.length && <Paginacao
        anterior={anterior}
        seguinte={seguinte}
      />}
    </>
  )
}

export default ListImagens
