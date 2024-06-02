import { IoCloseCircleSharp } from 'react-icons/io5'
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return(
        <div className='colaborador'>
            <IoCloseCircleSharp size={25} className='deletar' onClick={aoDeletar}></IoCloseCircleSharp>
            <div className='cabecalho'style={{ backgroundColor: corDeFundo}} >
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>


    )
}

export default Colaborador