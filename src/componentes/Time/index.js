import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
    // const corSecundaria = { backgroundColor: corSecundaria }
    // const corPrimaria = { borderColor: corPrimaria }

    return (
        (colaboradores.length > 0) && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }} >
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.cor} type='color' className='input-cor'></input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

            <div className='colavoradores'>
                {colaboradores.map((colaborador, indice) => {
                    // console.log(<Colaborador corDeFundo={props.corPrimaria} key={index} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)
                    return <Colaborador
                        corDeFundo={time.cor}
                        key={indice}
                        colaborador = {colaborador}
                        aoDeletar={aoDeletar} />} )}
                    
            </div>
        </section>

    )

}

export default Time