import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id?: number;
  username: string;
  email: string;
}

interface UserState {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
    }),
    { name: 'user-storage' } // Tên key lưu dưới LocalStorage
  )
);