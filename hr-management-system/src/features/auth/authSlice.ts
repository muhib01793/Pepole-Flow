import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/auth.types";
interface AuthState { user: User | null }
const saved = localStorage.getItem("hr_user");
const initialState: AuthState = { user: saved ? JSON.parse(saved) as User : null };
const slice = createSlice({
  name: "auth", initialState,
  reducers: {
    login(state, action: PayloadAction<User>) { state.user = action.payload; localStorage.setItem("hr_user", JSON.stringify(action.payload)); },
    logout(state) { state.user = null; localStorage.removeItem("hr_user"); }
  }
});
export const { login, logout } = slice.actions;
export default slice.reducer;
