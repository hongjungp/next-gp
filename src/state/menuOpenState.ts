import { atom } from "recoil";

export const menuOpenState = atom<string[]>({
    key: 'menuOpenState',
    default: [],
})