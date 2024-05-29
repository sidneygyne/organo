import './Botao.css'

const Botao  = (props) => {
    return (
        <button className="botao" >{props.children}</button> // props.texto ou props.children - o children e usado igual o props texto, mais no caso da tag ter mais tags filhos ai tem que usar o children ex: <button><img></img></button> 
    )
}

export default Botao
