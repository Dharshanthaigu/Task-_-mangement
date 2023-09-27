import './searchbar.css'
const Searchbar = () => {
  return (
    <>
    <section className='searchbar'>
    <input className='search_input' placeholder="searchbar" type="text"  />
    <button className='search_button'>search</button>
    </section>
    </>
  )
}

export default Searchbar