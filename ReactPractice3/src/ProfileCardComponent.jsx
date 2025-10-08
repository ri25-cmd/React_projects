function ProfileCardComponent(){
  return(
    <div style={{width:200, height:230, backgroundColor:"white", marginRight:20, borderRadius:10, borderWidth:1, borderColor: "grey", borderStyle: "solid"}}>
      <div style={{ position: "relative", width: 200, height: 70 }}>
        <img src="3a0560a7ff8623016b1fc649e8345e4e.jpg" style={{
          width:200, 
          height:50, 
          borderTopLeftRadius:10, 
          borderTopRightRadius:10,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}></img>

        <img src={"b5a6d8a2c59603ac6a1a600a3c737733.jpg"} style={{
          width: 50, 
          height:50, 
          borderRadius:50,
          position: "absolute",
          top: 25,
          left: 15,
          zIndex: 2
        }}></img>
      </div>
      <div style={{fontSize:18, fontFamily: "Arial, sans-serif", fontWeight: 520, marginTop: 12, paddingTop:10,paddingLeft:10}}>
        Riddhi Tiwari
      </div>
      <div style={{fontSize:12, fontFamily: "Arial, sans-serif", paddingLeft:10, paddingRight:10, paddingTop:2}}>Learning MERN and DSA</div>
      <div style={{fontSize:12, fontFamily: "Arial, sans-serif", paddingLeft:10, paddingRight:10, paddingTop:2, color:"#727676ff"}}>Delhi</div>
      <div style={{marginTop:10,  borderTop: "1px solid #dfe6e9"}}>
        <div style={{display:"flex", gap:55, justifyContent: "center", padding:8}}>
          <div style={{fontSize:12, fontFamily: "Arial, sans-serif", color:"#7f8282ff", fontWeight:550}}>Profile Viewers</div>
          <div style={{fontSize:14, fontFamily: "Arial, sans-serif", color:"#0984e3", fontWeight:550}}>41,903</div>

        </div>
        <div style={{display:"flex", gap:45, justifyContent: "center", paddingLeft:10, paddingRight:10}}>
          <div style={{fontSize:13, fontFamily: "Arial, sans-serif", color:"#7f8282ff", fontWeight:550}}>Posts Impressions</div>
          <div style={{fontSize:13, fontFamily: "Arial, sans-serif", color:"#0984e3", fontWeight:550}}>1,903</div>

        </div>
      </div>
    </div>
  )
}
export default ProfileCardComponent;