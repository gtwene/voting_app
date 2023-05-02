import { Election } from "@/config/firebaseConfig";
export default async function handler(req, res) {
  if (req.method === "POST") {
    await Election.add(req.body);
    return res.send("Election created");
  }
}
