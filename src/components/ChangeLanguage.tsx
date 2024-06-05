import { ChangeEvent } from "react"
import { AUTOLENGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import { fromLenguage, Lenguage } from "../hooks/type"

interface Props {
  type: string,
  value: string
  onChange: (payload: string)=> void
}



export const ChangeLanguage = ({type, value, onChange}: Props) => {

  const colorType = (type === 'from')?'text-gray-700':'text-teal-400'

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
    console.log(event.target.value)
  }

  return (
    <section className="flex justify-center">
      <select className={`${colorType} border p-2 border-slate-100 rounded-lg outline-none bg-slate-100`} onChange={handleChange} value={value} name="select">
        {(type==='from')&& <option className="text-slate-600" value={AUTOLENGUAGE}>Predicción de idioma</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
          <option className="text-slate-600" value={key} key={key}>{value}</option>
        ))}
      </select>
    </section>
  )
}
