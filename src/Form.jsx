import { useEffect, useState } from "react";

const Form = ({addData,edit,updateData,clearTodo}) =>{
  
  const [text,setText] = useState("");
  const [amount,setAmount] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(edit.isEdit)
    {
      updateData({
        id : edit.transaction.id,
        text : text,
        amount : parseInt(amount),
      });
    }
    else{
      addData(text,amount);
    }

    setText("");
    setAmount("");
  };

  useEffect(() =>{
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  },[edit]);

    return(
      
      <div className="card rounded-1 p-3">
        <h1 class="new" className="text-center text-secondary">Enter Your Transactions</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder="Enter Transaction Title..." className="form-control rounded-2 my-3 shadow-sm" onChange={(e)=>setText(e.target.value)} value={text} required />
          <input type="number" placeholder="Enter Amount ₹ : eg(For Expensive : -1000,For Income : 1000)" className="form-control rounded-2 my-3 shadow-sm" onChange={(e)=>setAmount(e.target.value)} value={amount} required/>
          <button className="btn btn-success w-100 mt-3 rounded-2">Save Transaction</button>
        </form>
        <button className="btn btn-success w-100 rounded-2 mt-3" onClick={()=>clearTodo()}>Clear All</button>
      </div>
  
    )
}
export default Form;