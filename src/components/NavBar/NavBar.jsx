import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-purpleColor">
                <strong>Career</strong>Quest
            </h1>
        </div>

        <div className="menu flex gap-8">
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">Jobs</li>
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">Companies</li>
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">About</li>
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">Contact</li>
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">Blog</li>
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">Login</li>
            <li className="menulist text-[#6f6f6f] hover:text-purpleColor">Register</li>
        </div>
    </div>
  )
}

export default NavBar