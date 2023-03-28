import {create} from "zustand";

export const Page = create((set: any) => ({
  loading: true,
  contents: [],
  projects: [],
  direction: "0%",
  setLoading: (value: boolean) => set(() => ({ loading: value })),
  setContents: (value: any) => set(() => ({ contents: value })),
  setProjects: (value: any) => set(() => ({ projects: value })),
  setDirection: (value: string) => set(() => ({ direction: value })),
}));
