import { Link, Outlet } from "react-router-dom"

export default function Analytics() {
  return (
    <div className="bg-slate-400">
        <div className="text-center pb-20 max-w-4xl mx-auto">
            <p className="text-2x1 pt-10 mb-6">Here is the company analytics</p>
            <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, corporis alias vero fugit corrupti dignissimos iure quisquam fuga aliquid, officia placeat incidunt ex natus est. Earum, quam! Eveniet, facilis deserunt.</p>
            <nav className="">
                <Link
                 to="/analytics/development"
                 className="mx-2 font-semibold text-lg"
                 >Development</Link>
                <Link
                 to="/analytics/cybersecurity"
                 className="mx-2 font-semibold text-lg"
                 >Cyber Security</Link>
                <Link
                 to="/analytics/uiux"
                 className="mx-2 font-semibold text-lg"
                >UI/UX</Link>
            </nav>
            <Outlet />
        </div>
    </div>
  )
}