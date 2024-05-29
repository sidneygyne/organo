import './CampoTexto.css'

const CampoTexto = (props) => {
    //console.log(props) --- no lugar de props pode colocar outro nome qualque, padrao props
    
    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto