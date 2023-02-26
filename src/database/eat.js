import { app, db } from './config.js';
import { doc, query, addDoc, getDoc, getDocs, setDoc, arrayUnion, arrayRemove, updateDoc, deleteDoc, collection, where, onSnapshot } from 'firebase/firestore';

/*
 * User Format:
 * {
 *  "id": "<id>",
 *  "email": "<aa@bb.com>",
 *  "location": 0 | 1 | 2 | 3 | 4
 *  "friends": [
 *      { "id": "b", name: "V" }
 *  ]
 * }
 */

export async function listEats(uid) {
    const eats = query(collection(db, 'eats'), where("people", "array-contains", uid));
    const eatsJSON = [];
    const eatsDocs = await getDocs(eats);
    eatsDocs.forEach((doc) => {
        eatsJSON.push({
            id: doc.id,
            ...doc.data()
        })
    })

    return eatsJSON;
}

export async function addEat(uid, data) {
    return addDoc(collection(db, "eats"), {
        owner: uid,
        ...data
    });
}

export async function updateEat(id, data) {
    return setDoc(doc(db, 'eats', id), data, { merge: true });
}

export async function deleteEat(id) {
    return await deleteDoc(doc(db, "eats", id));
}
