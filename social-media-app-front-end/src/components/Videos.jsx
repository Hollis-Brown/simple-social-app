function Videos() {
  return (
    <div>
        <img
          src="{url goes here}"
          alt=""
          className="w-full rounded-md overflow-hidden object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl text-gray-800 mb-2">No Videos today</h1>
          <p className="text-base">
            There aren't any videos right now, but feel free to check back again later.
          </p>
        </div>
    </div>
  );
}

export default Videos;