import React from 'react'
import { NavLink } from 'react-router-dom'

const Patent = () => {
  return (
    <>
        <div className="w-full" style={{ position: "relative" }}>
        <div className="relative w-full h-[200px] sm:h-[315px] overflow-hidden">
          <img
            src="https://www.jsalaw.com/wp-content/uploads/2022/07/Contact-Us-1200x315.jpg"
            alt="Patent"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl font-light text-center">
            Patent
          </div>
        </div>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-3 sm:pt-5">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Patent</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Patent