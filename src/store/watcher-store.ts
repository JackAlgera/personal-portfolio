import { create } from 'zustand'

type WatcherState = {
  watcherActivated: boolean;
  activateWatcher: () => void;
  deactivateWatcher: () => void;
}

export const useWatcherStore = create<WatcherState>()((set) => ({
  watcherActivated: false,
  activateWatcher: () => set({ watcherActivated: true }),
  deactivateWatcher: () => set({ watcherActivated: false }),
}))
