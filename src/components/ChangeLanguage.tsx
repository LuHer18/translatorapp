import { ChangeEvent } from "react"
import { AUTOLENGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import { FromLenguage, Lenguage, SectionType } from "../hooks/type.d"


type Props =
  | { type: SectionType.From; value: string; onChange: (payload: FromLenguage) => void }
  | { type: SectionType.To; value: string; onChange: (payload: Lenguage) => void }

export const ChangeLanguage = ({ type, value, onChange }: Props) => {

  const colorType = (type === SectionType.From) ? 'text-gray-700 dark:text-slate-50' : 'text-teal-400'

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Lenguage)
  }

  return (
    <section className="flex justify-center">
      <select className={`${colorType} border-2 p-2 w-40 dark:bg-zinc-800 dark:border-zinc-900  border-slate-100 rounded-lg outline-none`} onChange={handleChange} value={value} name="select">
        {(type === 'from') && <option className="text-slate-600 dark:text-slate-50" value={AUTOLENGUAGE}>Detectar idioma</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
          <option className="text-slate-600 dark:text-slate-50" value={key} key={key}>{value}</option>
        ))}
      </select>
    </section>
  )
}
