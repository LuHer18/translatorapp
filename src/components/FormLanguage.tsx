import { ChangeEvent } from "react"
import { SectionType } from "../hooks/type.d";

interface Props {
  type: SectionType;
  value: string;
  isLoading?: boolean;
  onChange: (payload: string) => void;
}


export const FormLanguage = ({ type, value, onChange, isLoading }: Props) => {

  const getPlaceHolder = ({ type, isLoading }: { type: SectionType, isLoading?: boolean }) => {
    if (type === SectionType.From) return 'Introducir texto';
    if (isLoading === true) return 'Cargando...';
    return 'Traducción'
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const colorType = (type === 'from') ? 'text-gray-700 placeholder-gray-400 ' : 'text-teal-400 placeholder-teal-400'

  return (
    <form >
      <textarea className={`${colorType} w-60 h-36 resize-none outline-none placeholder-opacity-40 font-medium`} name="Language" value={value} onChange={handleChange} placeholder={getPlaceHolder({ type, isLoading })}></textarea>
    </form>
  )
}
