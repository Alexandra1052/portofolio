
'use client'
import React from 'react'
import {
  Home,
  User,
  Folder,
  Mail,
} from "lucide-react"; 
import { motion } from 'framer-motion';
type Props={
    onSelect : (value: string) => void;
    activeSection: string;
}
function Navbar({ onSelect, activeSection }: Props) {
   const sections = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'contact', label: 'Contact', icon: Mail },
];
  return (
  <nav className="w-full flex justify-center mt-6 mb-10">
      <div className="relative bg-white shadow-md rounded-full px-4 py-3 flex gap-2 w-full max-w-md justify-center">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className="relative flex items-center justify-center gap-2 px-4 py-1 rounded-full text-sm transition-all"
            >
              {/* Animare fundal activ */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gray-100 rounded-full shadow-md z-0"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <div className="relative z-10 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
                <Icon
                  className="block md:hidden w-5 h-5"
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
                <span className="hidden md:block">{label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  )
}

export default Navbar