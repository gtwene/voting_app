import { Modal, ScrollArea, Accordion } from "@mantine/core";

export default function ViewCategory({ category }) {
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
                <div className="text-sm font-semibold my-2">
                  Kindly view details of each candidate below
                </div>
              </div>
              <ScrollArea h={300} className="mt-7">
                <Accordion variant="contained">
                  {category?.candidates?.map((i, key) => (
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
          }
        </div>
      </div>
    </>
  );
}
