import React from "react"
import constants from "../../constants"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
const Partners = () => {
  return (
    <>
      <HeadingThree>
        To make a bleeding edge appilcation you need amazing providers to make
        it imaginable and practical
      </HeadingThree>
      <div className="grid grid-cols-3 gap-2">
        {constants.partners.map((p, i) => (
          <div className="flex flex-col" key={i}>
            <img src={p.logo} alt="partners" />
            <BodyOne>{p.use}</BodyOne>
          </div>
        ))}
      </div>
    </>
  )
}

export default Partners