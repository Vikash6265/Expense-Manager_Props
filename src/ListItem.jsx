const ListItem = ({transaction,deleteData,editData}) =>{
    
    return(
        <li className={transaction.amount > 0 ? "list-group-item rounded-1 bg-success mt-1":"list-group-item rounded-1 bg-danger mt-1"}>
            <h2 className={transaction.amount > 0 ? "text-light":"text-warning"}>{transaction.text} : {transaction.amount}</h2>
            <span className="float-end">
                <button className="btn btn-outline-warning btn-sm mx-1 rounded-1" onClick={()=>editData(transaction)}>Edit</button>
                <button className="btn btn-outline-light btn-sm mx-1 rounded-1" onClick={()=>deleteData(transaction.id)}>Delete</button>
            </span>
        </li>
    )
};
export default ListItem;