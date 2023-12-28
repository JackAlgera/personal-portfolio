import { create } from 'zustand'

type MouseState = {
  x: number;
  y: number;
  updateMouse: (x: number, y: number) => void;
}

export const useMouseStore = create<MouseState>()((set) => ({
  x: 0,
  y: 0,
  updateMouse: (x: number, y: number) => set({ x, y }),
}))
