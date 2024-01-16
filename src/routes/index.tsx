import { Route, Routes } from "react-router-dom";
import { ProjectSection } from "../components/projectSection";
import { AboutSection } from "../components/aboutSection";
import { ContactSection } from "../components/contactSection";

export function RoutesMain () {

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                    <AboutSection/>
                    <ProjectSection/>
                    <ContactSection/>
                    </>
                }
            />
        </Routes>
    )

}