import React from "react";
import { clubs } from "./data";




export default function Clubs() {
  return (
    <section id="projects" className="text-white bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-center font-serif sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Clubs
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {clubs.map((club) => (
            <a
              href={club.link}
              key={club.image}
              className="sm:w-1/2  p-4">
              <div className="flex relative w-96 h-96 r p-4">
                <img
                  alt="club Picture"
                  className="absolute  object-fill inset-0 object-scale-down h-96 w-96 object-center"
                  src={club.image}
                />
                <div className=" px-8 py-10 z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    {club.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {club.title}
                  </h1>
                  <p className="leading-relaxed">{club.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}