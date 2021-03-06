import React from "react"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"


const App =()=> {
  return (
    <Router>
    <Header/>
     <main className="py-3"> 
     {/* this class helps in adding padding at top and bottom */}
     <Container>
     <Routes>
     <Route path='/' component={HomeScreen} />
     </Routes>
     </Container>
     </main>
    <Footer/>
    </Router>
  );
}

export default App;
