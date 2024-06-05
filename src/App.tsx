import { ChangeLanguage } from "./components/ChangeLanguage"
import { ArrowIcons } from "./assets/ArrowIcons"
import { FormLanguage } from "./components/FormLanguage"

function App() {

  return (
    <>
      <main className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-full gap-4">
        <h1 className=" font-medium text-5xl text-slate-100">Traductor APP</h1>
        <div className="flex sm:flex-row flex-col items-center sm:items-start gap-2">
          <section className="flex flex-col gap-6">
            <ChangeLanguage />
            <FormLanguage />  
          </section>
          <ArrowIcons />
          <section className="flex flex-col gap-6">
            <ChangeLanguage />
            <FormLanguage />
          </section>
        </div>

      </main>
    </>
  )
}

export default App
