import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"

function App() {

  return(
    <>
    <RecoilRoot>
      <Mainapp/>
    </RecoilRoot>
    </>
  )
  
}

function Mainapp(){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [msgCount, setMsgCount] = useRecoilState(messagingAtom)
  const notifyCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
     <button>Home</button>
     <button>My Network ({networkCount >= 100 ? "99+": networkCount})</button>
     <button>Jobs ({jobsCount})</button>
     <button>Messaging ({msgCount})</button>
     <button>Notification ({notifyCount})</button>
     <button>Me ({totalNotificationCount})</button>
     {/* <JobsInc/> */}
    </>
  )
}

// function JobsInc () {
//   const setJobCount = useSetRecoilState(jobsAtom);
//   return(
//     <>
//     <div>
//       <button onClick={()=>{
//         setJobCount(c=> c+1)
//       }}>Job-Count</button>
//     </div>
//     </>
//   )
// }

export default App
