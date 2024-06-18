import React from 'react'

const res = [
  {
    id:1,
    val: "NextBase"
  }
]


const follow = [
  {
    id:1,
    val: "Github"
  },
  {
    id:2,
    val: "Twitter"
  },
]


const legal = [
  {
    id:1,
    val: "Privacy Policy"
  },
  {
    id:2,
    val: "Terms & Conditions"
  },
  // {
  //   id:3,
  //   val: "Twitter"
  // },
]



const Footer = () => {
  return (
    <>
     <div className="bg-foreground min-h-[200px] text-background">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2>Bounty</h2>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer