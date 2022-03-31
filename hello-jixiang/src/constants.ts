//Header
export const headerData = {
  links: [
    {
      text: 'Blogs',
      to: '/blogs',
    },
    {
      text: 'About Me',
      to: '/about',
    },
  ] as NavLink[],
  medias: [
    {
      fontAwesomeClassName: 'fa-linkedin',
      link: 'https://github.com/ljx213101212',
    },
    {
      fontAwesomeClassName: 'fa-github',
      link: 'https://www.linkedin.com/in/jixiang-li-89b4a5b6/',
    },
  ] as MediaLink[],
};

//Footer
export const footerData = {
  title: '© 2021 · Powered By the',
  powered1: {
    link: 'https://tailwindcss.com/',
    name: 'tailwindcss',
  },
  powered2: {
    link: 'https://reactjs.org/',
    name: 'React',
  },
};

export const quotes = [
  {
    quote: 'The essential thing is not to have conquered but to have fought well.',
    author: 'Pierre de Coubertin',
  },
] as Quote[];

export const LABELS = {
  ON_GOING: 'On Going',
};
const EPAM = {
  name: 'EPAM Systems',
  link: 'https://www.epam.com/',
  tasks: [
    'Main developer for Microsoft Xbox Application for Console Peripheral devices (C++ / JavaScript)',
    'Main developer for the Alexa module and cooperate with AWS Alexa team. (JavaScript / WebRTC)',
    'Design and Implement ReactJS/Redux projects for Peripheral devices and experienced in Unit Test framework (JEST).',
    'Experienced in code bug fix and code refactoring on windows DLL projects for Peripheral devices. (C++ / Windows SDK)',
    'Experienced in firmware protocol analysis. (Wireshark/Bushound)',
    'Refactoring Redux Store structure and integrate Typescript into on-going projects. (React/Redux/TypeScript)',
    'Refactoring on-going projects by adding Xstate finite state machine to manage the device state. (TypeScript/Xstate)',
  ],
} as Company;
const RAZER = {
  name: 'Razer',
  link: 'https://www.razer.com/',
  tasks: [
    'Main developer for Microsoft Xbox Application for Console Peripheral devices (C++ / JavaScript)',
    'Main developer for the Alexa module and cooperate with AWS Alexa team. (JavaScript / WebRTC)',
    'Design and Implement ReactJS/Redux projects for Peripheral devices and experienced in Unit Test framework (JEST).',
    'Experienced in code bug fix and code refactoring on windows DLL projects for Peripheral devices. (C++ / Windows SDK)',
    'Experienced in firmware protocol analysis. (Wireshark/Bushound)',
    'Refactoring Redux Store structure and integrate Typescript into on-going projects. (React/Redux/TypeScript)',
    'Refactoring on-going projects by adding Xstate finite state machine to manage the device state. (TypeScript/Xstate)',
  ],
} as Company;
const DHI = {
  name: 'DHI',
  link: 'https://www.dhigroup.com/',
  tasks: [
    'As a full-stack programmer in two web projects by using Polymer 1&2, .NET4.5 API, PostgreSQL, Couch DB.',
    'As a frontend programmer in one web project by using .NET MVC5, Vanilla JavaScript/jQuery.',
    'As a team member lead by a senior in one web project by using .NET MVC CORE2.0, Entity Framework',
    'As a software developer Produced many console applications tools by using C# for operational use.',
  ],
} as Company;

const PROJ_LEECODE_ILLUSTRATION = {
  name: 'Leetcode Illustration',
  startTime: '2021-12-05',
  company: 'Personal',
  link: 'https://github.com/ljx213101212/leetcode-illustrations',
  isMajor: true,
} as Project;

const PROJ_CRM_WEB = {
  name: 'CRM WEB (NDA)',
  startTime: '2021-09-01',
  company: EPAM.name,
};
const PROJ_CHROMA_STUDIO = {
  name: 'Chroma Studio',
  startTime: '2020-04',
  endTime: '2020-12',
  company: RAZER.name,
  link: 'https://www.razer.com/chroma',
};
const PROJ_SYNAPSE_ALEXA = {
  name: 'Synapse Alexa',
  startTime: '2019-03',
  endTime: '2019-10',
  company: RAZER.name,
  link: 'https://www.razer.com/chroma/alexa',
};
const PROJ_SYNAPSE_3 = {
  name: 'Synapse 3',
  startTime: '2018-06',
  endTime: '2019-02',
  company: RAZER.name,
  link: 'https://www.razer.com/synapse-3',
};

export const personalProjects = [PROJ_LEECODE_ILLUSTRATION] as Project[];
export const epamProjects = [PROJ_CRM_WEB] as Project[];
export const razerProjects = [PROJ_CHROMA_STUDIO, PROJ_SYNAPSE_ALEXA, PROJ_SYNAPSE_3] as Project[];
export const dhiProject = [] as Project[];

export const epamExp = {
  title: 'Software Engineer',
  company: EPAM.name,
  companyLink: EPAM.link,
  startTime: 'September 2021',
  endTime: 'Present',
  location: 'Singapore',
  tasks: EPAM.tasks,
} as Experience;

export const razerExp = {
  title: 'Software Engineer',
  company: RAZER.name,
  companyLink: RAZER.link,
  startTime: 'June 2018',
  endTime: 'August 2021',
  location: 'Singapore',
  tasks: RAZER.tasks,
} as Experience;

export const dhiExp = {
  title: 'Software Developer',
  company: DHI.name,
  companyLink: DHI.link,
  startTime: 'Aug 2016',
  endTime: 'May 2018',
  location: 'Singapore',
  tasks: DHI.tasks,
} as Experience;
