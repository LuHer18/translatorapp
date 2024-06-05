
interface Props {
  type: string
}



export const ChangeLanguage = ({type}: Props) => {

  const colorType = (type === 'from')?'text-gray-700':'text-teal-400'

  return (
    <section className="flex justify-center">
      <select className={`${colorType} border p-2 border-slate-100 rounded-lg outline-none bg-slate-100`} name="select">
        <option className="text-slate-600" value="value1">1</option>
        <option className="text-slate-600" value="value2">2</option>
      </select>
    </section>
  )
}
