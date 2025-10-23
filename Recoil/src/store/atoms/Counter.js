import { atom, selector } from "recoil";

export const counter = atom({
    default:0,
    key:"counter"
})

export const evenSelector = selector({
    key:"isEven",
    get: ({get}) => {

        const currentCount = get(counter);
        const isEven = (currentCount % 2 == 0);
        return isEven;
    }
})