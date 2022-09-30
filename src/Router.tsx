import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DeafultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

// no arquivo "defaultLayout" defini com o "outlet" um espaço a ser preenchido.
// Agora crio uma rota que chama esse arquivo e passo as demais roras dentro, ou seja, tudo que estive dentro vai no outlet

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
