

export default function SectionContact() {
  return (
    <section className="min-h-screen flex items-start justify-center pt-10 px-4">
      <div className="bg-white/90 rounded-3xl shadow-lg max-w-6xl w-full flex flex-col md:flex-row gap-10 p-10 py-[9%]">
        
        {/* Stânga - Informații de contact */}
        <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left md:pl-10">
          <h2 className="text-4xl font-extrabold mb-6">Contact</h2>
          <p className="text-lg text-gray-800 mb-3">
            <strong>Name:</strong> Alexandra Ghita
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <strong>Status:</strong> Highschool senior student (12th grade) at Computer Science, High School &apos;Alexandru Ioan Cuza&apos; in Bucharest, Romania.
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <strong>Email:</strong>{" "}
            <a href="mailto:alexandra.ghita1005@gmail.com" className="text-blue-600 underline">
             alexandra.ghita1005@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Alexandra1052" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
             github.com/Alexandra1052
            </a>
          </p>
        
        </div>

        {/* Dreapta - Poză */}
     <img
  src="/contact.jpg"
  alt="Poza de profil"
  width={400}
  height={500}
  
  className="rounded-2xl object-cover"
/>

      </div>
    </section>
  );
}
