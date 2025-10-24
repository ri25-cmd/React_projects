import {atom, selector} from 'recoil';
import {axios} from 'axios';
//Asyncronpus data queries
export const notificationsAtom = atom({
    key:"notificationsAtom",
    default: selector({
        key:"notificationsSelector",
        get:async() => {
            const res = await axios.get("https://sum-server.100xdevs/notifications");
            return res.data;
        }
    })
})

export const totalNotificationCount = selector({

    key:"totalNotificationCount",
    get: ({get}) =>{
        const allNotification = get(notificationsAtom);
        return allNotification.network +
        allNotification.jobs + 
        allNotification.notifications +
        allNotification.messaging
    }
})

