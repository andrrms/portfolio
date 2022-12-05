export const Stack = {
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  NODEJS: "Node.js",
  REACTJS: "React.js",
};

export const Type = {
  BACKEND: "backend",
  FRONTEND: "frontend",
  FULLSTACK: "fullstack",
};

const projects = [
  {
    id: 1,
    name: "NuKenzie",
    description: "O NuKenzie foi um projeto muito legal porque X, Y e Z.",
    images: [],
    stack: [Stack.JAVASCRIPT, Stack.REACTJS],
    type: Type.FRONTEND,
    url: "www.nu-kenzie-rho.vercel.app", 
    repo: "",
  },
];

export default projects;
