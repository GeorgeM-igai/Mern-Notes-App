import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-base-content/10 py-4 px-28">
        <h1 className="font-bold tracking-wider text-2xl text-primary">Note Keeper</h1>
        <Link to={"/create"} className="flex items-center gap-1">
            <span className="btn btn-primary p-1"> <PlusIcon /> New Note</span>
        </Link>
    </header>
  )
}

export default Navbar