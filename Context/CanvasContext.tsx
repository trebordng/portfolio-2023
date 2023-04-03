import {create} from "zustand";

export const Page = create((set: any) => ({
  loading: true,
  scroll:true,
  changePage:0,
  portrait: {src:"",alt:""},
  aboutImage:{src:"",alt:""},
  projects: [],
  direction: "0%",
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setScroll: (scroll: boolean) => set(() => ({ scroll: scroll })),
  setChangePage: (pageNumber: number) => set(() => ({ changePage: pageNumber })),
  setPortrait: (portrait: {}) => set(() => ({ portrait: portrait })),
  setAboutImage: (aboutImage: {}) => set(() => ({ aboutImage: aboutImage })),
  setProjects: (projects: []) => set(() => ({ projects: projects })),
  setDirection: (direction: string) => set(() => ({ direction: direction })),
}));
