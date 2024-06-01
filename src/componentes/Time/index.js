import Colaborador from '../Colaborador'
import './Time.css'



const Time = (props) => {
    const cp = { backgroundColor: props.corSecundaria }
    const cs = { borderColor: props.corPrimaria}

    return (
        (props.colaboradores.length > 0) && <section className='time'style={cp} >
            <h3 style={cs}>{props.nome}</h3>

            <div className='colavoradores'>
            {props.colaboradores.map(( colaborador, index) => (<Colaborador 
            corDeFundo={props.corPrimaria}
            key={index}
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}  />))}
            </div>

        </section>
    )

}

export default Time