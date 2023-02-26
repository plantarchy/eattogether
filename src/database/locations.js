import { app, db } from './config.js';
import { doc, query, addDoc, getDoc, getDocs, setDoc, arrayUnion, arrayRemove, updateDoc, deleteDoc, collection, where } from 'firebase/firestore';

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

export async function getLocations(label) {
    const locationDoc = await getDoc(doc(db, 'locations', label));
    if (!locationDoc.exists()) {
        console.log("None")
        return [];
    }
    const location = locationDoc.data();
    console.log(location, label)
    return location.locations;
}

