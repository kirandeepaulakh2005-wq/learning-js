
              //export button using Named export
import './Button.css';
// export function Dangerbutton(){
//     return(
//        <button className="red-button">Delete</button> 
//     );

// }

// export function Successbutton(){
//     return(
//        <button className="green-button">Save</button> 
//     );

// }

const Button=({btnType,btnText,handler})=>{
    
    if(btnType==='success'){
    return<button className="green-button" onClick={handler}>{btnText}</button>;
}
else if(btnType==='Danger'){
return<button className="red-button" onClick={handler}>{btnText}</button> ;
}else{
    return<button className="blue-button" onClick={handler}>{btnText}</button>;
}
};
export default Button;
