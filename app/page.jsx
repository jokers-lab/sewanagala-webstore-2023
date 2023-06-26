import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-center background-front h-[300px]">
        <div className="justify-end items-center flex flex-col">
          <Image
            alt="40 years of excellence"
            src={"https://i.ibb.co/zb0tP1K/text-main.png"}
            className="w-[185px] h-[100px]"
            width={185.88}
            height={12.5}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 text-center py-10 background-front-secondary">
        <h2 className="my-3 text-lg font-medium uppercase text-slate-700">
          Keeping <b className="text-green-500 font-bold">your ride </b> looking{" "}
          <b className="text-green-500 font-bold">brand new everyday</b>
        </h2>
        <p className="text-xs font-semibold mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
          amet totam doloribus error voluptatum magni quidem. Vero labore velit,
          quam ipsum maiores,
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 background-front-section-third">
        <div className="flex flex-col px-4 py-10 background-card-wrapper justify-center items-center text-center">
          <h2 className="my-3 text-lg font-medium uppercase text-slate-700">
            Keeping <b className="text-green-500 font-bold">your ride </b>{" "}
            looking{" "}
            <b className="text-green-500 font-bold">brand new everyday</b>
          </h2>
          <p className="text-xs font-semibold mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
            amet totam doloribus error voluptatum magni quidem. Vero labore
            velit, quam ipsum maiores, ratione expedita libero facere distinctio
            eligendi molestias.
          </p>
          <Link
            href={"/about-us"}
            className="w-fit px-4 py-2 m-4 text-xs bg-green-500 rounded-md font-normal uppercase text-white"
          >
            About us
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-3 justify-center items-center text-center background-front-secondary">
        <h2 className="my-3 text-lg font-medium uppercase text-slate-700">
          Keeping <b className="text-green-500 font-bold">your ride </b> looking{" "}
          <b className="text-green-500 font-bold">brand new everyday</b>
        </h2>
        <div className="flex flex-row justify-around items-center py-4 gap-2 text-xs">
          <span className="px-2 py-1 capitalize bg-green-500 text-white font-semibold rounded-lg">
            All products
          </span>
          <span className="text-slate-700 font-semibold capitalize text-xs">
            hair oil
          </span>
          <span className="text-slate-700 font-semibold capitalize">
            adult care
          </span>
          <span className="text-slate-700 font-semibold capitalize">
            cough syrups
          </span>
        </div>
        <div className="flex w-full flex-col gap-y-4 px-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="w-full px-2 text-center my-10">
            <Link
              href={"/about"}
              className="w-fit px-4 py-2 m-4 text-xs bg-green-500 rounded-md font-normal uppercase text-white"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center background-bottom-img py-10 px-4 text-center">
        <figure>
          <Image alt="sevanagala-product" src={"https://i.ibb.co/8NNGdpB/bottom-product.png"} width={280} height={150}/>
        </figure>
        <h2 className="my-3 text-lg font-medium uppercase text-slate-700">
          Keeping <b className="text-green-500 font-bold">your ride </b> looking{" "}
          <b className="text-green-500 font-bold">brand new everyday</b>
        </h2>
        <p className="text-xs font-semibold mx-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
          amet totam doloribus error voluptatum magni quidem. Vero labore velit,
          quam ipsum maiores, ratione expedita libero facere distinctio eligendi
          molestias.
        </p>
        <Link
          href={"/about"}
          className="w-fit px-4 py-2 m-4 text-xs bg-green-500 rounded-md font-normal uppercase text-white"
        >
          View More
        </Link>
      </div>
    </main>
  );
}
