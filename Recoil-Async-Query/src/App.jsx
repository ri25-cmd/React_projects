import { useRecoilState, useRecoilValue } from "recoil"
import { notificationsAtom, totalNotificationCount } from "./atom"


function App() {


  return (
    <>
     <RecoilRoot>
      <MainApp/>
     </RecoilRoot>
    </>
  )
}

const MainApp = () => {
  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
  const allNotifications = useRecoilValue(totalNotificationCount);
  return(
    <>
    <button>Home</button>
    <button>My Network({networkCount.network >=100 ? "99+":networkCount.network})</button>
    <button>Jobs({networkCount.jobs})</button>
    <button>Messaging({networkCount.messaging})</button>
    <button>Notification({networkCount.notification})</button>
    <button>Me({allNotifications})</button>
    </>
  )
}

export default App
