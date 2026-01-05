import React from 'react';
import { Link, Outlet } from 'react-router';

const AboutUs = () => {
  const aboutInfoLinks = (
    <>
      <Link to="story" className="hover:underline underline-offset-8">
        Story
      </Link>

      <Link to="mission" className="hover:underline underline-offset-8">
        Mission
      </Link>

      <Link to="success" className="hover:underline underline-offset-8">
        Success
      </Link>

      <Link to="team" className="hover:underline underline-offset-8">
        Team & Others
      </Link>
    </>
  );

  return (
    <div className="bg-white p-10 my-10 rounded-2xl">
      <div>
        <h2 className="font-extrabold text-5xl">About Us</h2>
        <p className="mt-5 text-gray-600">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle…
        </p>
      </div>

      <hr className="text-gray-300 mt-7" />

      <div className="flex flex-col md:flex-row gap-10 text-3xl my-3">
        {aboutInfoLinks}
      </div>

      {/* Nested page will show here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutUs;
