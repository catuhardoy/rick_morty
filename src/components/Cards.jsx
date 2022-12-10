import Card from './Card';
import React from 'react';


export default function Cards(props) {
  
   return ( <div>
   
      {props.characters.map((char)=> <Card
         key = {char.name}
         name = {char.name}
         species = {char.species}
         gender = {char.gender}
         image = {char.image}
         id = {char.id}
         onClose = {props.onClose}
         />
         )
      }

   </div>);
}
