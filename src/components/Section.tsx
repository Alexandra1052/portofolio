import {motion } from 'framer-motion';
export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    key={Math.random()} // schimbă când se schimbă secțiunea ca să reanimeze
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-10 px-6"
    >
      {children}
    </motion.div>
  );
}