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
  tasks?: string[];
  description?: string;
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
