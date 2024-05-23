const BalanceCard = ({transactions}) =>{

    const balance = transactions.reduce((p,c) =>{
        return p + c.amount;
    },0);

    const income = transactions.filter(transaction => transaction.amount > 0)
    .reduce((p,c) =>{
        return p + c.amount;
    },0);

    const expense = transactions.filter(transaction => transaction.amount < 0)
    .reduce((p,c) =>{
        return p + c.amount;
    },0);


    return(
        <div className="my-3 row g-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card bg-warning p-2 rounded-1">
            <h1 className="text-secondary">Total Income :</h1>
            <h1 className="text-primary">{income}</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card bg-danger p-2 rounded-1">
            <h1 className="text-warning">Total Expense :</h1>
            <h1 className="text-info">{expense}</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card bg-success p-2 rounded-1">
            <h1 className="text-light">Total Balance :</h1>
            <h1 className="text-warning">{balance}</h1>
          </div>
        </div>
      </div>
    )
};
export default BalanceCard;