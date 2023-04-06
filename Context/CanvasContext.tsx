import { create } from "zustand";

interface Project {
  node: {
    images: { url: string; alt: string };
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    languages: string[];
    slug: string;
  };
  startDate: Date;
  endDate: Date;
}

export const Page = create((set: any) => ({
  loading: true,
  scroll: true,
  changePage: 0,
  portrait: { src: "", alt: "" },
  aboutImage: { src: "", alt: "" },
  direction: "0%",
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setScroll: (scroll: boolean) => set(() => ({ scroll: scroll })),
  setChangePage: (pageNumber: number) =>
    set(() => ({ changePage: pageNumber })),
  setPortrait: (portrait: {}) => set(() => ({ portrait: portrait })),
  setAboutImage: (aboutImage: {}) => set(() => ({ aboutImage: aboutImage })),
  setDirection: (direction: string) => set(() => ({ direction: direction })),
}));

export const Projects = create((set: any) => ({
  projectLoading: true,
  projects: [],
  currentProjects:[],
  setProjectLoading: (loading: boolean) =>
    set(() => ({ projectLoading: loading })),
  setProjects: (projects: Project[]) => set(() => ({ projects: projects })),
  setCurrentProjects: (projects: Project[]) => set(() => ({ currentProjects: projects })),

}));
