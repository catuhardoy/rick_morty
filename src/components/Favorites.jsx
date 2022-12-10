import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "./redux/actions";



 function Favorites ({myFavorites})  {
    const dispatch = useDispatch()

    function handleFilter (e){
        dispatch(filterCards(e.target.value));
    }
    function orderFilter(e){
        dispatch(orderCards(e.target.value))
    }

    return(
        <div>
            <h1>Favorites</h1>
            <div>
                <select name="order" onChange={orderFilter}>
                    <option value="default" disabled>Select...</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="gender" onChange={handleFilter}>
                    <option value="defualt" disabled>Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div>
            {myFavorites.map(character => (
                <div> 
                    <h3>{character.name}</h3>
                    <h2>{character.id}</h2>
                    <img src={character.image} alt="" />
                </div>    
            ))}
            </div>
        </div>        
        
    );
}
function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)