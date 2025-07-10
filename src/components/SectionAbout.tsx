
export default function SectionAbout() {
  const skills = [
    { name: "React", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s", link: "https://reactjs.org/" },
    { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", link: "https://www.typescriptlang.org/" },
    { name: "Node.js", img: "https://images.seeklogo.com/logo-png/26/1/node-js-logo-png_seeklogo-269242.png", link: "https://nodejs.org/" },
    { name: "Tailwind CSS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s", link: "https://tailwindcss.com/" },
    { name: "Next.js", img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png", link: "https://nextjs.org/" },
    { name: "Figma", img: "https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o", link: "https://www.figma.com/" },
    { name: "Postman", img: "https://avatars.slack-edge.com/2024-04-05/6934042159649_ac803d1cddbcbef8f110_512.png", link: "https://www.postman.com/" },
    { name: "Git", img: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png", link: "https://git-scm.com/" },
    { name: "Prisma", img: "https://repository-images.githubusercontent.com/321867901/758be33a-086d-4cca-b10f-b605138c764d", link: "https://www.prisma.io/" },
    { name: "Vercel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFggf9yNRN9xCYku8XMEkSE0LU9uMhkYbehQ&s", link: "https://vercel.com/" },
    { name: "PostgreSQL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IXwKzFX5rsC69QTPRId5cffVuNNlvMxEpw&s", link: "https://www.postgresql.org/" },
    { name: "React Native", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMye1SIgoKEJA4EuRc8LMGj_HtfJPnVpvJQ&s", link: "https://reactnative.dev/" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-10 sm:px-0">
      <div className="bg-white/90 rounded-3xl shadow-lg w-full max-w-6xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-12 mt-5 mb-5">
          {/* Poza stânga DOAR pe desktop */}
          <div className="w-full md:w-1/3 hidden md:flex items-center justify-center">
            <img src="pic1.jpg" alt="Profile" className="rounded-2xl w-full h-auto object-cover" />
          </div>

          {/* Text dreapta */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-extrabold mb-6">About me</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              I&apos;m a high school student (final year) and passionate full-stack software developer with a strong focus on modern web and mobile applications. I&apos;m fluent in Romanian (native), speak English confidently, and have an intermediate level in French.
              I enjoy collaborating, speaking, designing beautiful interfaces, organizing codebases, and helping with team projects. I&apos;m driven by clean code, scalable design, and constantly improving across both frontend and backend. My usual stack includes Next.js, React/React Native, TypeScript, Node.js, and Tailwind CSS, PostgreSQL 
              but I&apos;m always eager to learn new technologies and frameworks.
            </p>
          </div>
        </div>

        {/* Skill-uri */}
        <div className="mt-12 w-full flex flex-col items-center gap-10 px-0">
          {/* Rândul 1 */}
          <div className="flex flex-wrap justify-center gap-6">
            {skills.slice(0, 6).map(({ name, img, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md bg-gray-100 flex items-center justify-center transform transition duration-200 hover:scale-105 active:scale-110"
                title={name}
              >
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>

          {/* Rândul 2 */}
          <div className="flex flex-wrap justify-center gap-6">
            {skills.slice(6).map(({ name, img, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md bg-gray-100 flex items-center justify-center transform transition duration-200 hover:scale-105 active:scale-110"
                title={name}
              >
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
