export const Stack = {
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  NODEJS: "Node.js",
  REACTJS: "React.js",
};

export const Type = {
  BACKEND: "Back-end",
  FRONTEND: "Front-end",
  FULLSTACK: "Full Stack",
};

const projects = [
  {
    id: 1,
    name: "NuKenzie",
    description: "Uma aplicação para controle simples de gastos financeiros",
    images: [],
    stack: [Stack.JAVASCRIPT, Stack.REACTJS],
    type: Type.FRONTEND,
    url: "https://nu-kenzie-rho.vercel.app/",
    repo: "",
  },
  {
    id: 2,
    name: "KenzieHub",
    description: "Uma rede social de tecnologias para devs",
    images: [],
    stack: [Stack.JAVASCRIPT, Stack.REACTJS],
    type: Type.FRONTEND,
    url: "https://s4-09-kenzie-hub.vercel.app/",
    repo: "",
  },
  {
    id: 3,
    name: "Kenzie Burger",
    description: "Um e-commerce de uma loja fast-food",
    images: [],
    stack: [Stack.JAVASCRIPT, Stack.REACTJS],
    type: Type.FRONTEND,
    url: "https://s2-09-burguer-kenzie.vercel.app/",
    repo: "",
  },
  {
    id: 4,
    name: "Calculadora de antecipações",
    description:
      "Uma calculadora simples que realiza o cálculo de antecipações baseadas em um critério específico",
    images: [],
    stack: [Stack.JAVASCRIPT, Stack.REACTJS],
    type: Type.FRONTEND,
    url: "https://calculadora-antecipacao-sandy.vercel.app/",
    repo: "https://github.com/andrrms/calculadora-antecipacao",
  },
  {
    id: 5,
    name: "LetMePay",
    description: "Uma simulação de sistema financeiro feita em equipe",
    images: [],
    stack: [Stack.JAVASCRIPT, Stack.REACTJS],
    type: Type.FULLSTACK,
    url: "https://let-me-pay-front.vercel.app/",
    repo: "https://github.com/M4-Capstone",
  },
];

export default projects;
