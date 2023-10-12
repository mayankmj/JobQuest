


const InputField = ({
    label,
    type
}) =>{
    return(
        <div className="form-group">
            <label>{label}</label>
            <input 
            type = {type} 
            className="form-control"
            required
            autoComplete="off"

            /> 
        </div>
    )
}


export default InputField;