const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};
const operations=[{
 type: 'credit',
 value: 50.0
},
{
  type: 'debit',
  value: 75
},
{
  type: 'credit',
  value: 150
}
]
 
bankTransactions(operations)

function bankTransactions(operations){
  for(let operation of operations){
    createTransaction(operation)
    
    
  }
 
  
  const HigherTransaction = getHigherTransactionByType(user.transactions)
  const AverageTransactionValue = getAverageTransactionValue(user.transactions)
  const TransactionsCount= getTransactionsCount(user.transactions);

  console.table(user)
  console.log(`the highest value transaction is:${HigherTransaction.type} of ${HigherTransaction.value}`)
  console.log(`this Average of Transactions is ${AverageTransactionValue}`)
  console.log(`credit:${TransactionsCount.credit},debit:${TransactionsCount.debit}`);
  
}


function createTransaction(operation){
  if (operation.type == 'credit'){
    user.balance = user.balance +operation.value
    user.transactions.push(operation) 
    return console.log(`completed transactions: ${operation.type}`)
  }
  if (operation.type == 'debit'){
    user.balance = user.balance -operation.value
    user.transactions.push(operation) 
    return console.log(`completed transactions: ${operation.type}`)
  }
  
}

function getHigherTransactionByType(transactions){
  let bigger = {type: 'null', value: 0 }

  for (let trans of transactions){
    if (trans.value > bigger.value){
      bigger = trans
    }
    
  }

  return bigger
}

function getAverageTransactionValue(transactions){
  let Average = 0
  for (let trans of transactions){
    Average = trans.value+ Average

  }
  Average = Average / transactions.length
  return Average
}

function getTransactionsCount (transactions){
  let TransactionsCount = {debit: 0, credit: 0}
  for (let trans of transactions){
    if (trans.type == 'debit'){
      TransactionsCount.debit = TransactionsCount.debit + 1
    }
    if(trans.type == 'credit'){
      TransactionsCount.credit = TransactionsCount.credit + 1
    }
    
    
  }
  return TransactionsCount
}
