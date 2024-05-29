import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import Botao from '../Botao/index.js';

const Formulario = () => {

    const time = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido!')
    }
    return (
        <section className= "formulario">                       
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={time}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>

    )
}

export default Formulario