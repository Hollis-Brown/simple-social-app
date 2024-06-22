import React from 'react';

const profile = {
  name: "Hollis",
  imageUrl: "https://i.imgur.com/e8nzIKr.png",
  coverImageUrl: "https://th.bing.com/th?id=OIP.gNYUN6SpHUOmy-DftL2gBAHaD5&rs=1&pid=ImgDetMain",
  about: `
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  `,
};

export default function SimplifiedComponent() {
  return (
    <>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              {/* Background Image */}
              <div>
                <img
                  className="h-32 w-full object-cover lg:h-48 rounded-md"
                  src={profile.coverImageUrl}
                  alt=""
                />
              </div>

              {/* Avatar */}
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center   -mt-14">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                    src={profile.imageUrl}
                    alt=""
                  />
                </div>
              </div>

              {/* Line and About */}
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-gray-800 text-3xl font-bold ml-8">
                    About
                  </div>
                <div className="border-b border-gray-200 mt-1"></div>
                <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                    dangerouslySetInnerHTML={{ __html: profile.about }}
                  />
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
