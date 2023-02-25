import { app, db } from './config.js';
import { doc, query, addDoc, getDoc, getDocs, setDoc, arrayUnion, arrayRemove, updateDoc, deleteDoc, collection } from 'firebase/firestore';

export async function getUserData(uid) {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (!userDoc.exists()) {
        return null;
    }
    const user = userDoc.data();
    return user;
}

export async function updateUserData(uid, data) {
    return setDoc(doc(db, 'users', uid), data, { merge: true });
}
