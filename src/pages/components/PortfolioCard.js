export default function PortFolioCard({ title }) {
  return (
    <>
      <div className="bg-gray-500 h-24 text-white relative shadow cursor-pointer rounded-md p-3">
        {title}
        <div className="flex justify-end absolute bottom-2 right-2">
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            View category
          </button>
        </div>
      </div>
    </>
  );
}
