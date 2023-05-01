
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Votal_Portal from './components/Vote/Voting_portal';
import Login from './components/auth/Login';
import VotingApp from './components/Vote/Voting';

export default function Home() {
  return (
    <>
      <Login />
      <VotingApp />
      <Votal_Portal />
    </>
  );
}
