import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, AboutPage, LoginPage } from './'

export const MainApp = () => {
  return (
    <>
      <h2>Main app</h2>
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