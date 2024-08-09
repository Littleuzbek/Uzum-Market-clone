import { db } from "@/firebase"
import { doc, getDoc } from "firebase/firestore"

export const getData = async()=>{
    const data = (await getDoc(doc(db,'nextJs','data'))).data();

    return data
}