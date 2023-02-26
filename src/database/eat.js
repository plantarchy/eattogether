import { app, db } from './config.js';
import { notifyFriends } from './notifications';
import { doc, query, addDoc, getDoc, getDocs, setDoc, arrayUnion, arrayRemove, updateDoc, deleteDoc, collection, where, onSnapshot } from 'firebase/firestore';
import {getUserFriends} from './user.js';

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
let currentEatsCallback = null;
export async function getCurrentEats(uid, callback) {
    const eats = query(collection(db, 'eats'), where("ownerID", "==", uid));
    const eatsJSON = [];
    const eatsDocs = await getDocs(eats);
    eatsDocs.forEach((doc) => {
        eatsJSON.push({
            id: doc.id,
            ...doc.data()
        })
    })
    if (currentEatsCallback == null) {
        currentEatsCallback = onSnapshot(query(collection(db, 'eats'), where('ownerID', "==", uid)), (snap) => {
            console.log("BEGIN UPDATE", uid)
            const feedItems = [];
            snap.forEach((doc) => {
                const data = doc.data();
                console.log("GET DATA", data)
                feedItems.push({
                    "id": doc.id,
                    ...data
                });
            });
            if (callback != null) {
                console.log(uid, feedItems)
                callback(feedItems)
            }
        });
    }
    return eatsJSON;
}

let eatsCallback = null;
export async function listEats(uid, callback) {
    console.log("LISTEATS", uid, callback);
    const eats = query(collection(db, 'eats'), where("people", "array-contains", uid));
    const eatsJSON = [];
    const eatsDocs = await getDocs(eats);
    eatsDocs.forEach((doc) => {
        eatsJSON.push({
            id: doc.id,
            ...doc.data()
        })
    })
    if (eatsCallback == null) {
        eatsCallback = onSnapshot(query(collection(db, 'eats'), where('people', "array-contains", uid)), (snap) => {
            console.log("BEGIN UPDATE", uid)
            const feedItems = [];
            snap.forEach((doc) => {
                const data = doc.data();
                console.log("GET DATA", data)
                feedItems.push({
                    "id": doc.id,
                    ...data
                });
            });
            if (callback != null) {
                console.log(uid, feedItems)
                callback(feedItems)
            }
        });
    }

    return eatsJSON;
}

export async function addEat(uid, data) {
    const info = {
        owner: uid,
        ...data
    }
    console.log("FINO", info)
    await notifyFriends(await getUserFriends(uid), info);
    return addDoc(collection(db, "eats"), info);
}

export async function updateEat(id, data) {
    return setDoc(doc(db, 'eats', id), data, { merge: true });
}

export async function deleteEat(id) {
    return await deleteDoc(doc(db, "eats", id));
}
