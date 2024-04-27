
import { create } from 'zustand'


interface AuthStoreInterface {
  authenticated: boolean 
  setAuthentication: (val: boolean) => void 
  user: any 
  setUser: (user: any) => void 
  token: string
  setToken: (token: string) => void 
}


export const useAuthStore = create<AuthStoreInterface>((set) => ({
  authenticated: false,
  user: {}, 
  token: "", 
  setAuthentication: (val) => set((state) => ({ authenticated: val })), 
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}))
