import TextBox from "./TextBox";
import { useState } from "react";
// import Link from "next/link";

function Category(props) {
  const [catOpen, setCatOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col mb-8">
        <h1
          className={
            catOpen
              ? "text-white cursor-pointer font-bold text-3xl md:text-5xl mb-6 w-fit md:px-96 px-12"
              : "text-[#E982A2] hover:text-white duration-250 cursor-pointer transition font-bold text-3xl md:text-5xl mb-6 w-fit md:px-96 px-12"
          }
          onClick={() => setCatOpen(!catOpen)}
        >
          {props.name}
        </h1>
        {/* <TextBox title="Test" text={props.text} /> */}
        <div
          className={
            catOpen
              ? "py-24 px-12 h-128 md:my-12 bg-black text-[#96E072] md:px-96 text-xl transition-all ease-linear duration-300"
              : "h-0 px-12  md:px-96 text-xl transition-all ease-linear duration-300 truncate"
          }
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="font-bold">{props.title}</h2>
              <p className="mt-5">{props.text}</p>
            </div>
            <div className="md:w-1/2">{props.decoration}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
