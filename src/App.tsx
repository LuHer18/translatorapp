import { ChangeLanguage } from "./components/ChangeLanguage"
import { ArrowIcons } from "./assets/ArrowIcons"
import { FormLanguage } from "./components/FormLanguage"
import { useTraslator } from "./hooks/useTraslator"
import { AUTOLENGUAGE } from "./constants";
import { tralateApi } from "./api/traslateApi";
import { useEffect, useMemo } from "react";

function App() {
  const {fromLenguage, toLenguage, text, result, setFromLenguage, setToLenguage, setText, setResut, interchangeLenguage} = useTraslator();

  const newFromLenguaje = useMemo(() => {
    if(fromLenguage ===AUTOLENGUAGE)return null;
    return fromLenguage;
  }, [fromLenguage])
  
  useEffect(() => {
    tralateApi(text, newFromLenguaje, toLenguage, setResut )
  }, [text,newFromLenguaje, toLenguage ])
  
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-gradient-to-r  from-slate-400 h-screen w-full gap-4">
      
        <h1 className=" font-medium text-4xl" >Traductor APP</h1>
        <div className="flex sm:flex-row flex-col p-2 items-center sm:items-start gap-2 rounded-lg bg-white">
          <section className="flex flex-col gap-1">
            <ChangeLanguage type="from" onChange = {setFromLenguage} value = {fromLenguage} />
            <FormLanguage type="from" onChange = {setText} value = {text} />  
          </section>
          <button disabled={fromLenguage === AUTOLENGUAGE} onClick={interchangeLenguage}><ArrowIcons /></button>
          <section className="flex flex-col">
            <ChangeLanguage type="to" onChange = {setToLenguage} value= {toLenguage} />
            <FormLanguage type="to" onChange = {setResut} value= {result} />
          </section>
        </div>

      </main>
    </>
  )
}

export default App
