import React from "react";
import { Project } from "./projects";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl p-6 w-[90%] max-w-md shadow-xl relative text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
          >
            ×
          </button>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl shadow mb-4"
          />

          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            {project.title}
          </h3>

          <p className="text-gray-700 mb-4">{project.description}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Go to website
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
