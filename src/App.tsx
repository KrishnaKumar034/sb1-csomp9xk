import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import StudyBuddy from './components/StudyBuddy';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <StudyBuddy />
      </Layout>
    </ThemeProvider>
  );
}

export default App;