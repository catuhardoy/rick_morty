import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "./redux/actions";
import React , {useState, useEffect} from "react";
import {connect} from "react-redux";
import styles from "./Card.module.css"



export function Card(props){

   const [isFav, setIsFav]= useState(false);

   const handleFavorite  = () =>{
      if (isFav){
         setIsFav (false)
         props.deleteFavorite(props.id)
      }else{
         setIsFav (true)
         props.addFavorite(props)
            
         }

      }
 // probar props.myFavorites
      useEffect(() => {
         props.myFavorites.forEach((fav) => {      
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [props.id]);

      // [props.id]

   return (
      <div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <div>
         <button onClick={()=> props.onClose(props.name)} >X</button>
         <Link to={`/detail/${props.id}`}>  
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt={props.name} className={styles.card}/>
      </div>

   </div>
    );
}


export function mapDispatchToProps(dispatch){
   return{
      addFavorite: function(character){
         dispatch(addFavorite(character))
      },
   
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      },
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
