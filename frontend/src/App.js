import React from "react"
import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App =()=> {
  return (
    <>
    <Header/>
     <main className="py-3"> 
     {/* this class helps in adding padding at top and bottom */}
     <Container>
     <h1>Welcome to ShoeStop</h1>
     </Container>
     </main>
    <Footer/>
    </>
  );
}

export default App;
