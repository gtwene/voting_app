
import { useRouter } from "next/router";
import VotingApp from './ballot';
import Login from './components/Login';
import Votal_Portal from './voting-portal';

export default function Home() {

  const router = useRouter()
  
  return (
    <>
      <Login />
      <footer className="bg-gray-800 text-white py-3">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center">&copy; 2023 Voting App. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
