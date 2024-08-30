type EducationItemType = {
  title :string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
};

type JobItemType = {
    title :string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    children: React.ReactNode;
}

type ProjectItemType = {
    title: string;
    children: React.ReactNode;
}

type SectionType = {
    id: string;
    title: string;
    children: React.ReactNode;
}

export type {EducationItemType, JobItemType , ProjectItemType, SectionType};