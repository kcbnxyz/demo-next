

const Search = ({setQuery, query}) => {
  return (
      <>
        <form >
            <input  
            placeholder='Search' 
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())} 
            />
        </form>
      </>
  );
};

export default Search;
