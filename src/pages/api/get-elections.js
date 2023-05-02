import { Election } from "@/config/firebaseConfig";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const elections = (await Election.get()).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return res.send(elections);
  }
}
