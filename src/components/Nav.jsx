import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css"

export default function Nav({onSearch}){
    
    return( 
    
        <div>

            <NavLink className={styles.inline} to = {"/home"}>
                <span>HOME</span>
                <br></br>
            </NavLink>
            <NavLink className={styles.inline} to = {"/about"}>
                <span>ABOUT</span>
                <br></br>
            </NavLink>
            <NavLink className={styles.inline} to = {"/favorites"}>
                <span>FAVORITES</span>
                <br />
            </NavLink>
            <br></br>
            <br />
            <SearchBar className={styles.inline} onSearch= {onSearch}/>
    
        </div>
    );
}