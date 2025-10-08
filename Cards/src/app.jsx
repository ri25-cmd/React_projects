import React from "react"


export function App() {
 

  return (
    <div style={{backgroundColor:"#ffeaa7"}}>
      <ErrorBoundary>
        <Cards>
        <div>
          Riddhi Tiwar
        </div>
        </Cards>
        <Cards>
          <div>
            Archita
          </div>
        </Cards>
      </ErrorBoundary>

      
      <Card1>
        <div>
          Archita
        </div>
      </Card1>
    </div>
  )
}
function Cards({children}){

  throw new Error("Error while rendering!");

  return(

    <div style={{
      border: "1px solid #dfe6e9",
      borderRadius:5,
      padding:20,
      margin:10,
      boxShadow:"2px 2px 5px rgba(0,0,0, 0.1)",
      backgroundColor:"white"
    }}>
      {children}
    </div>
  )
}

function Card1({children}){
  return(
    <div style={{
      border: "1px solid #dfe6e9",
      borderRadius:5,
      padding:20,
      margin:10,
      boxShadow:"2px 2px 5px rgba(0,0,0, 0.1)",
      backgroundColor:"white"
    }}>
      {children}
    </div>
  )
}



class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {hasError : false}
  }

  static getDerivedStateFromError(error){
    return {hasError: true}
  }

  componentDidCatch(error, info){
    console.error("Error caught:", error, info )
  }

  render(){
    if(this.state.hasError){
      return <h3 style={{
      border: "1px solid #dfe6e9",
      borderRadius:5,
      padding:20,
      margin:10,
      boxShadow:"2px 2px 5px rgba(0,0,0, 0.1)",
      backgroundColor:"white",
      color:"red"
      }}>Something went wrong!</h3>
    }

    return this.props.children;
  }
}