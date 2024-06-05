import { ChangeLanguage } from "./components/ChangeLanguage"
import { ArrowIcons } from "./assets/ArrowIcons"

function App() {

  return (
    <>
      <main className="flex flex-row justify-center items-center h-screen  w-full">
        <section>
          <ChangeLanguage/>
          <h1>Hello World</h1>
        </section>
        <ArrowIcons/>
        <section>
          <ChangeLanguage/>
          <h1>Hello World</h1>
        </section>

      </main>
    </>
  )
}

export default App
