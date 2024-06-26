'use client'
import { FaFileAlt } from "react-icons/fa";
import Resume from "./Resume";
import { useState } from "react";

const ResumeClient = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
        <Resume modal={modal} toggle={toggle} />
        <div className="cv-download">
            <button
                onClick={toggle}
                className="button1 social-link"
                style={{
                fontSize: "25px",
                fontFamily: "var(--font-base)",
                }}
            >
                <FaFileAlt />
                Resume
            </button>
        </div>
        </>
    )
    
}

export default ResumeClient;