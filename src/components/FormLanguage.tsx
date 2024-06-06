import { ChangeEvent } from "react"

interface Props {
  type: string,
  value: string
  onChange: (payload: string)=> void
}

export const FormLanguage = ({type, value, onChange}: Props) => {

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const colorType = (type === 'from')?'text-gray-700 placeholder-gray-400 ':'text-teal-400 placeholder-teal-400'

  return (
    <form >
        <textarea className={`${colorType} w-60 h-36 resize-none outline-none placeholder-opacity-40 font-medium`} name="Language" value={value} onChange={handleChange} placeholder='Escribe aqui'></textarea>
    </form>
  )
}
