import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(iten => <option key={iten}>{iten}</option>)}
            </select>
        </div>
    )

}


export default ListaSuspensa