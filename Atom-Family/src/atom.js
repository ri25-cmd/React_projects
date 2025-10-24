import { TODOS } from "./todos";
import {atomFamily} from 'recoil';

export const todosAtomFamily = atomFamily({
    key : "todosAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id)
    }
})