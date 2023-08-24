import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <div className="fixed top-0 w-full bg-blue-300 h-16 flex items-center px-4">
            <ul>
                <li>
                    <NavLink to='/' >Brand</NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}
