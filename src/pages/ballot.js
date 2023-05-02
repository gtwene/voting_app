import { useState } from 'react';
import Swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


function VotingApp() {
  const [votes, setVotes] = useState({
    candidate1: 0,
    candidate2: 0,
    candidate3: 0,
    candidate4: 0,
    candidate5: 0,
  });
  
  const [voted, setVoted] = useState(false);

  const handleVote = (candidate) => {
    if (voted) {
      // Show sweetalert if user has already voted
      Swal({
        title: 'Oops!',
        text: 'You have already voted.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      setVotes((prevState) => {
        const prevCandidate = Object.keys(prevState).find((c) => prevState[c] > 0);
        if (prevCandidate && prevCandidate !== candidate) {
          // Reset previous vote to zero
          return { ...prevState, [prevCandidate]: 0, [candidate]: 1 };
        } else {
          return { ...prevState, [candidate]: prevState[candidate] + 1 };
        }
      });
      setVoted(true);
  
      // Show sweetalert after the user has voted
      Swal({
        title: 'Success!',
        text: 'Thank you for voting!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };
  
  const handleReset = () => {
    setVotes({
      candidate1: 0,
      candidate2: 0,
      candidate3: 0,
      candidate4: 0,
      candidate5: 0,
    });
    setVoted(false);
  };
  
  

  const candidates = [
    {
      id: 1,
      name: 'Candidate 1',
      imageUrl: 'https://picsum.photos/id/1018/200',
    },
    {
      id: 2,
      name: 'Candidate 2',
      imageUrl: 'https://picsum.photos/id/1025/200',
    },
    {
      id: 3,
      name: 'Candidate 3',
      imageUrl: 'https://picsum.photos/id/1042/200',
    },
    {
      id: 4,
      name: 'Candidate 4',
      imageUrl: 'https://picsum.photos/id/106/200',
    },
    {
      id: 5,
      name: 'Candidate 5',
      imageUrl: 'https://picsum.photos/id/107/200',
    },
  ];

  return (
    

    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex">
              <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 font-bold text-xl" href="#">
                <span className="mr-1">🗳️</span>
                <span>Voting App</span>
              </a>
            </div>
            <div className="flex items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-gray-200"></div>
      </nav>

      <div className="max-w-md m-auto ">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="bg-white shadow-md rounded px-8 py-6 flex items-center justify-between mt-4"
        >
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={candidate.imageUrl}
              alt={candidate.name}
            />
            <span className="text-gray-800 text-lg font-bold">{candidate.name}</span>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleVote(`candidate${candidate.id}`)}
            disabled={voted}
          >
            {voted ? 'Voted' : 'Vote'} ({votes[`candidate${candidate.id}`]})
          </button>
        </div>
      ))}
      
    </div>
    <footer className="bg-gray-800 text-white py-3">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-center">&copy; 2023 Voting App. All rights reserved.</p>
    </div>
  </footer>
    </div>
  );
}

export default VotingApp;
