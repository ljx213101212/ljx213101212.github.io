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

const EPAM = {
  name: 'EPAM Systems',
  link: 'https://www.epam.com/',
} as Company;
const RAZER = {
  name: 'Razer',
  link: 'https://www.razer.com/',
} as Company;
const DHI = {
  name: 'DHI',
  link: 'https://www.dhigroup.com/',
} as Company;

export const epamProject = {
  company: EPAM.name,
  link: EPAM.link,
  vendor: 'Singapore/August 2021 - Present',
  vendorLink: '',
  tasks: [
    'Main developer for Microsoft Xbox Application for Console Peripheral devices (C++ / JavaScript)',
    'Main developer for the Alexa module and cooperate with AWS Alexa team. (JavaScript / WebRTC)',
    'Design and Implement ReactJS/Redux projects for Peripheral devices and experienced in Unit Test framework (JEST).',
    'Experienced in code bug fix and code refactoring on windows DLL projects for Peripheral devices. (C++ / Windows SDK)',
    'Experienced in firmware protocol analysis. (Wireshark/Bushound)',
    'Refactoring Redux Store structure and integrate Typescript into on-going projects. (React/Redux/TypeScript)',
    'Refactoring on-going projects by adding Xstate finite state machine to manage the device state. (TypeScript/Xstate)',
  ],
} as Project;

export const razerProject = {
  company: RAZER.name,
  link: RAZER.link,
  vendor: 'Singapore/June 2018 - Singapore/August 2021',
  vendorLink: '',
  tasks: [
    'Main developer for Microsoft Xbox Application for Console Peripheral devices (C++ / JavaScript)',
    'Main developer for the Alexa module and cooperate with AWS Alexa team. (JavaScript / WebRTC)',
    'Design and Implement ReactJS/Redux projects for Peripheral devices and experienced in Unit Test framework (JEST).',
    'Experienced in code bug fix and code refactoring on windows DLL projects for Peripheral devices. (C++ / Windows SDK)',
    'Experienced in firmware protocol analysis. (Wireshark/Bushound)',
    'Refactoring Redux Store structure and integrate Typescript into on-going projects. (React/Redux/TypeScript)',
    'Refactoring on-going projects by adding Xstate finite state machine to manage the device state. (TypeScript/Xstate)',
  ],
} as Project;

export const dhiProject = {
  company: DHI.name,
  link: DHI.link,
  vendor: 'Singapore / August 2016 – June 2018',
  vendorLink: '',
  tasks: [
    'As a full-stack programmer in two web projects by using Polymer 1&2, .NET4.5 API, PostgreSQL, Couch DB.',
    'As a frontend programmer in one web project by using .NET MVC5, Vanilla JavaScript/jQuery.',
    'As a team member lead by a senior in one web project by using .NET MVC CORE2.0, Entity Framework',
    'As a software developer Produced many console applications tools by using C# for operational use.',
  ],
} as Project;

export const epamExp = {
  title: 'Software Engineer',
  company: EPAM.name,
  companyLink: EPAM.link,
  startTime: 'September 2021',
  endTime: 'Present',
  location: 'Singapore',
  tasks: [
    'Work seamlessly with UX developer to develop Web UI (React/Redux/TypeScript)',
    'Design Robust Unit test cases with QA developers(RTL/Jest)',
    'Mentoring Junior Developer with the concept of software design and basic tooling.',
    'Helped the product owner to expand the business from 1 to 3 regions/markets.',
  ],
} as Experience;

export const razerExp = {
  title: 'Software Engineer',
  company: RAZER.name,
  companyLink: RAZER.link,
  startTime: 'June 2018',
  endTime: 'August 2021',
  location: 'Singapore',
  tasks: razerProject.tasks,
} as Experience;

export const dhiExp = {
  title: 'Software Developer',
  company: DHI.name,
  companyLink: DHI.link,
  startTime: 'Aug 2016',
  endTime: 'May 2018',
  location: 'Singapore',
  tasks: dhiProject.tasks,
} as Experience;
