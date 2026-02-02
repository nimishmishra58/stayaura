import { useState } from "react";
import SideNav from "./SideNav";
import logoImage from "/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="navbar">
                <div className="nav-container">

                    {/* LEFT: LOGO */}
                    <div className="nav-left">
                        <button className="menu-btn" onClick={() => setOpen(true)}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="logo-image">
                            <img
                                src={logoImage}
                                alt="StayAura Logo"
                            />
                        </div>
                    </div>

                    {/* RIGHT: ACTIONS */}

                    <div className="nav-actions">
                        <button className="primary-btn">Let Your Property</button>
                        <button className="primary-btn" onClick={()=>window.open("https://booking.stayaura.com/", "_blank")}>Book Your Stay</button>

                    </div>


                </div>


            </header>

            {/* SIDE NAV */}
            <SideNav open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default Navbar;
