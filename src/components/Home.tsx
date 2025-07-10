import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

const milestones = [
  { title: "Game Development", subtitle: "Unity & C# - where it all started" },
  { title: "Algorithms in C++", subtitle: "Mastered logic and problem solving with C++" },
  { title: "Frontend Web", subtitle: "Built interactive UIs with HTML, CSS, JavaScript" },
  { title: "Fullstack Web", subtitle: "Created complete apps using databases, frameworks, and APIs" },
  { title: "Mobile Dev", subtitle: "Exploring React Native for mobile apps" },
  { title: "UI Design", subtitle: "Currently learning to design interfaces in Figma" },
];

const skills = {
  languages: ["Romanian – Native", "English – B1", "French – Intermediate"],
  traits: ["Sociable", "Hardworking", "Curious learner", "Tech explorer"],
  goals: ["Looking for internships", "Hands-on experience", "Collaboration", "Passionate to grow"],
};

const animatedTitles = ["Hello, I'm Alexandra", "Web Developer", "Mobile Developer", "UI Designer"];

const education = [
  {
    title: "Theoretical High School \"Alexandru Ioan Cuza\"",
    subtitle: "Intensive Computer Science",
  },
];

const achievements = [
  {
    title: "Frontyard – fullstack virtual campus",
    description:
      "🏆 1st place at Skills for the Future (Feb–May 2025), organized by JA Romania & Deutsche Bank",
  },
];

const experience = [
  {
    period: "2021–2022",
    description: "Wix presentation website for a company",
  },
];

export default function Home() {
  const [currentTitle, cycleTitle] = useCycle(...animatedTitles);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleTitle();
    }, 3000);
    return () => clearInterval(interval);
  }, [cycleTitle]);

  // Scroll listener pentru a arata butonul
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lin sus
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      cycleTitle();
    }, 3000);
    return () => clearInterval(interval);
  }, [cycleTitle]);

  return (
    <div className="min-h-screen text-gray-900 p-8 overflow-x-hidden">
      {/* Animated header */}
      <motion.h1
        key={currentTitle}
        className="text-5xl md:text-7xl font-extrabold text-center mb-24 select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        {currentTitle}
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-40 mb-32">
        {/* Vertical dotted line */}
        <div className="absolute top-24 bottom-0 left-1/2 w-1 border-l-4 border-dotted border-gray-900 -translate-x-1/2" />

        {milestones.map((m, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className="relative w-full max-w-4xl flex items-center"
              style={{ height: 160 }}
            >
              {/* Subtitle left or right */}
              {isEven ? (
                <p
                  className="absolute left-0 w-1/2 text-right pr-12 text-lg font-medium text-gray-900 select-none whitespace-normal max-w-[280px]"
                  style={{ wordBreak: "break-word" }}
                >
                  {m.subtitle}
                </p>
              ) : (
                <p
                  className="absolute right-0 w-1/2 pl-12 text-left text-lg font-medium text-gray-700 select-none whitespace-normal max-w-[280px]"
                  style={{ wordBreak: "break-word" }}
                >
                  {m.subtitle}
                </p>
              )}

              {/* Circle with title centered */}
              <div
                className="bg-gray-50 absolute left-1/2 w-56 h-56 bg-white border-3 border-gray-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                style={{ transform: "translateX(-50%)" }}
              >
                {m.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Education & Achievements */}
      <motion.section
        className="max-w-4xl mx-auto mb-24 px-6 py-8 bg-gray-50 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 select-none">
          Education & Achievements
        </h2>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-700">Education</h3>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="mb-4"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="font-semibold text-lg text-gray-800">{edu.title}</p>
              <p className="text-gray-600">{edu.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-700">Achievements</h3>
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              className="mb-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="font-semibold text-lg text-gray-800">{ach.title}</p>
              <p className="text-gray-600">{ach.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-700">Experience</h3>
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="font-semibold text-lg text-gray-800">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills section */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white border border-gray-300 rounded-xl shadow p-6"
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-gray-800 capitalize">
              {category}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 rounded-lg shadow px-4 py-3 flex items-center justify-center text-gray-700 font-medium select-none text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
        {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-700 focus:outline-none"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </div>
    
  );
}
