
interface Props {
  type: string
}

export const FormLanguage = ({type}: Props) => {
  const colorType = (type === 'from')?'text-gray-700 placeholder-gray-400 ':'text-teal-400 placeholder-teal-400'

  return (
    <form >
        <textarea className={`${colorType} w-60 h-36 resize-none outline-none placeholder-opacity-40 font-medium`} name="Language" placeholder='Escribe aqui'></textarea>
    </form>
  )
}
