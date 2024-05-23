
import { useState } from 'react'
import BalanceCard from './BalanceCard'
import Form from './Form'
import ListGroup from './ListGroup'
import Navbar from './components/Navbar'

const App = () =>{

  const [transactions,setTransactions] = useState([]);

  const deleteData = (id) =>{
    
    setTransactions(
      transactions.filter((item)=>item.id !== id)
    )
  };

  const addData = (text,amount) =>{

    const newData = {
      id:crypto.randomUUID(),
      text,
      amount:parseInt(amount),
    };
    
    setTransactions([newData,...transactions]);

  }

  const [edit,setEdit] = useState({
    transaction : {},
    isEdit : false,
  });

  const editData = (transaction) =>{
    setEdit({
      transaction : transaction,
      isEdit : true,
    })
  };

  const updateData = (updatedTransaction) =>{
    setTransactions(
      transactions.map((item)=>item.id === updatedTransaction.id ? updatedTransaction : item)
    );

    setEdit({
      transaction : {},
      isEdit : false,
    })
  }

   const clearTodo = () =>{
    setTransactions([])
   }

  return(
    <>

    <Navbar/>

    <div className="container px-3 py-5">

      <Form addData = {addData} edit = {edit} updateData = {updateData} clearTodo={clearTodo}/>
      <BalanceCard transactions = {transactions}/>
      <ListGroup transactions = {transactions} deleteData = {deleteData} editData = {editData}/>

    </div>

    </>
  )
}

export default App;
