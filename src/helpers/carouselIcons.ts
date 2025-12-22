import { skillIcons } from '../assets';
import type { CarouselIcon } from '../interfaces';

export const carouselIcons: CarouselIcon[] = [
  {
    id: 1,
    src: skillIcons.git,
    alt: 'Git',
    summary:
      'Sistema de controle de versão distribuído amplamente utilizado. Permite o gerenciamento de projetos de forma colaborativa.',
    doc: 'https://git-scm.com/doc',
  },
  {
    id: 2,
    src: skillIcons.html,
    alt: 'HTML',
    summary:
      'Linguagem de marcação usada para estruturar e apresentar conteúdo. É a base de qualquer página da web.',
    doc: 'https://developer.mozilla.org/docs/Web/HTML',
  },
  {
    id: 3,
    src: skillIcons.css,
    alt: 'CSS',
    summary:
      'Linguagem de estilo usada para definir a aparência e o layout dos elementos em uma página da web.',
    doc: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  {
    id: 4,
    src: skillIcons.javascript,
    alt: 'JavaScript',
    summary:
      'Linguagem de programação usada para adicionar interatividade e comportamentos à páginas da web. Também é amplamente utilizado no desenvolvimento de aplicativos web.',
    doc: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  {
    id: 5,
    src: skillIcons.react,
    alt: 'ReactJS',
    summary:
      'Biblioteca JavaScript de código aberto para criar interfaces de usuário. É amplamente utilizado para desenvolvimento de aplicativos web de página única (SPA).',
    doc: 'https://reactjs.org/docs',
  },
  {
    id: 6,
    src: skillIcons.vuejs,
    alt: 'VueJS',
    summary:
      'Framework JavaScript progressivo para construir interfaces de usuário. É flexível e eficiente para a criação de aplicativos web interativos.',
    doc: 'https://vuejs.org/v2/guide/',
  },
  {
    id: 7,
    src: skillIcons.redux,
    alt: 'Redux',
    summary:
      'Biblioteca de gerenciamento de estado para aplicativos JavaScript. É comumente usado com bibliotecas e frameworks como React ou Angular.',
    doc: 'https://redux.js.org/introduction/getting-started',
  },
  {
    id: 8,
    src: skillIcons.jest,
    alt: 'Jest',
    summary:
      'Framework de teste de JavaScript com foco na simplicidade. É usado para testar aplicativos e bibliotecas JavaScript.',
    doc: 'https://jestjs.io/docs/en/getting-started',
  },
  {
    id: 9,
    src: skillIcons.testingLibrary,
    alt: 'Testing Library',
    summary:
      'Conjunto de bibliotecas para escrever testes de JavaScript mais legíveis e sustentáveis. Ela promove uma abordagem centrada no usuário para testes.',
    doc: 'https://testing-library.com/docs/',
  },
  {
    id: 10,
    src: skillIcons.typescript,
    alt: 'TypeScript',
    summary:
      'Linguagem de programação de código aberto que é um superconjunto de JavaScript. Adiciona tipagem estática opcional e outros recursos ao JavaScript.',
    doc: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 11,
    src: skillIcons.docker,
    alt: 'Docker',
    summary:
      'Plataforma de contêiner que permite criar, implantar e executar aplicativos de forma isolada. Facilita a implantação de aplicativos em diferentes ambientes.',
    doc: 'https://docs.docker.com/',
  },
  {
    id: 12,
    src: skillIcons.nodejs,
    alt: 'Node.js',
    summary:
      'Ambiente de tempo de execução JavaScript que permite executar JavaScript fora do navegador. É usado para criar aplicativos de servidor e ferramentas de linha de comando.',
    doc: 'https://nodejs.org/en/docs/',
  },
  {
    id: 13,
    src: skillIcons.golang,
    alt: 'Go',
    summary:
      'Linguagem de programação de código aberto criada pelo Google. É conhecida por sua simplicidade, eficiência e desempenho.',
    doc: 'https://golang.org/doc/',
  },
  {
    id: 14,
    src: skillIcons.java,
    alt: 'Java',
    summary:
      'Linguagem de programação de propósito geral amplamente usada. É conhecida por sua portabilidade, segurança e robustez.',
    doc: 'https://docs.oracle.com/en/java/',
  },
  {
    id: 15,
    src: skillIcons.python,
    alt: 'Python',
    summary:
      'Linguagem de programação de alto nível com uma sintaxe simples e legível. É usada em vários domínios, desde desenvolvimento web até ciência de dados.',
    doc: 'https://docs.python.org/3/',
  },
  {
    id: 16,
    src: skillIcons.mysql,
    alt: 'MySQL',
    summary:
      'Sistema de gerenciamento de banco de dados relacional amplamente utilizado. É conhecido por sua confiabilidade, escalabilidade e facilidade de uso.',
    doc: 'https://dev.mysql.com/doc/',
  },
  {
    id: 17,
    src: skillIcons.mongodb,
    alt: 'MongoDB',
    summary:
      'Banco de dados NoSQL orientado a documentos. É escalável, flexível e permite o armazenamento de dados sem a necessidade de um esquema fixo.',
    doc: 'https://docs.mongodb.com/',
  },
  {
    id: 18,
    src: skillIcons.linux,
    alt: 'Linux',
    summary:
      'Sistema operacional de código aberto conhecido por sua estabilidade, segurança e flexibilidade, sendo usado em servidores, dispositivos embarcados e muito mais.',
    doc: 'https://www.linux.org/docs/',
  },
  {
    id: 19,
    src: skillIcons.dotnet,
    alt: '.NET',
    summary:
      'Plataforma de desenvolvimento mantida pela Microsoft para criação de aplicações robustas e escaláveis. Suporta múltiplas linguagens, como C#, e é amplamente utilizada no desenvolvimento de APIs, aplicações web, desktop e serviços.',
    doc: 'https://learn.microsoft.com/dotnet/',
  },
  {
    id: 20,
    src: skillIcons.vitest,
    alt: 'Vitest',
    summary:
      'Framework de testes unitários rápido e moderno, integrado ao ecossistema Vite. Oferece API compatível com Jest, execução paralela e excelente suporte a TypeScript.',
    doc: 'https://vitest.dev/',
  },
];
