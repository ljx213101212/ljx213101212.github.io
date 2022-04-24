declare const __APP_VERSION__: string;
interface NavLink {
  text: string;
  to: string;
}

interface MediaLink {
  fontAwesomeClassName: string;
  link: string;
}

interface Experience {
  title: string;
  company: string;
  companyLink?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
}

interface Project {
  name: string;
  company: string;
  isMajor?: boolean;
  startTime?: string;
  endTime?: string;
  link?: string;
  linkRoute?: string;
  tasks?: string[];
  description?: string;
  imageUrl?: string;
}

interface Quote {
  quote: string;
  author: string;
}

interface Company {
  name: string;
  link: string;
  tasks: string[];
}
