import React, { useState } from 'react';
import {
  Box, Checkbox, Typography, IconButton, Chip,
  TextField, Select, MenuItem, FormControl, Tooltip, Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import type { Habit } from '../types';
import { useAppDispatch } from '../store/hooks';
import { toggleCompleted, deleteHabit, editHabit } from '../store/habitsSlice';

const CATEGORIES = ['saúde', 'estudo', 'lazer', 'outro'];
const CATEGORY_COLORS: Record<string, 'success' | 'primary' | 'warning' | 'default'> = {
  saúde: 'success',
  estudo: 'primary',
  lazer: 'warning',
  outro: 'default',
};

interface Props { habit: Habit; }

const HabitItem: React.FC<Props> = ({ habit }) => {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name);
  const [editCategory, setEditCategory] = useState(habit.category);

  const handleSave = () => {
    if (!editName.trim()) return;
    dispatch(editHabit({ id: habit.id, name: editName.trim(), category: editCategory }));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditName(habit.name);
    setEditCategory(habit.category);
    setEditing(false);
  };

  return (
    <Paper
      elevation={habit.completed ? 0 : 2}
      sx={{
        display: 'flex', alignItems: 'center', gap: 1,
        p: 1.5, mb: 1.5, borderRadius: 2,
        border: '1px solid',
        borderColor: habit.completed ? 'grey.200' : 'transparent',
        backgroundColor: habit.completed ? 'grey.50' : 'white',
        transition: 'all 0.2s ease',
      }}
    >
      <Checkbox
        checked={habit.completed}
        onChange={() => dispatch(toggleCompleted(habit.id))}
        color="success"
      />

      {editing ? (
        <Box display="flex" gap={1} flex={1} flexWrap="wrap" alignItems="center">
          <TextField
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            size="small"
            sx={{ flex: 2, minWidth: 150 }}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            autoFocus
          />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
              {CATEGORIES.map((cat) => (
                <MenuItem key={cat} value={cat} sx={{ textTransform: 'capitalize' }}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Tooltip title="Salvar">
            <IconButton color="success" onClick={handleSave} size="small">
              <CheckIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancelar">
            <IconButton color="error" onClick={handleCancel} size="small">
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Box flex={1} display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <Typography
            sx={{
              textDecoration: habit.completed ? 'line-through' : 'none',
              color: habit.completed ? 'text.disabled' : 'text.primary',
              fontWeight: 500, flex: 1,
            }}
          >
            {habit.name}
          </Typography>
          <Chip
            label={habit.category}
            size="small"
            color={CATEGORY_COLORS[habit.category] ?? 'default'}
            sx={{ textTransform: 'capitalize', fontWeight: 600 }}
          />
        </Box>
      )}

      {!editing && (
        <Box display="flex">
          <Tooltip title="Editar">
            <IconButton size="small" onClick={() => setEditing(true)} color="primary">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Excluir">
            <IconButton size="small" onClick={() => dispatch(deleteHabit(habit.id))} color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Paper>
  );
};

export default HabitItem;
