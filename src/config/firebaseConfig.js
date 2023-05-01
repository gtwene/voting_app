import { initializeApp, cert } from "firebase-admin/app";
import serviceAccount from "./credential.json";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
export const Election = db.collection("Elections");
