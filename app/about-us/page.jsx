import React from "react";

function AboutUs() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-center">
        {/* Image here */}
        <h2>40 years of excellence</h2>
      </div>
      <div className="w-full p-3">
        <div className="flex flex-row justify-start items-center px-4 py-2 gap-2">
          <div className="text-sm font-medium text-slate-800">Home</div>/{" "}
          <div className="text-sm font-medium text-slate-800">About Us</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 justify-center items-center">
          {/* Image */}
          <p className="py-4">
            Lorem ipsum dolor, sit <b>amet consectetur</b> adipisicing elit.
            Neque magni fuga et expedita, voluptates ad <br /> illo harum
            incidunt totam, at modi tempore hic, amet nihil? Nam incidunt vero
            quam id.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            nihil quis, quam
          </p>
        </div>
        <div className="flex flex-col justify-center px-4">
          <div className="flex flex-col gap-y-2">
            <h2>sevanagala hela osu uyana</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              quos atque amet, magni expedita maxime nobis minus numquam
              necessitatibus libero excepturi itaque tempore, ipsum ratione
              nesciunt exercitationem. Voluptas, adipisci ad!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              vel dicta natus quo expedita ad a possimus error itaque cupiditate
              sunt magni corporis veritatis dignissimos odio est, eveniet
              commodi voluptas?
            </p>
          </div>
          <div className="flex flex-row space-y-4">
            <figure>{/* Image one */}</figure>
            <figure>{/* Image two */}</figure>
            <figure>{/* Image three */}</figure>
            <figure>{/* Image four */}</figure>
            <figure>{/* Image five */}</figure>
          </div>
        </div>
        <div className="flex flex-col p-4 justify-center items-center">
          <figure>{/* Founder's image */}</figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            error, debitis reiciendis animi esse corrupti dolorem porro
            necessitatibus at, in sunt illo quisquam qui, assumenda rem minus!
            Sed, exercitationem necessitatibus.
          </p>
          <figure>{/* Products images */}</figure>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            aspernatur repellendus, iste, minus exercitationem similique
            nesciunt iusto suscipit quisquam iure quae ex tempora nobis odio,
            nisi itaque quidem voluptas officia?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
