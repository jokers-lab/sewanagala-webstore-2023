import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="flex w-full px-4 py-3 flex-col justify-center items-baseline gap-y-4 text-center background-card-wrapper">
      <figure>{/* Image of the product */}</figure>
      <h2 className="px-4 text-center w-full uppercase text-base font-semibold">Siyadevi Hair oil</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
        hic asperiores dolores provident eveniet officia atque cumque sed
        cupiditate sunt, error, nostrum assumenda voluptatem repellat quo totam
        molestias a?
      </p>
      <div className="w-full">
      <Link
        href={"/about-us"}
        className="w-fit px-4 py-2 m-4 text-xs bg-green-500 rounded-md font-normal uppercase text-white"
      >
        view product
      </Link>
      </div>
    </div>
  );
}
