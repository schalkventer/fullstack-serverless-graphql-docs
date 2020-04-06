import React from "react"
import HeadingOne from "../typography/HeadingOne"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"
import HeroImage from "../../images/hero_image.svg"
const Hero = () => (
  <>
    <div className="flex lg:flex-row s:flex-col text-left">
      <div className="p-10 mr-10">
        <HeadingOne className="mb-10 ">
          Build a fullstack serverless GraphQL App!
        </HeadingOne>
        <img src={HeroImage} alt="hero image" className="lg:hidden mb-10 " />

        <BodyOne className="mb-10">
          The way APIs are built and the tools that are used to consume them
          have have changed drastically over the years. This free resource is
          your chance to learn how to build a GraphQL API in a serverless
          environment on AWS Lambda and consume it on a Vue.JS frontend based on
          a design system using Apollo. Everything you learn here will not be a
          waste of time, it is 100% reproducible for production use cases.{" "}
        </BodyOne>
        <RedBlockButton>Learn now!</RedBlockButton>
      </div>
      <div>
        <img src={HeroImage} alt="hero image" className="s:hidden lg:block" />
      </div>
    </div>
  </>
)

export default Hero