export interface Habit {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

export type Category = 'todas' | 'saúde' | 'estudo' | 'lazer' | 'outro';

export interface HabitsState {
  habits: Habit[];
  filter: Category;
}
