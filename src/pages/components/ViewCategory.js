import { Modal, ScrollArea, Accordion } from "@mantine/core";
import { useState } from "react";

export default function ViewCategory({ category }) {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div>
        <div className="py-4 px-4  mb-4 border-2 space-y-2 scale-[0.85] -mx-14 -my-6  bg-white rounded ">
          <div className="font-semibold text-lg">
            Category / Portfolio -{" "}
            <span className="text-cyan-500 font-bold">({category?.title})</span>
          </div>

          <hr />
          <br />

          {
            <div className="bg-stone-100 p-2 rounded ">
              <div className="font-semibold my-2">
                <div className="text-lg">
                  Contenders for the {category?.title} category
                </div>
                <div className="text-sm  my-2">
                  Kindly view details of each candidate below
                </div>
              </div>
              <ScrollArea h={300} className="mt-7">
                <Accordion variant="contained">
                  {category?.candidates?.map((i, key) => (
                    <Accordion.Item key={key} value={`${key}`}>
                      <Accordion.Control>
                        <div className="flex  items-center">
                          <div></div>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <img
                            className="w-16 h-16 rounded-full mr-4"
                            src={"https://picsum.photos/id/1018/200"}
                          />
                          <span className="text-gray-800 text-lg font-bold">
                            {i.firstName} - {i.lastName}
                          </span>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-gray-100 p-2 rounded">
                          <div className="font-semibold mb-2  flex justify-between">
                            <p>Candidate Details</p>
                            {!edit ? (
                              <div
                                onClick={() => setEdit(true)}
                                className="flex items-center cursor-pointer bg-pink-300 rounded p-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                                Edit
                              </div>
                            ) : (
                              <div
                                onClick={() => setEdit(false)}
                                className="flex items-center cursor-pointer bg-green-300 rounded p-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                  />
                                </svg>
                                Done
                              </div>
                            )}
                          </div>
                          <hr className="my-2" />
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <label className="w-[36%]">
                                First Name{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                value={i.firstName}
                                type="text"
                                disabled={!edit}
                                autoFocus={true}
                                className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                              />
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <label className="w-[36%]">
                                Last Name{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                value={i.lastName}
                                disabled={!edit}
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
                                value={i.studentId}
                                disabled={!edit}
                                type="text"
                                className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                              />
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <label className="w-[36%]">
                                Programme of Study{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                value={i.programme}
                                disabled={!edit}
                                type="text"
                                className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                              />
                            </div>
                            {edit && (
                              <>
                                <div className="flex items-center space-x-2 mb-2">
                                  <label className="w-[36%]">
                                    Upload Photo{" "}
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="file"
                                    className="focus:outline-blue-500 px-2 py-0.5  w-[62%] border-2 rounded"
                                  />
                                </div>
                                <hr className="my-2" />

                                <div className="flex justify-center">
                                  <button
                                    onClick={() => {}}
                                    className="px-3 py-1 rounded bg-blue-600 text-white"
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </ScrollArea>
            </div>
          }
        </div>
      </div>
    </>
  );
}
