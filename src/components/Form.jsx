import React from "react"
import validation from "./Validation"
import styles from "./Form.module.css"

export default function Form(props){

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = React.useState({

        username: "",
        password: ""
    })

    function handleInputChange (evento){
        setErrors(
            validation({
                ...userData,
                [evento.target.name]: evento.target.value, 
            })
        )
         setUserData({
           ...userData,
           [evento.target.name]: evento.target.value
        });
    }

    function handleSubmit (evento){
        evento.preventDefault();
        props.login(userData)

    }

    return(
    <form onSubmit={handleSubmit}>
        <div className= {styles.fondo}>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                name="username" 
                placeholder="Ingrese usuario"
                value= {userData.username} 
                onChange = {handleInputChange} />
                <p className={styles.error}>{errors.username && errors.username}</p>
            
            <label htmlFor="password" name="password">Password:</label>
            <input 
                type="password" 
                name="password" 
                placeholder="Ingrese contraseña"
                value= {userData.password} 
                onChange = {handleInputChange} />
                <p className={styles.error}>{errors.password && errors.password}</p>
                
            <button className={styles.button} type="submit"  >LOGIN</button>
            
        </div>
    </form>

    )
}