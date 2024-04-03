import { create } from "zustand"

export const useStore = create((set) => ({
    cart: 100,
    increaseCart: () => set((state) => ({ cart: state.cart + 1 }))
}))