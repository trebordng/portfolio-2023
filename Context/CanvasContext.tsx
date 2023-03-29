import {create} from "zustand";

interface Page {
  loading:boolean,
  portrait:{src:string,alt:string},
  aboutImage:{src:string,alt:string},
  projects:[],
  direction:string
}

export const Page = create((set: any) => ({
  loading: true,
  portrait: {src:"",alt:""},
  aboutImage:{src:"",alt:""},
  projects: [],
  direction: "0%",
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setPortrait: (portrait: {}) => set(() => ({ portrait: portrait })),
  setAboutImage: (aboutImage: {}) => set(() => ({ aboutImage: aboutImage })),
  setProjects: (projects: []) => set(() => ({ projects: projects })),
  setDirection: (direction: string) => set(() => ({ direction: direction })),
}));
