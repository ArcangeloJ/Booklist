import './TextField.css'

const TextField = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    const onTyped = (event) => {
        props.onAltered(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.vlu} onChange={onTyped} placeholder={modifiedPlaceholder}/>
        </div>
    )
}
export default TextField