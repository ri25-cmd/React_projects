const style = {width: 350, borderStyle: "solid", backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth:1, padding: 15, fontFamily: "Arial, sans-serif", marginBottom:10}

function PostComponent({ img, name, subtitle, time, description }){
  return(
    <div style={style}>

      <div style={{display:"flex"}}>
        <img src={img} style={{
          width: 30, 
          height: 30, 
          borderRadius:50,
          margin: 10
        }}></img>
        <div  style={{
          margin: 10,
          marginLeft:5,
          fontSize:10
        }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          <div>{time}</div>
        </div>
        
      </div>
      <div style={{fontSize:12}}>
        {description}
      </div>

    </div>
    
  )
}

export default PostComponent;
