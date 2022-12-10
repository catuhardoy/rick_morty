import './App.css'
import Cards from './components/Cards.jsx'
// import characters from './data.js'
import Nav from './components/Nav'
import { useEffect } from 'react'
import {useState} from "react"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'


function App () {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
 
  const username = "catalinahardoy@gmail.com";
  const password = "catu123";

  function login(userData) {
    if (userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home") 
    }else{
      alert("Usuario o password incorrecta")
    }

  } 
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 const onSearch= (character)=>{
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
       window.alert('No hay personajes con ese ID');
     }
    });
    };

    
    const onClose = (e) => {
  
      setCharacters(characters.filter((char) => char.name!== e))
    }
  
return (
  <div className='App' style={{padding : "25px"}}>
    <div>
    {location.pathname !== "/" && <Nav onSearch={onSearch} />}
    </div>
   
    <Routes>
       <Route path="/" element = {<Form login = {login}/>}></Route>
        <Route path = "/home" 
               element= {<Cards characters={characters} onClose={onClose}/>}/>
        <Route path = "/about" element= {<About/>}/>
        <Route path = "/detail/:id" element= {<Detail />}/>
        <Route path = "/favorites" element = {<Favorites/>}/>

    </Routes>
  </div>
)
}

export default App
