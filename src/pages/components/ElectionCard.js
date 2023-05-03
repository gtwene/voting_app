export default function ElectionCard({ onClick, name }) {
  return (
    <>
      <div className="bg-white border h-40 relative shadow-md cursor-pointer text-gray-900 rounded-md p-4">
        {name}
        <div className="flex justify-end absolute bottom-2 right-2">
          <button
            onClick={onClick}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Inspect Election
          </button>
        </div>
      </div>
    </>
  );
}
