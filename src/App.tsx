import ThemeProvider from './ui/config/theme';
import Layout from './ui/component/Layout';

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;