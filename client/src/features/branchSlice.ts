// features/branchSlice.ts
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Branch } from "../app/types"

interface BranchState {
  branches: Branch[]
  selectedBranch: Branch | null
}

// Функція для завантаження з localStorage
const loadFromLocalStorage = (): Branch | null => {
  try {
    const serialized = localStorage.getItem("selectedBranch")
    return serialized ? JSON.parse(serialized) : null
  } catch (e) {
    console.warn("Failed to load branch from localStorage", e)
    return null
  }
}

const initialState: BranchState = {
  branches: [],
  selectedBranch: loadFromLocalStorage(), // Завантажуємо при ініціалізації
}

export const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    setBranches: (state, action: PayloadAction<Branch[]>) => {
      state.branches = action.payload
    },
    setBranch: (state, action: PayloadAction<string>) => {
      const branchId = action.payload
      const foundBranch = state.branches.find(branch => branch.id === branchId)
      if (foundBranch) {
        state.selectedBranch = foundBranch
        // Зберігаємо в localStorage
        localStorage.setItem("selectedBranch", JSON.stringify(foundBranch))
      }
    },
    clearBranch: state => {
      state.selectedBranch = null
      localStorage.removeItem("selectedBranch")
    },
  },
})

export const { setBranches, setBranch, clearBranch } = branchSlice.actions
export default branchSlice.reducer
