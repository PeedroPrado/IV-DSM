import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  Container, CssBaseline, ThemeProvider, createTheme,
  Box, Typography, Paper,
} from '@mui/material';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#4f46e5' },
    success: { main: '#22c55e' },
    background: { default: '#f1f5f9' },
  },
  typography: {
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
  },
  shape: { borderRadius: 12 },
});

const AppContent: React.FC = () => (
  <Box minHeight="100vh" bgcolor="background.default" py={4}>
    <Container maxWidth="sm">
      <Box display="flex" alignItems="center" gap={1.5} mb={4}>
        <ChecklistRtlIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Box>
          <Typography variant="h4" fontWeight={800} color="primary.main" lineHeight={1.1}>
            HábitosDiários
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monitore seus hábitos e evolua cada dia
          </Typography>
        </Box>
      </Box>

      <HabitForm />

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          📋 Meus Hábitos
        </Typography>
        <HabitList />
      </Paper>
    </Container>
  </Box>
);

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  </Provider>
);

export default App;
