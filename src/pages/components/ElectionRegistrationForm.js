import { Modal, Stepper, Accordion, ScrollArea, Tabs } from "@mantine/core";

import { useEffect, useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import Portfolio from "./PortfolioCard";
import axios from "axios";

export default function ElectionRegistrationForm() {
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryFormData, setCategoryFormData] = useState("");
  const [candidateFormData, setCandidateFormData] = useState("");
  const [votersFormData, setVotersFormData] = useState("");
  const [candidates, setCandidates] = useState("");
  const [voters, setVoters] = useState([]);
  const [catContent, setCatContent] = useState([]);
  const [election, setElection] = useState([]);
  const [allElections, setAllElections] = useState([]);

  function handleSaveCategory() {
    setCategories((prev) => [...prev, { ...categoryFormData, candidates }]);
    setCandidates([]);
    setCategoryFormData((prev) => ({
      ...prev,
      noOfCandidates: "",
      title: "",
      candidates: "",
    }));
  }

  async function handleSaveElection() {
    setElection((prev) => ({ ...prev, categories: categories, voters }));
    setCategories([]);
    setVoters([]);

    const response = await axios.post("/api/create-elections", { election });
    console.log(response);
  }

  console.log({ categories, election });

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="bg-slate-100 p-4 rounded scale-90 -mx-12">
      <Modal
        size={"lg"}
        opened={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title={
          <div className="font-semibold">CREATE NEW CATEGORY / PORTFOLIO</div>
        }
      >
        <div>
          <div className="py-4 px-4 mt-2 mb-4 border-2 space-y-2 scale-[0.80] -mx-14 -my-14  bg-white rounded ">
            <div className="flex items-center space-x-2">
              <label className="w-[38%]">
                Category Title <span className="text-red-600">*</span>
              </label>
              <input
                value={categoryFormData?.title}
                onChange={(e) =>
                  setCategoryFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                type="text"
                className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label className="w-[38%]">
                Number of Candidates <span className="text-red-600">*</span>
              </label>
              <input
                value={categoryFormData?.noOfCandidates}
                onChange={(e) =>
                  setCategoryFormData((prev) => ({
                    ...prev,
                    noOfCandidates: e.target.value,
                  }))
                }
                type="text"
                className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
              />
            </div>
            <hr />
            <br />
            <div className="bg-gray-100 p-2 rounded">
              <div className="font-semibold mb-2 flex justify-between">
                <div className="text-lg">Candidate Form</div>

                <div className="text-green-600">
                  {candidates.length}/
                  {!categoryFormData.noOfCandidates
                    ? 0
                    : categoryFormData?.noOfCandidates}{" "}
                  registered candidates
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="w-[36%]">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={candidateFormData.firstName}
                    type="text"
                    onChange={(e) => {
                      setCandidateFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }));
                    }}
                    className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                  />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="w-[36%]">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={candidateFormData?.lastName}
                    onChange={(e) => {
                      setCandidateFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }));
                    }}
                    className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                  />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="w-[36%]">
                    Student ID <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    value={candidateFormData?.studentId}
                    onChange={(e) => {
                      setCandidateFormData((prev) => ({
                        ...prev,
                        studentId: e.target.value,
                      }));
                    }}
                    className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                  />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="w-[36%]">
                    Programme of Study <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={candidateFormData.programme}
                    onChange={(e) => {
                      setCandidateFormData((prev) => ({
                        ...prev,
                        programme: e.target.value,
                      }));
                    }}
                    className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                  />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="w-[36%]">
                    Upload Photo <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    value={candidateFormData.photo}
                    onChange={(e) => {
                      setCandidateFormData((prev) => ({
                        ...prev,
                        photo: e.target.value,
                      }));
                    }}
                    className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setCandidates((prev) => [...prev, candidateFormData]);
                      setCandidateFormData((prev) => ({
                        firstName: "",
                        lastName: "",
                        studentId: "",
                        programme: "",
                      }));
                    }}
                    className="px-3 py-1 rounded bg-zinc-800 text-white"
                  >
                    Add Candidate
                  </button>
                </div>
              </div>
            </div>
            {candidates.length > 0 && (
              <div className="bg-stone-100 p-2 rounded ">
                <div className="text-sm font-semibold my-2">
                  Kindly fill form for each candidate below
                </div>
                <ScrollArea h={300} className="mt-7">
                  <Accordion variant="contained">
                    {candidates.map((i, key) => (
                      <Accordion.Item key={key} value={`${key}`}>
                        <Accordion.Control>
                          {i.firstName} - {i.lastName}
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="font-semibold mb-2">
                              Candidate Form
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <label className="w-[36%]">
                                  First Name{" "}
                                  <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                />
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <label className="w-[36%]">
                                  Last Name{" "}
                                  <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                />
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <label className="w-[36%]">
                                  Student ID{" "}
                                  <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                />
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <label className="w-[38%]">
                                  Programme of Study{" "}
                                  <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                />
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <label className="w-[38%]">
                                  Upload Photo{" "}
                                  <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="file"
                                  className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                />
                              </div>
                              <div className="flex justify-center">
                                <button
                                  onClick={() => {}}
                                  className="px-3 py-1 rounded bg-blue-600 text-white"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </ScrollArea>
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  handleSaveCategory();
                }}
                className="px-3 py-1 rounded bg-cyan-600 text-white"
              >
                Save Category
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Stepper
        active={active}
        onStepClick={setActive}
        // completedIcon={<IconCircleCheck />}
      >
        <Stepper.Step label="Step 1" description="Election Details">
          <div className="py-4 px-4 mt-2 mb-4 border-2 space-y-5  bg-white rounded ">
            <div className="flex items-center space-x-4">
              <label className="w-[30%]">
                Election Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={election?.electionName}
                onChange={(e) => {
                  setElection((prev) => ({
                    ...prev,
                    electionName: e.target.value,
                  }));
                }}
                className="focus:outline-blue-500 px-2 py-0.5  w-[50%] border rounded"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[30%]">
                Number of Categories <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                value={election?.noOfCategories}
                onChange={(e) => {
                  setElection((prev) => ({
                    ...prev,
                    noOfCategories: e.target.value,
                  }));
                }}
                className="focus:outline-blue-500 px-2 py-0.5  w-1/2 border rounded"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[30%]">
                Voting period <span className="text-red-600">*</span>{" "}
              </label>
              <div className="flex space-x-16">
                <DateTimePicker
                  dropdownType="modal"
                  label="Voting Start date and time"
                  placeholder="Pick date and time"
                  maw={400}
                  mx="auto"
                  onChange={(value) => {
                    setElection((prev) => ({
                      ...prev,
                      electionStartTime: value,
                    }));
                  }}
                />
                <DateTimePicker
                  dropdownType="modal"
                  label="Voting End date and time"
                  placeholder="Pick date and time"
                  maw={400}
                  mx="auto"
                  onChange={(value) => {
                    setElection((prev) => ({
                      ...prev,
                      electionEndTime: value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Step 2" description="Portfolio Details">
          <div className="my-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="flex items-center bg-gray-900 px-3 space-x-2 py-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 fill-white  stroke-zinc-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="mr-5 text-white">Add Portfolio</div>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((i) => (
                <Portfolio title={i.title} />
              ))}
            </div>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Step 3" description="Voters Details">
          <div>
            <Tabs defaultValue="gallery">
              <Tabs.List grow>
                <Tabs.Tab value="gallery">Add Voters Manually</Tabs.Tab>
                <Tabs.Tab value="messages">
                  Upload Voters as Batch (.csv)
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="gallery" pt="xs">
                <div className="bg-stone-100 p-2 rounded border mb-2">
                  <div className="font-semibold mb-2 flex justify-between">
                    <div className="text-lg">Voter's Form</div>

                    <div className="text-green-600">
                      ({voters.length}) Valid voters registered
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <label className="w-[36%]">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        value={votersFormData.firstName}
                        type="text"
                        onChange={(e) => {
                          setVotersFormData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }));
                        }}
                        className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <label className="w-[36%]">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={votersFormData?.lastName}
                        onChange={(e) => {
                          setVotersFormData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }));
                        }}
                        className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <label className="w-[36%]">
                        Student ID <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        value={votersFormData?.studentId}
                        onChange={(e) => {
                          setVotersFormData((prev) => ({
                            ...prev,
                            studentId: e.target.value,
                          }));
                        }}
                        className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <label className="w-[36%]">
                        Programme of Study{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={votersFormData.programme}
                        onChange={(e) => {
                          setVotersFormData((prev) => ({
                            ...prev,
                            programme: e.target.value,
                          }));
                        }}
                        className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setVoters((prev) => [...prev, votersFormData]);
                          setVotersFormData((prev) => ({
                            firstName: "",
                            lastName: "",
                            studentId: "",
                            programme: "",
                          }));
                        }}
                        className="px-3 py-1 rounded bg-zinc-800 text-white"
                      >
                        Add Voter
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="-mb-4" />
                <br />
                {voters.length > 0 && (
                  <div className="bg-stone-100 p-2 border mb-3 rounded ">
                    <div className="text-sm font-semibold my-2">
                      Kindly view details of each voter below
                    </div>
                    <ScrollArea h={300} className="mt-7">
                      <Accordion variant="contained">
                        {voters.map((i, key) => (
                          <Accordion.Item key={key} value={`${key}`}>
                            <Accordion.Control>
                              {i.firstName} - {i.lastName}
                            </Accordion.Control>
                            <Accordion.Panel>
                              <div className="bg-gray-100 p-2 rounded">
                                <div className="font-semibold mb-2">
                                  Candidate Form
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2 mb-2">
                                    <label className="w-[36%]">
                                      First Name{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                    />
                                  </div>
                                  <div className="flex items-center space-x-2 mb-2">
                                    <label className="w-[36%]">
                                      Last Name{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                    />
                                  </div>
                                  <div className="flex items-center space-x-2 mb-2">
                                    <label className="w-[36%]">
                                      Student ID{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                    />
                                  </div>
                                  <div className="flex items-center space-x-2 mb-2">
                                    <label className="w-[38%]">
                                      Programme of Study{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                    />
                                  </div>

                                  <div className="flex justify-center">
                                    <button
                                      onClick={() => {}}
                                      className="px-3 py-1 rounded bg-blue-600 text-white"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Panel>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </ScrollArea>
                  </div>
                )}
              </Tabs.Panel>

              <Tabs.Panel value="messages" pt="xs">
                <div className="py-4 px-4 mt-2 mb-4 border-2 space-y-5  bg-white rounded ">
                  <div className="flex items-center space-x-4">
                    <label className="w-[30%]">
                      Upload Excel <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="file"
                      className="focus:outline-blue-500 px-2 py-0.5  w-[60%] border rounded"
                    />
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </Stepper.Step>
      </Stepper>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setActive(active - 1);
          }}
          className="px-3 py-2 rounded bg-slate-200 text-gray-500"
        >
          Back
        </button>
        {active === 2 ? (
          <button
            onClick={handleSaveElection}
            className="px-3 py-1 rounded bg-cyan-600 text-white"
          >
            Save Election
          </button>
        ) : (
          <button
            onClick={() => {
              setActive(active + 1);
            }}
            className="px-3 py-1 rounded bg-cyan-600 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
