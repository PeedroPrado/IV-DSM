import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { Habit, HabitsState, Category } from '../types';

const initialState: HabitsState = {
  habits: [
    { id: uuidv4(), name: 'Beber 2L de água', category: 'saúde', completed: false },
    { id: uuidv4(), name: 'Estudar 1 hora', category: 'estudo', completed: false },
    { id: uuidv4(), name: 'Caminhar 30 minutos', category: 'saúde', completed: true },
  ],
  filter: 'todas',
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<{ name: string; category: string }>) => {
      const newHabit: Habit = {
        id: uuidv4(),
        name: action.payload.name,
        category: action.payload.category || 'outro',
        completed: false,
      };
      state.habits.push(newHabit);
    },
    editHabit: (
      state,
      action: PayloadAction<{ id: string; name: string; category: string }>
    ) => {
      const habit = state.habits.find((h) => h.id === action.payload.id);
      if (habit) {
        habit.name = action.payload.name;
        habit.category = action.payload.category;
      }
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter((h) => h.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const habit = state.habits.find((h) => h.id === action.payload);
      if (habit) {
        habit.completed = !habit.completed;
      }
    },
    clearCompleted: (state) => {
      state.habits = state.habits.filter((h) => !h.completed);
    },
    setFilter: (state, action: PayloadAction<Category>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addHabit,
  editHabit,
  deleteHabit,
  toggleCompleted,
  clearCompleted,
  setFilter,
} = habitsSlice.actions;

export default habitsSlice.reducer;
