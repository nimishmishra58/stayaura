import { useState } from "react";
import SideNav from "../SideNav/SideNav";
import logoImage from "/logo.png";
import { useNavigate } from "react-router-dom";
import LandlordEnquiryModal from "../../components/LandlordEnquiryModal/LandlordEnquiryModal";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isLandlordModalOpen, setIsLandlordModalOpen] = useState(false);
    const navigate = useNavigate();

    const openLandlordModal = () => {
        setOpen(false);
        setIsLandlordModalOpen(true);
    };

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
                        <button className="primary-btn" onClick={openLandlordModal}>Let Your Property</button>
                        <button className="primary-btn" onClick={()=>navigate("https://booking.stayaura.com/")}>Book Your Stay</button>
                    </div>
                </div>


            </header>

            {/* SIDE NAV */}
            <SideNav open={open} onClose={() => setOpen(false)} onLetYourProperty={openLandlordModal} />
            <LandlordEnquiryModal
                isOpen={isLandlordModalOpen}
                onClose={() => setIsLandlordModalOpen(false)}
                heading="Landlord Enquiry"
                service="General Landlord Enquiry"
            />
        </>
    );
};

export default Navbar;
