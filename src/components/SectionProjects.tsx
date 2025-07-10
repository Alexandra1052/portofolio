import { useState } from "react";
import { Project, projects } from "./projects";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function SectionProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white/90 rounded-3xl shadow-lg w-full max-w-6xl h-[700px] p-10 relative flex flex-col">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Projects</h2>

        <div className="flex-1 overflow-y-auto no-scrollbar ">
          <AnimatePresence mode="wait">
            {!selectedProject ? (
              <motion.div
                key="grid"
                layout
                className="grid gap-6 sm:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {projects.map((proj) => (
                  <motion.div
                    key={proj.title}
                    onClick={() => setSelectedProject(proj)}
                    layout
                    className="cursor-pointer bg-white rounded-2xl shadow-md px-4 py-4 transition-transform hover:scale-103 active:scale-95"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-57 object-cover rounded-xl mb-4"
                      width={400}
                      height={300}
                    />
                    <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="project-detail"
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto  "
              >
             

                <div className="text-left">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mb-4 flex items-center gap-2 text-gray-600 hover:text-black transition"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to projects</span>
                  </button>

                  <h3 className="text-3xl font-bold mb-4 text-black">{selectedProject.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">{selectedProject.description}</p>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-gray-700 transition"
                  >
                    Go to website
                  </a>
                </div>
                   <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl shadow"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
