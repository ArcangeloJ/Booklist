import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={event => props.onAltered(event.target.value)} value={props.vlu}>
                <option value="">Select...</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList