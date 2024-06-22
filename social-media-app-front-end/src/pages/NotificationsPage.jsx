import { Link } from "react-router-dom";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function NotificationsPage() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow mt-4 max-w-4xl mx-auto gap-6 overflow-auto">
        <div className="flex flex-col mt-14">
          <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
          <Card noPadding={true}>
            <div className="">
              <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
                <Link href={"/profile"}>
                  <Avatar />
                </Link>
                <div>
                  <Link
                    href={"/profile"}
                    className={"font-semibold mr-1 hover:underline"}
                  >
                    John Doe
                  </Link>
                  liked
                  <Link
                    href={""}
                    className={"ml-1 text-socialBlue hover:underline"}
                  >
                    your photo
                  </Link>
                </div>
              </div>
              <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
                <Link href={"/profile"}>
                  <Avatar />
                </Link>
                <div>
                  <Link
                    href={"/profile"}
                    className={"font-semibold mr-1 hover:underline"}
                  >
                    John Doe
                  </Link>
                  liked
                  <Link
                    href={""}
                    className={"ml-1 text-socialBlue hover:underline"}
                  >
                    your photo
                  </Link>
                </div>
              </div>
              <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
                <Link href={"/profile"}>
                  <Avatar />
                </Link>
                <div>
                  <Link
                    href={"/profile"}
                    className={"font-semibold mr-1 hover:underline"}
                  >
                    John Doe
                  </Link>
                  liked
                  <Link
                    href={""}
                    className={"ml-1 text-socialBlue hover:underline"}
                  >
                    your photo
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;
