import React from 'react'

const Paginacao = ({ anterior, seguinte }) => {
  return (
    <div className=' col-12 row py-5 justify-content-center'>
      <button onClick={anterior} type='button' className='btn btn-info mr-1'>&larr; Anterior</button>
      <button onClick={seguinte} type='button' className='btn btn-info'>Próximo &rarr;</button>
    </div>
  )
}

export default Paginacao
