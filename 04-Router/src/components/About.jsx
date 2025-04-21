import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Not display image"

            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate Sadam
            </h2>
            <p className="mt-6 text-gray-600">
              Every individual bears responsibility for their actions and must be held accountable.
               True insight and appreciation come from recognizing one's efforts and integrity. While
                challenges may arise, they are met with resilience and determination. Professionalism
                 and dedication ensure consistent success, even in the face of adversity. The ability 
                 to deliver results while maintaining respect and commitment is a mark of excellence
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
