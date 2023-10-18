import Bubble from "../icons/Bubble";

export default function Notification() {
  return (
    <div className="flex max-w-sm my-0 mx-auto p-6 rounded-lg bg-white shadow-xl m-4">
      <div className="flex-shrink-0">
        <picture className="w-6 h-6 ">
          <Bubble />
        </picture>
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-gray-900 text-xl">ChitChat</h4>
        <p className="text-gray-500 text-base">Tienes un nuevo mensaje!</p>
      </div>
    </div>
  );
}
