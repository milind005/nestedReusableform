import { NavLink, Outlet } from "react-router-dom"
const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to={"login"}>
                            Login
                        </NavLink>
                        <NavLink className="nav-link" to={"signIn"}>
                            signIn
                        </NavLink>
                        <NavLink className="nav-link" to={"OrderForm"}>
                            Order
                        </NavLink>
                        <NavLink className="nav-link" to={"FileUploadForm"}>
                            FileUploadForm
                        </NavLink>

                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
    </>


    )
}

export default Navbar