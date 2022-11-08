import React from "react"
import cv from "../assets/resume.ico"
export default function Header() {
  return <div className="fixed flex item-center justify-center w-full pt-8  text-white">
    <div className="bg-[#22222e] flex items-center justify-center  space-x-3 h-16 w-[20rem] rounded-[1.5rem] border border-gray-500">
      <div>
        <p>📁 Project</p>
      </div>
      <div>
        <p>💼 CV</p>
      </div>
      <div>
        <p>📞 Contact</p>
      </div>
    </div>
  </div >

}