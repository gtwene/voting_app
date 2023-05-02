
import { useRouter } from "next/router";
import VotingApp from './ballot';
import Login from './components/Login';
import Votal_Portal from './voting-portal';

export default function Home() {

  const router = useRouter()
  
  return (
    <>
      <Login />
     
    </>
  );
}
