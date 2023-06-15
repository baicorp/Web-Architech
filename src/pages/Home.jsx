import React from "react";
import { Card, Button, Feature, Logo } from "../components";

function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-6 xl:flex xl:items-center">
        <div className="max-w-[630px] xl:max-w-[490px] xl:mr-10 flex flex-col mx-auto">
          <h1 className="text-[40px] font-[900] text-center xl:text-start -tracking-[1px] leading-[48.5px] lg:leading-[60px] lg:text-[56px]">
            Medium Length Display headline
          </h1>
          <p className="text-lg text-center xl:text-start mt-6 mb-8 leading-[28px]">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6 items-center xl:justify-start">
            <Button small dark />
            <p className="text-center font-semibold text-sm leading-7 my-6">
              5,000 people like you have purchased this product!
            </p>
          </div>
        </div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./images/heroImg-Tablet(S)-744px.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="./images/heroImg-Tablet-1024px.jpg"
          />
          <source
            media="(min-width: 1440px)"
            srcSet="./images/heroImg-Tablet-1440px.jpg"
          />
          <source
            media="(min-width: 1528px)"
            srcSet="./images/heroImg-Wide-1440px+.jpg"
          />
          <img
            className="rounded-lg mb-[21px] w-full h-[309px] md:h-auto lg:h-[450px] xl:h-[428px] xl:mb-16 object-cover mx-auto"
            src="./images/heroImg-Mobile-375px.jpg"
            alt="Hero image"
          />
        </picture>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="max-w-[1140px] lg:flex lg:justify-between mx-auto ">
          <Feature />
          <Feature />
          <Feature />
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-[1140px] mx-auto p-6 lg:space-y-16 lg:py-[69px] xl:space-y-0 xl:flex xl:items-center xl:justify-between xl:space-x-32">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="./images/secondSectionImg-Tablet(S)-744px.jpg"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="./images/secondSectionImg-Tablet-1024px.jpg"
            />
            <source
              media="(min-width: 1440px)"
              srcSet="./images/secondSectionImg-Tablet-1440px.jpg"
            />
            <source
              media="(min-width: 1528px)"
              srcSet="./images/secondSectionImg-Wide-1440px+.jpg"
            />
            <img
              className="h-[192px] md:h-[550px] rounded-lg mb-[21px] w-full xl:h-auto xl:m-auto object-cover mx-auto"
              src="./images/secondSectionImg-Mobile-375px.jpg"
              alt="Hero image"
            />
          </picture>
          <div className="lg:flex lg:justify-between xl:flex-col xl:space-x-0">
            <h3 className="mx-auto font-[900] text-white text-center leading-[32px] -tracking-[0.1px] md:text-2xl md:leading-8 lg:max-w-[410px] lg:text-start lg:mx-0 xl:max-w-full">
              Long headline on two lines to turn your visitors into users and
              achieve more
            </h3>
            <div>
              <p className="mx-auto text-white py-[14px] md:py[28px] md:max-w-[600px] lg:py-0 lg:pb-[14px] lg:text-start text-center text-sm leading-6 tracking-[0.1px] lg:max-w-[380px] lg:mx-0">
                Separated they live in Bookmarks right at the coast of the
                famous Semantics, large language ocean
              </p>
              <ul className="ml-4 space-y-1 list-outside text-white text-center list-disc text-sm leading-6 tracking-[0.1px] lg:text-start">
                <li>Showcase and embed your work with </li>
                <li>Publish across social channels in a click</li>
                <li>Sell your videos worldwide</li>
                <li>Embed your work with </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1140px] p-6 xl:py-24">
          <div>
            <div className="md:hidden flex justify-center">
              <Card />
            </div>
            <div className="hidden md:flex md:justify-center gap-4 lg:hidden">
              <Card />
              <Card />
            </div>
            <div className="hidden lg:flex lg:justify-between">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="space-x-2 flex justify-center mt-[30px] xl:hidden">
              <div className="w-3 h-3 rounded-full bg-[#F3F3F3]"></div>
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <div className="w-3 h-3 rounded-full bg-[#F3F3F3]"></div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="h-[500px] bg-cover bg-no-repeat bg-[url('../images/CTAImg-Mobile-375px.jpg')] md:bg-[url('../images/CTAImg-Tablet(S)-744px.jpg')] lg:h-[588px] lg:bg-[url('../images/CTAImg-Desktop-1440px.jpg')] xl:bg-[url('../images/CTAImg-Wide-1440px+.jpg')]">
        <div className="h-full flex flex-col items-center justify-center space-y-3 lg:space-y-[32px]">
          <h2 className="text-white text-center max-w-[247px] font-[900] text-[1.75rem] leading-[48px] -tracking-[0.5px] md:max-w-[500px] lg:max-w-[400px]">
            Long Headline to turn your Visitors into user
          </h2>
          <Button small />
        </div>
      </section>
    </>
  );
}

export default Home;
