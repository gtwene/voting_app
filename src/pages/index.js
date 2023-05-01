import Voting_Page from "@/components/Vote/Voting";
import Votal_Portal from "@/components/Vote/Voting_portal";
import Login from "@/components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Login />
      {/* <Voting_Page />
      <Votal_Portal /> */}
    </>
  );
}
