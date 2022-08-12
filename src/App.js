import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Sidebar, Navbar, ThemeSettings, Login } from './Components'
import { Ecommerce, Orders, Calendar, Customers, Employees, Stacked, Pyramid, Kanban, Area, Bar, Pie, Line, Financial, ColorPicker, ColorMapping, Editor } from './Pages'
import { useStateContext } from './Contexts/ContextProvider'

import './App.css'

const App = () => {
  const { activeMenu, activeSide, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

  return (
    <div className="App">
      <div className="board">
        <div className={currentMode === 'Dark' ? 'dark w-full' : 'w-full'}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg h-full">
              <div className="fixed right-3 bottom-3" style={{ zIndex: '1000' }}>
                <TooltipComponent content="Configurações" position="Top">
                  <button
                    type="button"
                    className="text-2xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style={{ background: currentColor, borderRadius: '50%' }}
                    onClick={() => setThemeSettings(true)}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg backdrop-blur-[20em] overflow-hidden" style={{ borderRadius: '16px 0 0 16px', height: '85%' }}><Sidebar /></div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
              )}
              <div className={`scrollbar backdrop-blur-[20em] bg-dark-main h-full max-w-full flex-1 overflow-scroll ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                <div className="sticky top-0 backdrop-blur-[20em] bg-dark-nav dark:bg-main-dark-bg navbar"><Navbar /></div>
                <div>
                  {themeSettings && <ThemeSettings />}
                  <Routes>
                    <Route path="/" element={<Ecommerce />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />

                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
                  </Routes>
                </div>
              </div>
              {activeSide ? (
                <div className="dark:bg-secondary-dark-bg backdrop-blur-[20em]" style={{ borderRadius: '0 16px 16px 0' }}><Login /></div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg"><Login /></div>
              )}
            </div>
          </BrowserRouter>
        </div>

      </div>
    </div>
  )
}

export default App
