import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../Contexts/ContextProvider'

const Login = () => {
  const { setActiveSide, activeSide, currentColor } = useStateContext()

  return (
    <div className="mx-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeSide && (
        <>
          <div className="flex justify-between items-center">
            <TooltipComponent content="Fechar" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveSide(!activeSide)}
                style={{ color: currentColor }}
                className={`text-xl rounded-full p-2 hover:bg-slate-600 mt-4 block hover:drop-shadow-xl hover:text-white`}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-12">
            <div key="2">
              <p className="text-white text-center m-3 mt-4 mb-10 uppercase">
                Login
              </p>
              <form>
                <div className="flex flex-col mx-3">
                  <div className="input-container">
                    <input type="email" name="email" required value="" style={{ borderBottomColor: currentColor }} />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-container">
                    <input type="password" name="password" required value="" style={{ borderBottomColor: currentColor }} />
                    <label htmlFor="password">Senha</label>
                  </div>
                  <button type="button" className={`bg-transparent hover:bg-[${currentColor}] text-[${currentColor}] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}>Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )
      }
    </div >
  )
}

export default Login
