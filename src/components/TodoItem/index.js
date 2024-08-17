import "./index.css"


const TodoItem = (props) =>{
    const {itemDetails} = props
    return(
        <li className="list-item">
            <div className="details-container">
                <input type="checkbox" className="check-box" checked={itemDetails.completed} onChange={()=>props.onToggle(itemDetails.id)}/>
                <div>
                    <h5 style={{textDecoration:itemDetails.completed?"line-through":"none"}}>{itemDetails.title}</h5>
                    <p>{itemDetails.text}</p>
                </div>
            </div>
            <ul className="item-label-container">
                {itemDetails.label.map((eachTag) => (
                    <li className="list-label-item" key={eachTag}>{eachTag}</li>
                ))}
            </ul>
            <button className="btn btn-danger" onClick={()=>props.onDelete(itemDetails.id)}>Delete</button>
        </li>
    )
}
export default TodoItem