"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { logo } from "@/assests";
import Image from "next/image";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="w-4/5 mx-32 h-3/5 mt-5">
        <h1 className=" text-5xl mb-4">Welcome to Edtus</h1>
        <Carousel autoPlay showStatus={false} showThumbs={false} infiniteLoop={true}>

          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <p className="wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac ligula et dui lobortis aliquam. Mauris consectetur
              pulvinar dolor ut ullamcorper. Morbi ac congue ante. Quisque
              laoreet molestie est ut viverra. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;{" "}
            </p>
            <Image src={logo} width={600} height={500}  alt="image1" />
          </div>
          
          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <p className="wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac ligula et dui lobortis aliquam. Mauris consectetur
              pulvinar dolor ut ullamcorper. Morbi ac congue ante. Quisque
              laoreet molestie est ut viverra. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;{" "}
            </p>
            <Image src={logo} width={600} height={500} alt="image1" />
          </div>
          
          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <p className="wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac ligula et dui lobortis aliquam. Mauris consectetur
              pulvinar dolor ut ullamcorper. Morbi ac congue ante. Quisque
              laoreet molestie est ut viverra. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;{" "}
            </p>
            <Image src={logo} width={600} height={500} alt="image1" />
          </div>
          
          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <p className="wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac ligula et dui lobortis aliquam. Mauris consectetur
              pulvinar dolor ut ullamcorper. Morbi ac congue ante. Quisque
              laoreet molestie est ut viverra. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;{" "}
            </p>
            <Image src={logo} width={600} height={500} alt="image1" />
          </div>
          
          <div className="flex flex-row p-5 justify-between align-middle items-center">
            <p className="wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac ligula et dui lobortis aliquam. Mauris consectetur
              pulvinar dolor ut ullamcorper. Morbi ac congue ante. Quisque
              laoreet molestie est ut viverra. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;{" "}
            </p>
            <Image src={logo} width={600} height={500} alt="image1" />
          </div>
          
        </Carousel>
      </div>
    );
  }
}
