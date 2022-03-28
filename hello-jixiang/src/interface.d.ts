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
  link?: string;
  vendor?: string;
  vendorLink?: string;
  tasks?: string[];
}
