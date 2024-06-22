function Events() {
  return (
    <div>
        <img
          src="{url goes here}"
          alt=""
          className="w-full rounded-md overflow-hidden object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl text-gray-800 mb-2">No Events yet</h1>
          <p className="text-base">
            There aren't any events yet, but I'll let you know when you have some participate in.
          </p>
        </div>
    </div>
  );
}

export default Events;