let expenses=[];
let totalAmount = 0;

const categorySelect = document.getElementById ('category-select')
const amountInput = document.getElementById ('amount-input')
const dateInput = document.getElementById ('date-input')
const addBtn = document.getElementById ('add-btn')
const expenseTableBody = document.getElementById ('expense-table-body')
const totalAmountcell = document.getElementById ('total-amount')

addBtn.addEventListener('click', function(){
   const category = categorySelect.value;
   const amount = Number(amountInput.value);
    const date= dateInput.value;

if(category ===''){
    alert('please select a category');
    return;
}
if(isNaN(amount) || amount <= 0){
    alert('please enter a valid amount');
    return;
}

if(date ===''){
    alert('please select a date');
    return;
}

expenses.push({category,amount,date})

totalAmount += amount;
totalAmountcell.textContent=totalAmount;

const newRow = expenseTableBody.insertnewRow();

const categorycell = newRow.insertcell();
const Amountcell = newRow.insertcell();
const datecell = newRow.insertcell();
const deletecell = newRow.insertcell();

const deleteBtn = document.createElement('button');

deleteBtn.textContent = 'delete';
deleteBtn.classList.add('delete-btn');
deleteBtn.addEventListen('click',function(){
    expenses.splioce(expenses.indexOf(expense),1);

    totalAmount -= expense.amount;
    totalAmountcell.textContent = totalAmount;

    expenseTableBody.removeChild(newRow);
})
const expense = expenses[expenses.length - 1];
categorycell.textContent=expense.category;
Amountcell.textContent=expense.amount; 
datecell.textContent=expense.date;
deletecell.appendchild(deleteBtn);

});
for(const expense of expense){
    totalAmount += amount;
    totalAmountcell.textContent=totalAmount;
    
    const newRow = expenseTableBody.insertnewRow();
    
    const categorycell = newRow.insertcell();
    const Amountcell = newRow.insertcell();
    const datecell = newRow.insertcell();
    const deletecell = newRow.insertcell();
    
    const deleteBtn = document.createElement('button');
    
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListen('click',function(){
        expenses.splioce(expenses.indexOf(expenses),1);
    
        totalAmount -= expense.amount;
        totalAmountcell.textContent = totalAmount;
    
        expenseTableBody.removeChild(newRow);
    })
    const expense = expenses[expenses.length - 1];
    categorycell.textContent=expense.category;
    Amountcell.textContent=expense.amount; 
    datacell.textContent=expense.date;
    deletecell.appendchild(deleteBtn);
     
}





