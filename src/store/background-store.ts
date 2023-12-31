import { create } from 'zustand'

export type BackgroundType = 'boids' | 'squares';

type BackgroundState = {
  backgroundType: BackgroundType;
  switchBackground: () => void;
}

export const useBackgroundStore = create<BackgroundState>()((set) => ({
  backgroundType: 'boids',
  switchBackground: () => set((state) => ({
    backgroundType: state.backgroundType === 'boids' ? 'squares' : 'boids',
  })),
}))
