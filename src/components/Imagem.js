import React from 'react'

const Imagem = ({ imagem }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagem
  return (
    <div className='col-12 col-sm-6 col-md-4 mb-3'>
      <div className="card">
        <div>
          <img style={{ width: '340px', height: '250px' }}
            src={previewURL} alt={tags} className="card-img-top img-thumbnail" />
        </div>
        <div className="card-body">
          <p className="card-text h5">Mais de {likes} likes</p>
          <p className="card-text">Mais de {views} views</p>
          <a href={largeImageURL}
            target="_blank"
            className="btn btn-primary btn-block">Ver Imagem em HD</a>
        </div>
      </div>
    </div>
  )
}

export default Imagem
