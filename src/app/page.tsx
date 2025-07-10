'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SectionAbout from "@/components/SectionAbout";
import SectionProjects from "@/components/SectionProjects";
import SectionContact from "@/components/SectionContact";
import Home from "@/components/Home";
import Section from "@/components/Section";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onSelect={setActiveSection} activeSection={activeSection} />
      <Section>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <SectionAbout />}
        {activeSection === 'projects' && <SectionProjects />}
        {activeSection === 'contact' && <SectionContact />}
      </Section>
    </div>
  );
}
