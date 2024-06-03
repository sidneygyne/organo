import './Campo.css'

const Campo = ( { type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    //console.log(props) --- no lugar de props pode colocar outro nome qualque, padrao props

    const placeholderModificada = `${placeholder}...`

    // let valor = 'Selma'
    // const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className={`campo campo-${type}`} >
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada} />
        </div>
    )
}

export default Campo