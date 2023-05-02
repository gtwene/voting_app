export default function ElectionCard() {
  return (
    <>
      <div className="bg-gray-500 h-40 relative shadow cursor-pointer rounded-md p-4">
        SRC Election
        <div className="flex justify-end absolute bottom-2 right-2">
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Inspect Election
          </button>
        </div>
      </div>
    </>
  );
}
