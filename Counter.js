 import {useState} from "react"
 import Logo from "../logo.svg";
 function Counter(){
     const[count, setCount]=useState(2)
     return(
         <div>
             <button onClick={()=> setCount(count + 2)}>Add</button>
             <div>Count{count}</div>
             <button onClick={()=> setCount(count -2)}>minus</button>
             <footer>keep pressing either Add or Minus for more action</footer>
            <input type="email" placeholder="Enter your email"></input>
            <input type="phone number" placeholder="Enter your phone number"></input>
            <input type="text" placeholder="Enter your firstname"></input>
            <input type="text" placeholder="Enter secondname"></input>
            <input type="text" placeholder=" OtherName(s)"></input>
            <input type="password" placeholder="Enter your password"></input>
            <input type="password" placeholder="Confirm password"></input>
            <button>NEXT Page</button>
            
            <h2>NEW WRITER LOGIN DETAILS  ABOVE</h2>
            <img src={Logo} width="500" alt="log"/>
            <hr></hr>
         </div>
     )
 }
 export default Counter;