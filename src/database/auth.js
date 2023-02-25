import { app, db } from './config.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updateEmail
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getUserData } from './user.js';

export async function createUserEmailPassword(email, password, location) {
    const auth = getAuth(app);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const uid = res.user.uid;

    // Create user document under /users collection
    const data = {
        id: uid,
        email,
        location
    };

    await setDoc(doc(db, 'users', uid), data);
    return data;
}

export async function loginUserEmailPassword(email, password) {
    const auth = getAuth(app);
    const res = await signInWithEmailAndPassword(auth, email, password);
    const uid = res.user.uid;
    return getUserData(uid);
}

export async function logout() {
    const auth = getAuth(app);
    await signOut(auth);

    return true;
}

export async function setupAuthChangeCallback(callback) {
    const auth = getAuth(app);
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userData = await getUserData(user.uid);
            callback(userData);
        } else {
            callback(null);
        }
    });
    return user;
}

export async function reauthenticate(password) {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user == null) throw new Error("UserNullError", "User is not signed in.");
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
}

export async function setEmail(email) {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user == null) throw new Error("UserNullError", "User doesn't exist.");
    await updateEmail(user, email);
}

export async function setPassword(newPassword) {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user == null) throw new Error("UserNullError", "User is not signed in.");
    await updatePassword(user, newPassword);
}

export async function resetPassword(email) {
    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);
}
