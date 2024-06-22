function Marketplace() {
  return (
    <div>
        <img
          src="{url goes here}"
          alt=""
          className="w-full rounded-md overflow-hidden object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl text-gray-800 mb-2">Marketplace is closed for now</h1>
          <p className="text-base">
            The Marketplace is closed today, but I'll let you know when it reopens.
          </p>
        </div>
    </div>
  );
}

export default Marketplace;