import "../../style.css";

function Search({ setSearchtext }) {
  return (
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search items"
        onChange={(e) => setSearchtext(e.target.value)} // setting searchText
      />

      <button className="search__button">
        <ion-icon className="search__icon" name="search-outline"></ion-icon>
      </button>
    </form>
  );
}

export default Search;
