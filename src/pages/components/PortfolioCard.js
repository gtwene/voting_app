export default function PortFolioCard({ title, onClick }) {
  return (
    <>
      <div className="bg-white border-l-4 border-l-orange-300 h-24 text-black relative shadow-md border-2 cursor-pointer rounded-md p-3">
        <div className="font-semibold">{title}</div>
        <div className="flex justify-end absolute bottom-2 right-2">
          <button
            onClick={onClick}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            View category
          </button>
        </div>
      </div>
    </>
  );
}
