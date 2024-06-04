import { IoCloseCircleSharp } from 'react-icons/io5'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './Colaborador.css'
import { FaR } from 'react-icons/fa6';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    return(
        <div className='colaborador'>
            <IoCloseCircleSharp 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho'style={{ backgroundColor: corDeFundo}} >
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito ?  <FaHeart {...propsfavorito} color='#ff0000' /> : <FaRegHeart {...propsfavorito}  />}
                </div>
            </div>
        </div>


    )
}

export default Colaborador