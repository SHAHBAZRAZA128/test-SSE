
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


const PlatformPage = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1); // Remove the '#' from the hash
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <div>
            <h1>Platforms</h1>
            <section id="inspection">
                <h1>Inspections,audits, and checklists</h1>
                <p>Temporary section for checking</p>
            </section>
            <section id="training">
                <h1>Training</h1>
                <p>Temporary section for checking</p>
            </section>
            <section id="assets">
                <h1>Assets</h1>
            </section>
            <section id="issues">
                <h1>Issue Reporting</h1>
                <p>Temporary section for checking</p>
            </section>
            <section id="tasks">
                <h1>Tasks</h1>
                <p>Temporary section for checking</p>
            </section>
            <section id="heads-up">
                <h1>Communications</h1>
                <p>Temporary section for checking</p>
            </section>


        </div>


    )




}
export default PlatformPage