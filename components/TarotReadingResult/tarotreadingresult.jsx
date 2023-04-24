import { useState, useEffect } from "react";
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";
import { getFirestore } from "firebase/firestore";
import Link from "next/link";

const firebaseConfig = {
    apiKey: "AIzaSyDFO_q77_N8pzCFkEb3Elxew_W-3e67RlI",
    authDomain: "kashiopiakazwayproject-b8755.firebaseapp.com",
    projectId: "kashiopiakazwayproject-b8755",
    storageBucket: "kashiopiakazwayproject-b8755.appspot.com",
    messagingSenderId: "657087554116",
    appId: "1:657087554116:web:c0466f7297de0e7ee01211"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

const RecordResult = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            window.location.href = "/recordtarotresult";
        }
    }, [isLoading, isAuthenticated]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isAuthenticated && user) {
            db.collection("users")
                .doc(user.sub)
                .collection("results")
                .add({
                    title: title,
                    description: description,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(() => {
                    setTitle("");
                    setDescription("");
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
    };

    return (
        <>
            <button >
                <Link href="/" >
                    戻る
                </Link>
            </button>
            <h1>タロットの鑑定結果を記録する</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">タイトル:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">説明:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} type="submit">保存する</button>
            </form>
        </>
    );
};

export default RecordResult;
