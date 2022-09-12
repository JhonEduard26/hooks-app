import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage, AboutPage, LoginPage, Navbar } from './'

export const MainApp = () => {
  return (
    <>
      <h2>Main app</h2>

      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}