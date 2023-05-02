import * as admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import serviceAccount from "./credential.json";
import { getFirestore } from "firebase-admin/firestore";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();
export const Election = db.collection("Elections");
