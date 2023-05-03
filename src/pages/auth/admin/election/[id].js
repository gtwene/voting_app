import PortFolioCard from "@/pages/components/PortfolioCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Modal, ScrollArea, Accordion } from "@mantine/core";
import axios from "axios";
import ViewCategory from "@/pages/components/ViewCategory";
export default function ElectionId() {
  const [visitedElection, setVisitedElection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    axios
      .get(`/api/get-election-by-id/${id}`)
      .then((response) => {
        setVisitedElection(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleViewCategory(category) {
    setShowModal(true);
  }
  return (
    <>
      <div className="bg-gray-900 text-gray-100 font-body h-screen flex overflow-hidden">
        {/* Sidebar */}
        <div className="bg-gray-800 py-4 px-2 flex-none w-48">
          <ul className="text-gray-100">
            <li className="mb-4">
              <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Users
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-black py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-bold">Admin Dashboard</span>
            </div>
            <div>
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Admin Avatar"
              />
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 bg-white p-8 ">
            <div className="flex space-x-2 justify-between">
              <h1 className="text-2xl font-bold mb-8 text-black">
                {visitedElection?.electionName}
              </h1>
            </div>

            <div className="w-[90%] grid grid-cols-3">
              {visitedElection?.categories?.map((i) => (
                <>
                  <PortFolioCard
                    title={i?.title}
                    onClick={handleViewCategory}
                  />
                  <Modal
                    size={"xl"}
                    opened={showModal}
                    onClose={() => {
                      setShowModal(false);
                    }}
                    title={
                      <div className="font-semibold">CATEGORY DETAILS</div>
                    }
                  >
                    <ViewCategory category={i} />
                  </Modal>
                </>
              ))}
            </div>
          </main>
        </div>
      </div>
      ;
    </>
  );
}
