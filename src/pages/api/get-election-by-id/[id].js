import { Election } from "@/config/firebaseConfig";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    Election.doc(id).get();
    if ((await Election.doc(id).get()).exists) {
      const response = await Election.doc(id).get();
      return res.send(response.data());
    } else {
      return res.send("Not Found");
    }
    // const election = (await Election.get()).docs.map((doc) => {
    //   if (doc.id === id) {
    //     return { id: doc.id, ...doc.data() };
    //   } else {
    //     return;
    //   }
    // });
  }
}
