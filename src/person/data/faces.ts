import { Gender } from "./gender";

export const generateFace = (gender : Gender) => {
    if (gender === Gender.Male) {
        const f = Math.floor(Math.random() * 20) + 1;
        return `male${f < 10 ? '0' : ''}${f}`;
    } else {
        const f = Math.floor(Math.random() * 30) + 1;
        return `female${f < 10 ? '0' : ''}${f}`;
    }
    
}