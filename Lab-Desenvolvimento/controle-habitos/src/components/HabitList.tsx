import React from 'react';
import {
  Box, Button, Typography, Chip, Stack, Divider, LinearProgress,
} from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  selectFilteredHabits, selectFilter,
  selectCompletedCount, selectTotalCount,
} from '../store/selectors';
import { clearCompleted, setFilter } from '../store/habitsSlice';
import type { Category } from '../types';
import HabitItem from './HabitItem';

const FILTERS: { label: string; value: Category }[] = [
  { label: 'Todas', value: 'todas' },
  { label: 'Saúde', value: 'saúde' },
  { label: 'Estudo', value: 'estudo' },
  { label: 'Lazer', value: 'lazer' },
  { label: 'Outro', value: 'outro' },
];

const HabitList: React.FC = () => {
  const dispatch = useAppDispatch();
  const habits = useAppSelector(selectFilteredHabits);
  const activeFilter = useAppSelector(selectFilter);
  const completedCount = useAppSelector(selectCompletedCount);
  const totalCount = useAppSelector(selectTotalCount);
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <Box>
      <Box mb={2}>
        <Box display="flex" justifyContent="space-between" mb={0.5}>
          <Typography variant="body2" color="text.secondary">Progresso do dia</Typography>
          <Typography variant="body2" fontWeight={700} color="success.main">
            {completedCount}/{totalCount} concluídos
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="success"
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box display="flex" alignItems="center" justifyContent="space-between"
        flexWrap="wrap" gap={1} mb={2}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {FILTERS.map((f) => (
            <Chip
              key={f.value}
              label={f.label}
              clickable
              onClick={() => dispatch(setFilter(f.value))}
              color={activeFilter === f.value ? 'primary' : 'default'}
              variant={activeFilter === f.value ? 'filled' : 'outlined'}
              sx={{ fontWeight: 600 }}
            />
          ))}
        </Stack>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteSweepIcon />}
          onClick={() => dispatch(clearCompleted())}
          disabled={completedCount === 0}
          sx={{ borderRadius: 2 }}
        >
          Limpar concluídos
        </Button>
      </Box>

      {habits.length === 0 ? (
        <Box textAlign="center" py={6}
          sx={{ color: 'text.disabled', border: '2px dashed', borderColor: 'grey.200', borderRadius: 3 }}>
          <Typography fontSize={40}>🎯</Typography>
          <Typography variant="body1" mt={1}>Nenhum hábito nesta categoria.</Typography>
        </Box>
      ) : (
        habits.map((habit) => <HabitItem key={habit.id} habit={habit} />)
      )}
    </Box>
  );
};

export default HabitList;
