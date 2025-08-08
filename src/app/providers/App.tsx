import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home';
import { AboutPage } from '../../pages/about';
import { Header } from '../../widgets/header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}
