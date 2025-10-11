import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/neet" element={<Layout/>}>
            <Route path="/neet/online-coaching-program-clas11" element={<Class11Program/>}/>
            <Route path="/neet/online-coaching-program-clas12" element={<Class12Program/>}/>
            
          </Route>
          <Route path="/" element={<Landing/>}/> 
          <Route path="*" element={<ErrPage/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return(
    <>
    <div style={{height: "100vh"}}>
      <Link to="/">Home </Link> |  <Link to="/neet/online-coaching-program-clas11">Class-11</Link>  |  <Link to="/neet/online-coaching-program-clas12">Class-12</Link>
      <br></br>

      <div style={{height:"90vh"}}>
        <Outlet/>
      </div>
      
      <br></br>
      Contact us  |  Career
    </div>
    </>
  )
}

function ErrPage(){
  return(
    <>

      Sorry The Page Is Not Found
  
    </>
  )
}

function Landing(){
  return(
    <>
      Hello this is Allen classes.
      <br></br>
      <Link to="/neet">NEET</Link>
    </>
  )
}

function Class11Program(){
  return(
    <>
      Hello this is class 11 online coaching program for NEET.
    </>
  )
}

function Class12Program(){
  const nevigate = useNavigate();

  const redirectToHomePage = () =>{
    nevigate("/")
  }
  return(
    <>
      Hello this is class 12 online coaching program for NEET.

      <div>
        <button onClick={redirectToHomePage}>Home Page!</button>
      </div>
    </>
  )
}

export default App
