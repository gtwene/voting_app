export default function PortFolioCard({ title, onClick }) {
  return (
    <>
      <div className="bg-white h-24 text-black relative shadow-md border cursor-pointer rounded-md p-3">
        {title}
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
