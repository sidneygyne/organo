import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import Botao from '../Botao/index.js';
import { useState } from 'react';


const Formulario = ({aoCadastrar, times}) => {

    // como a lista esta dulicada com a lista que tem no app.js raiz, foi substituido pelo codigo
    // times={times.map(time => time.nome)} no campo formulario o app.js raiz, 
    // e na  <ListaSuspensa neste codigo abaixo o itens={times} alterado p/ itens={props.times}
    // const times = [ 
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'Ux e Designer',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
 
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido! => ', nome, cargo, imagem, time)
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        //limpar o formulario apos emvio de dados
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className= "formulario">                       
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                    
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                    
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                    

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} 
                    />
                <Botao>Criar Card</Botao>
            </form>
        </section>

    )
}

export default Formulario