"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { student } from "@/assests";
import Image from "next/image";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="w-4/5 mx-28 h-[100vh] mt-8">
        <h1 className=" text-7xl mb-4 mt-5 head_text">Welcome to Edtus</h1>

        <Carousel
          autoPlay
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div className="flex flex-row p-2 justify-between align-middle items-center">
            <div className="flex flex-col">
              <h1 className="head_text text-4xl mb-5">
                For a Smarter Education{" "}
              </h1>
              <p className="wrap text-xl">
                At Edtus, we're redefining education for the digital age. While
                we're in the process of crafting innovative solutions, our
                commitment to transforming learning remains unwavering. Explore
                our vision, understand our mission, and join us on this exciting
                journey.{" "}
              </p>
            </div>
            <Image src={student} className="h-[540px] w-auto" alt="image1" />
          </div>

          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <div className="flex flex-col">
              <h1 className="head_text text-5xl mb-5">
                Discover the Future of Education{" "}
              </h1>
              <p className="wrap text-xl">
                Education is evolving, and so are we. Edtus envisions a world
                where technology seamlessly integrates with learning. Our
                mission is to empower schools, students, and educators with
                tools that redefine education in the digital age. Explore the
                potential of what education can become.{" "}
              </p>
            </div>
            <Image src={student} className="h-[540px] w-auto" alt="image1" />
          </div>

          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <div className="flex flex-col">
              <h1 className="head_text text-5xl mb-5">
                Empower Learning Through Innovation{" "}
              </h1>
              <p className="wrap text-xl">
                Our journey is driven by the belief that technology can elevate
                education. Edtus is more than just a solution; it's a catalyst
                for change. We're here to simplify administrative tasks, enhance
                communication, and provide an enriched learning experience.
                Discover how we're marrying education and innovation.{" "}
              </p>
            </div>
            <Image src={student} className="h-[540px] w-auto" alt="image1" />
          </div>

          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <div className="flex flex-col">
              <h1 className="head_text text-5xl mb-5">
                Choose Edtus for a Brighter Tomorrow{" "}
              </h1>
              <p className="wrap text-xl">
                Join us in shaping the educational landscape. Edtus is more than
                software; it's a partnership in progress. By choosing Edtus,
                you're choosing to revolutionize education. Experience the
                benefits of cutting-edge technology, personalized learning, and
                a future-focused approach.{" "}
              </p>
            </div>
            <Image src={student} className="h-[540px] w-auto" alt="image1" />
          </div>

          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <div className="flex flex-col">
              <h1 className="head_text text-5xl mb-5">Experience Edtus </h1>
              <p className="wrap text-xl">
                Get a sneak peek into the future of education with Edtus.
                Visualize a user-friendly interface that streamlines tasks,
                empowers students, and enriches the teaching experience. Explore
                upcoming app features that will revolutionize classrooms.
                Immerse yourself in education reimagined.{" "}
              </p>
            </div>
            <Image src={student} className="h-[540px] w-auto" alt="image1" />
          </div>
        </Carousel>

        <div className="flex w-4/5 justify-start my-5">
          <button className="text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] hover:outline hover:order-1 px-3 py-2 text-2xl">
            {`Survey Form ->`}{" "}
          </button>
        </div>
      </div>
    );
  }
}
