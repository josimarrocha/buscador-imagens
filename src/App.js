import React, { Component } from 'react';
import Buscador from './components/Buscador'
import Loader from 'react-loader-spinner'
import ListImagens from './components/ListImagens'

class App extends Component {
  state = {
    dadosimages: [],
    busca: '',
    pagina: 1,
    isClickPagination: false,
    loading: false
  }

  buscarDados = async (buscar) => {
    const { pagina, isClickPagination } = this.state
    this.setState({ loading: true })
    if (!isClickPagination) {
      this.setState({ pagina: 1 })
    }
    const url =
      `https://pixabay.com/api/?key=12887616-35439738a5cf7bf081b6aafee&q=${buscar}&per_page=20&page=${pagina}`

    const data = await fetch(url)
    const response = await data.json()
    this.setState({
      dadosimages: response.hits,
      busca: buscar,
      loading: false,
      isClickPagination: false
    })
  }

  paginaAnterior = async () => {
    const { pagina, busca } = this.state
    if (pagina > 1) {
      await this.setState({
        pagina: pagina - 1,
        isClickPagination: true
      })
      this.buscarDados(busca)
      this.scrollPagina()
    }
  }

  paginaSeguinte = async () => {
    const { pagina, busca } = this.state
    await this.setState({
      pagina: pagina + 1,
      isClickPagination: true
    })
    this.buscarDados(busca)
    this.scrollPagina()
  }

  containerRef = React.createRef()

  scrollPagina = () => {
    const container = this.containerRef.current
    container.scrollIntoView('smooth', 'start')
  }

  render() {
    return (
      <div className="App container" ref={this.containerRef}>
        <div className="jumbotron">
          <h2 className="lead text-center mb-3">Buscar Imagens</h2>
          <Buscador
            buscarDados={this.buscarDados}
          />
        </div>
        <div className="row justify-content-center">
          {this.state.loading ?
            <Loader
              type="Puff"
              color="#00BFFF"
              height="300"
              width="300"
            />
            :
            <ListImagens
              imagens={this.state.dadosimages}
              anterior={this.paginaAnterior}
              seguinte={this.paginaSeguinte}
            />}
        </div>
      </div>
    );
  }
}

export default App;
