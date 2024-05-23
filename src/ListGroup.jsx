import ListItem from "./ListItem";

const ListGroup = ({transactions,deleteData,editData}) =>{

  if(transactions.length === 0)
  {
    return(
      <div className="my-5">
        <h3 className="text-danger text-center pt-3">No Transactions Yet !</h3>
      </div>
    )
  }
  else{
   return(
    <div className="my-5">
    <h3 className="text-secondary text-center">All Transactions :</h3>
    <ul className="list-group my-4">
      {
        transactions.map((transaction) =>{         // curly bracket ka use krne pr return krna pdega
                                                   // otherwise paranthese bracket ka use krkr dirct
          return <ListItem key={transaction.id} transaction={transaction} deleteData={deleteData} editData = {editData}/>
        })
      }
    </ul>
  </div>
   )
  }

    // return(
    //   <div className="my-5">
    //     <h3 className="text-secondary">All Transactions :</h3>
    //     <ul className="list-group my-4">
    //       {
    //         transactions.map((transaction) =>{         // curly bracket ka use krne pr return krna pdega
    //                                                    // otherwise paranthese bracket ka use krkr dirct
    //           return <ListItem key={transaction.id} transaction={transaction} deleteData={deleteData} editData = {editData}/>
    //         })
    //       }
    //     </ul>
    //   </div>
    // )
};
export default ListGroup;