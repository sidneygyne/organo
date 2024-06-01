import './CampoTexto.css'

const CampoTexto = (props) => {
    //console.log(props) --- no lugar de props pode colocar outro nome qualque, padrao props
    
    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Selma'
    // const [valor, setValor] = useState('')

    const aoDigitado =(evento) => {
        props.aoAlterado(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto