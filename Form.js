import {useState} from "react";

const Form =()=>{
  const [email, setEmail] = useState("email");
  const[pass, setPass]= useState("pass");

    return(
 <section className="form">
<form>
    <input type="Email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
    <input type="Password" placeholder= "Enter the password" onChange={(e)=> setPass(e.target.value)}/>
    <input type="text" placeholder="Enter the photo Number"/>
    <button> SUBMIT</button>
</form>
<h1>Email:{email}</h1>
<h3>{pass}</h3>
  </section>
    );
}
export default Form;
