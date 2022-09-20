import ThemeProvider from 'src/ui/admin/config/theme';
import Layout from 'src/ui/admin/components/Layout';

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;