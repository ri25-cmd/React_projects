import { useEffect, useState } from 'react';
import PostComponent from './PostComponent';
import ProfileCardComponent from './ProfileCardComponent';


// function App() {

//   return (
//     <div>
//       <ToggleMessage/>
//     </div>
//   )
// }

// const ToggleMessage = () => {

//   let [isVisible, setIsVisible] = useState(true);

//   const toggle = () => {
//     setIsVisible(!isVisible)
//   }

//   return(
//     <div>
//       <button onClick={toggle}>Toggle Message!</button>
//       <div>
//         {isVisible ? <>This message was conditionally rendered!</> : null}
//       </div>
//     </div>
//   )
  
// }



function App(){

  const [posts, setposts] = useState([]);
  const [currTab, setcurrTab] = useState("feed");
  const [ans, setans] = useState();
  const [showTimer, setShowTimer]= useState("true");

  useEffect(() => {
    setans("You have clicke on " + currTab);
  },[currTab])

  useEffect(()=>{
    setInterval(()=>{
      setShowTimer(showTimer => !showTimer);
    },5000)
  },[])


  const postComponents = posts.map(post => <PostComponent
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    img = {post.img}
    description = {post.description}
  />)

  const AddTodo = () => {
    setposts([...posts, {
      name: "Harish",
      subtitle: "10,000 Followers",
      time: "2m ago",
      img: "360_F_1464817232_WGdFXM36MDLLNBferu5i5VnaBv6cevnr.jpg",
      description: "A cute post!"
    }, {
      name: "Riddhi",
      subtitle: "50,000 Followers",
      time: "1m ago",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdtnrNtiIXxMW54wkyuJnScOcFXhtjuSxGg&s",
      description: "Wannaknow how these open ontributions are helpful!"
    }])
  }

  return (

    <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <button onClick={()=>{setcurrTab("feed")}} style={{width:75, height:35, borderRadius:8, borderColor: "black", borderWidth:1, backgroundColor:"#74b9ff", fontFamily:"Arial, sans-serif", fontSize:12, fontWeight:550, color: currTab == "feed" ? "white": "#454949ff", margin:10 }}>Feed</button>
        <button onClick={()=>{setcurrTab("notifications")}} style={{width:85, height:35, borderRadius:8, borderColor: "black", borderWidth:1, backgroundColor:"#74b9ff", fontFamily:"Arial, sans-serif", fontSize:12, fontWeight:550, color:  currTab == "notifications" ? "white": "#454949ff", margin:10 }}>Notifications</button>
        <button onClick={()=>{setcurrTab("messages")}} style={{width:75, height:35, borderRadius:8, borderColor: "black", borderWidth:1, backgroundColor:"#74b9ff", fontFamily:"Arial, sans-serif", fontSize:12, fontWeight:550, color:  currTab == "messages" ? "white": "#454949ff",margin:10 }}>Messages</button>
        <button onClick={()=>{setcurrTab("jobs")}} style={{width:75, height:35, borderRadius:8, borderColor: "black", borderWidth:1, backgroundColor:"#74b9ff", fontFamily:"Arial, sans-serif", fontSize:12, fontWeight:550, color: currTab == "jobs" ? "white": "#454949ff", margin:10 }}>Jobs</button>
        
      </div>
      
      <div style={{display: "flex", justifyContent: "center"}}>
        
        <div>
          <div style={{margin:10}}>{ans}</div>
          {showTimer && <Timer/>}
          <ProfileCardComponent/>
          <div style={{marginTop:10}}>
            <button onClick={AddTodo} style={{width:75, height:35, borderRadius:8, borderColor: "black", borderWidth:1, backgroundColor:"#74b9ff", fontFamily:"Arial, sans-serif", fontSize:12, fontWeight:550, color:"#454949ff" }}>Add-Post</button>
          </div>
        </div>
        
        <div>
          {postComponents}
        </div>
      </div>
      
    </div>
  )
}

const Timer = () =>{
  const [seconds, setSeconds] = useState(0);
  useEffect(()=>{
    let clock = setInterval(()=>{
      setSeconds(prev => prev+1);
    },1000);
    
    return(()=>{
      clearInterval(clock);
    })
  },[])
  return(
    <div style={{color:"red"}}>{seconds} have elapsed!</div>
  )
}



export default App
