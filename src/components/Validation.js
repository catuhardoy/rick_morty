const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export default function validation(input){
let errors = {}

if(!input.username) 
    errors.username = "El nombre de usuario es requerido";
else if 
    (input.username.length > 35) errors.username = "El nombre de usuario es demasiado largo";
else if 
    (!regexEmail.test(input.username)) errors.username = "El nombre de usuario debe ser un email válido";

else if 
    (input.password.length < 6) errors.password = "La contraseña es demasiado corta";
else if 
    (input.password.length > 10 ) errors.password = "La contraseña es demasiado larga";
else if 
    (!regexPassword.test(input.password)) errors.password = "La contraseña debe contener al menos un número";

return errors

}