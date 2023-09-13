import { create } from 'zustand';

export interface IGameStoreState {
  done: boolean;
  win: boolean;
}

export const useGameStore = create<IGameStoreState>(() => ({
  done: false,
  win: false,
}));

export default useGameStore;
