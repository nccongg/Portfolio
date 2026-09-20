import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    document.title = 'Nguyen Chi Cong | Software Engineer';
  }, []);

  // Dynamically set basename: '/Portfolio' on GitHub Pages, undefined (root '/') on Vercel
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
