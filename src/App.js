import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import BlogHome from './components/Blog/BlogHome';
import AllBlogs from './components/Blog/AllBlogs';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import NavigationMenu from './components/Header/NavigationMenu';
import WorkPage from './work/WorkPage';  // Компонент для відображення робіт
import WorkDetail from './work/WorkDetail';
import Footer from './components/Footer/Footer';

const App = () => {
  const location = useLocation(); // Отримуємо поточний шлях

  // Список шляхів, на яких не потрібно відображати Header
  const excludedPaths = [
    '/all-blogs', 
    '/works', 
    '/blog', 
    '/works/:id', 
    '/blog/:id'
  ];

  // Перевіряємо, чи поточний шлях в списку виключених
  const isExcludedPath = excludedPaths.some(path => location.pathname.startsWith(path));

  return (
    <div>
      <NavigationMenu />
      {/* Відображаємо Header тільки на певних сторінках */}
      {!isExcludedPath && <Header />}
      
      <main>
        <Routes>
          {/* Маршрути для блогу */}
          <Route path="/" element={<><BlogHome /><WorkPage /></>} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<Blog />} />

          {/* Маршрути для робіт */}
          <Route path="/works" element={<WorkPage />} /> {/* Одна компонента для частини вакансій та всіх вакансій */}
          <Route path="/works/:id" element={<WorkDetail />} /> {/* Деталі конкретної вакансії */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;




