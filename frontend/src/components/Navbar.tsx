import logopng from "../assets/logo.png"
import { Bell, Plus, Settings, User } from "lucide-react"

const Navbar = () => {
  const NavLink = [
    {
      "name": "Dashboard",
      "link": "/"
    },
    {
      "name": "Projects",
      "link": "/projects"
    },
    {
      "name": "Teams",
      "link": "/teams"
    },
    {
      "name": "Reports",
      "link": "/reports"
    },
  ]
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-slate-800 bg-slate-950/85 px-5 py-2 text-slate-100 backdrop-blur-xl">
      <div className="flex items-center">
        {/* Title */}
        <div className="flex items-center gap-2 font-semibold tracking-wide text-cyan-300">
          <img className="h-10 w-10" src={logopng} alt="DevFlow logo" />
          DevFlow
        </div>
        {/* Nav Links */}
        <div className="flex gap-5 pl-5">
          {NavLink && NavLink.map((nav) =>
            <a key={nav.link} className="text-slate-300 transition-colors hover:text-cyan-300" href={nav.link}>{nav.name}</a>
          )}
        </div>
      </div>

      <div className="flex gap-10 items-center">
        {/* Notification and Settings */}
        <div className="flex items-center gap-3 text-slate-300">
          <Bell className="transition-colors hover:text-cyan-300" />
          <Settings className="transition-colors hover:text-cyan-300" />
        </div>
          <p className="text-2xl text-slate-700">|</p>

        {/* New Project and Profile */}
        <div className="flex gap-3 items-center">
          <div className="rounded-md bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/25 transition-colors hover:bg-cyan-400">
            <p className="flex items-center gap-1 p-1 font-medium"><Plus /> New Project</p>
          </div>
          <User className="text-slate-300 transition-colors hover:text-cyan-300" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
