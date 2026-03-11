import type { RootState } from './store';
import type { Habit, Category } from '../types';

export const selectAllHabits = (state: RootState): Habit[] =>
  state.habits.habits;

export const selectFilter = (state: RootState): Category =>
  state.habits.filter;

export const selectFilteredHabits = (state: RootState): Habit[] => {
  const { habits, filter } = state.habits;
  if (filter === 'todas') return habits;
  return habits.filter((h) => h.category === filter);
};

export const selectCompletedCount = (state: RootState): number =>
  state.habits.habits.filter((h) => h.completed).length;

export const selectTotalCount = (state: RootState): number =>
  state.habits.habits.length;
