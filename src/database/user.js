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
    const userFriendsA = query(collection(db, 'friends'), where("a", "==", uid));
    const userFriendsB = query(collection(db, 'friends'), where("b", "==", uid));

    const friends = [];
    const friendsA = await getDocs(userFriendsA);
    const friendsB = await getDocs(userFriendsB);
    friendsA.forEach((doc) => {
        friends.push({
            "relID": doc.id,
            "id": doc.b,
            "name": doc.bName
        });
    });
    friendsB.forEach((doc) => {
        friends.push({
            "relID": doc.id,
            "id": a,
            "name": aName
        });
    });

    return friends;
}

export async function addFriend(you, them) {
    const relationship = await addDoc(collection(db, "friends"), {
        a: you.id,
        b: them.id,
        aName: you.name,
        bName: them.name,
    });
    return relationship;
}

export async function removeFriend(relID) {
    await deleteDoc(doc(db, "friends", relID));
    return true;
}

export async function updateUserData(uid, data) {
    return setDoc(doc(db, 'users', uid), data, { merge: true });
}
