export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};
export const projects: Project[] = [
  {
    title: "ToDo App",
    description: "Task manager modern cu React. IN BUILDING",
    link: "https://github.com/tu/todo-app",
    image: "https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg", // adaugă o imagine reală în public/
  },
  {
    title: "E-Commerce",
    description: "Platformă de vânzări online. IN BUILDING",
    link: "https://github.com/tu/ecommerce",
    image: "https://cdn.shopify.com/s/files/1/0070/7032/files/shift4shop_platform_screenshot.png?v=1750706356", // adaugă o imagine reală în public/
  },
   {
    title: "Online Campus",
    description: "Frontyard web app- campus online for students at Highschool.",
    link: "https://frontyard-app.vercel.app/",
    image: "frontyard.jpg", // adaugă o imagine reală în public/
  },
  {
    title:"bookstore app",
    description: "A simple bookstore app built with React and Node.js. IN BUILDING",
    link: "https://github.com/tu/ecommerce",
    image: "https://cdn.dribbble.com/userupload/34092588/file/original-4b6514a1a829e17377e684fae72a64f3.jpg?format=webp&resize=400x300&vertical=center", // adaugă o imagine reală în public/
  }
  ,{
    title:"BMI calculator",
    description: "A simple BMI calculator built with React. IN BUILDING",
    link: "",
    image: "https://www.appypie.com/blog/wp-content/uploads/2025/02/Best-BMI-Calculator-Apps-1-1-768x390-1.jpg", // adaugă o imagine reală în public
  },
  {
    title: "Presenting writer Camil Petrescu",
    description: "A simple website for a Romanian writer, Camil Petrescu. It includes his biography, works, and a contact form. Homework for the school. ",
    link: "https://tema-umber.vercel.app/",
    image: "camil.jpg", // adaugă o imagine reală în public/
  }
  ,{
    title : "Recipes app",
    description: "A simple recipes app built with React and Node.js. IN BUILDING", 
    link: "",
    image: "/recipes-thumbnail.jpg", // adaugă o imagine reală în public/
  }
  ,{
    title: "Wallet app- React Native",
    description: "A simple fullstack wallet app built with React Native. IN BUILDING ",
    link: "",
    image: "https://cdn.prod.website-files.com/5e305a6cb7083222527a89cc/628e592dfb9e33796da4a9fb_Aspiration%20Send%20and%20receive%20money.jpeg", // adaugă o imagine reală în public/
  },
  {
    title: "Green net",
    description: "A simple website designed for a company",
    link: "https://greennet.ro/ro/acasa/",
    image: "greennet.jpg", // adaugă o imagine reală în public/
  }
  ,{
    title: "Invoice Generator",
    description: "A simple app for creating PDF bills for a small business.",
    link: "",
    image: "/create-bills-thumbnail.jpg", // adaugă o imagine reală în public/
  }
];