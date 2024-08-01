import { ChangeLanguage } from "./components/ChangeLanguage"
import { ArrowIcons } from "./assets/ArrowIcons"
import { FormLanguage } from "./components/FormLanguage"
import { useTraslator } from "./hooks/useTraslator"
import { AUTOLENGUAGE } from "./constants";
import { tralateApi } from "./api/traslateApi";
import { useEffect, useMemo } from "react";
import { SectionType } from "./hooks/type.d";
import { useDebounce } from "./hooks/useDebounce";
import { CopyIcons } from "./assets/CopyIcons";
import { motion } from "framer-motion"
import { DarkMode } from "./components/DarkMode";

function App() {
  const { fromLenguage, toLenguage, text, result, setFromLenguage, setToLenguage, setText, setResut, interchangeLenguage, isLoading } = useTraslator();

  const newFromLenguaje = useMemo(() => {
    if (fromLenguage === AUTOLENGUAGE) return null;
    return fromLenguage;
  }, [fromLenguage])

  const debouncedFromText = useDebounce(text, 200)
  
  useEffect(() => {
    tralateApi(debouncedFromText, newFromLenguaje, toLenguage, setResut)
  }, [debouncedFromText, newFromLenguaje, toLenguage, setResut])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => { })
  }
 
  return (
    <>
      <main className="flex flex-col justify-center items-center dark:bg-zinc-900 bg-slate-100 h-screen w-full gap-2">
        <nav className="flex items-center justify-between w-[256px]  sm:w-[470px]">
          <h1 className=" font-medium text-3xl dark:text-slate-50" >Translate</h1>
          <DarkMode />
        </nav>
        
        <div className="flex sm:flex-row flex-col p-2 items-center sm:items-start gap-1 rounded-lg dark:bg-zinc-800 bg-white">
          <section className="flex flex-col gap-1">
            <ChangeLanguage type={SectionType.From} onChange={setFromLenguage} value={fromLenguage} />
            <FormLanguage type={SectionType.From} onChange={setText} value={text} />
          </section>
          <button className="rounded-full  flex justify-center  items-center disabled:scale-100 dark:bg-zinc-900 dark:text-slate-50 bg-slate-100 disabled:text-slate-400 text-gray-700 hover:text-teal-400 hover:scale-125  p-2" disabled={fromLenguage === AUTOLENGUAGE} onClick={interchangeLenguage}><ArrowIcons /></button>
          <section className="flex flex-col gap-1 relative">
            <ChangeLanguage type={SectionType.To} onChange={setToLenguage} value={toLenguage} />
            <FormLanguage type={SectionType.To} onChange={setResut} value={result} isLoading={isLoading} />
            {
              (result !== '') &&
              <button className=" absolute bottom-3 left-1 text-gray-700 dark:text-slate-50 hover:text-teal-400 hover:scale-125 " onClick={handleClipboard}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  <CopyIcons />
                </motion.div> </button>
            }

          </section>
        </div>

      </main>
    </>
  )
}

export default App
