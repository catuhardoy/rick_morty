import {useState} from "react"
import styles from "./SearchBar.module.css"


export default function SearchBar({onSearch}) {
   
const [character, setCharacter] = useState("")

   
   const handleChange = (evento) =>{
      setCharacter(evento.target.value)
    }
  
   return (
      <div className={styles.add}>
         <input
         type='text' 
         value = {character} 
         onChange = {handleChange} />

      <button onClick={()=> onSearch(character)}>ADD</button>
      </div>
   );
}
