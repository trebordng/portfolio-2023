import {create} from "zustand";

export const Page = create((set: any) => ({
  loading: true,
  portrait: {src:"",alt:""},
  aboutImage:{src:"",alt:""},
  projects: [{node:{},startDate:Date,endDate:Date}],
  direction: "0%",
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setPortrait: (portrait: {}) => set(() => ({ portrait: portrait })),
  setAboutImage: (aboutImage: {}) => set(() => ({ aboutImage: aboutImage })),
  setProjects: (projects: []) => set(() => ({ projects: projects })),
  setDirection: (direction: string) => set(() => ({ direction: direction })),
}));
