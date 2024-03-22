import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainPage } from '../pages/main/ui'
import { PostPage } from '../pages/post'
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="post/:id" element={<PostPage />} />
        </Routes>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
