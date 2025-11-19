import BarraLateral from '../../containers/BarraLateral'
import ContactList from '../../containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <BarraLateral showFilters />
      <ContactList />
    </>
  )
}

export default Home
