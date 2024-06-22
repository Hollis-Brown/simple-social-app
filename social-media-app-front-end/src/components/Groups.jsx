function Groups() {
  return (
    <div>
        <img
          src="{url goes here}"
          alt=""
          className="w-full rounded-md overflow-hidden object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl text-gray-800 mb-2">No groups today</h1>
          <p className="text-base">
            There aren't any Groups to participate in today, but I'll let you know when people gather together again.
          </p>
        </div>
    </div>
  );
}

export default Groups;
