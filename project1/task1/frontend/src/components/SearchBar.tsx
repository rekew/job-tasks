import SearchIcon from "../assets/SearchIcon.svg"
import '../styles/SearchBar.css'

interface SearchBarProps{
    onSearch : (query : string) => void;
}

function SearchBar({onSearch} : SearchBarProps){

    function inputChanges(e : React.ChangeEvent<HTMLInputElement>){
        onSearch(e.target.value);
    }

    return(
        <div className="search-input">
            <input type="text" onChange={inputChanges}/>
            <button><img src={SearchIcon} alt="" /></button>
        </div>
    )
}

export default SearchBar