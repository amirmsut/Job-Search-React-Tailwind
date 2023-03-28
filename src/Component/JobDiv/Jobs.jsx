import React from "react";
import { BiTimeFive } from "react-icons/bi";

// Imported Images
import logo1 from "../../Assets/1.png";
import logo2 from "../../Assets/2.png";
import logo3 from "../../Assets/3.png";
import logo4 from "../../Assets/4.png";
import logo5 from "../../Assets/5.png";
import logo6 from "../../Assets/6.png";
import logo7 from "../../Assets/7.png";
import logo8 from "../../Assets/8.png";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "web Developer",
    time: "now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
  {
    id: 2,
    image: logo2,
    title: "Instagram Inc.",
    time: "now",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
  {
    id: 3,
    image: logo3,
    title: "Twitter Inc.",
    time: "now",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
  {
    id: 4,
    image: logo4,
    title: "E-commerce Inc.",
    time: "N",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Online Shop",
  },
  {
    id: 5,
    image: logo5,
    title: "web Developer",
    time: "now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
  {
    id: 6,
    image: logo6,
    title: "web Developer",
    time: "now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
  {
    id: 7,
    image: logo7,
    title: "web Developer",
    time: "now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
  {
    id: 8,
    image: logo8,
    title: "web Developer",
    time: "now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores porro expedita totam natus delectus?",
    company: "Google Inc",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-4400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6>{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2 ">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item;text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
