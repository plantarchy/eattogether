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

export async function getUserData(uid) {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (!userDoc.exists()) {
        return null;
    }
    const user = userDoc.data();
    return user;
}

export async function getUserFriends(uid) {
    const userFriendsA = query(collection(db, 'users', uid, 'friends'));

    const friends = [];
    const friendsA = await getDocs(userFriendsA);
    friendsA.forEach((doc) => {
        const data = doc.data();
        friends.push({
            "id": doc.id,
            "name": data.name
        });
    });

    return friends;
}

export async function addFriend(you, them) {
    await setDoc(doc(db, 'users', you.id, "friends", them.id), {
        name: them.name,
    });
    await setDoc(doc(db, 'users', them.id, "friends", you.id), {
        name: them.name,
    });
    return true;
}

export async function removeFriend(uid, themID) {
    console.log(uid, themID)
    await deleteDoc(doc(db, "users", uid, "friends", themID));
    await deleteDoc(doc(db, "users", themID, "friends", uid));
    return true;
}

export async function updateUserData(uid, data) {
    return setDoc(doc(db, 'users', uid), data, { merge: true });
}
