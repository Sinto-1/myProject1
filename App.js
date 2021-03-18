
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Departments from "./components/Departments";

function App(){ 
    return(
      <>
      <NavBar></NavBar>
      <main>
        <Hero/>
        <Counter/>
        <form/>
        <Departments />
      </main>
      </>
    );

  }
export default App;
