import { useState } from 'react';
import ExpenseForm from './components/expenseform';
import ExpenseTable from './components/expensetable';

function App() {

  const [expenses, setExpenses] = useState([
    { 
      id: 1, 
      name: 'Coffee', 
      amount: 5, 
      category: 'Food',
      date: '2023-06-15',
      description: 'Morning coffee at Starbucks' 
    },
    { 
      id: 2, 
      name: 'Bus ticket', 
      amount: 2, 
      category: 'Transport',
      date: '2023-06-15',
      description: 'Commute to work' 
    },
  ]);

 
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (expense.description && expense.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    
    <div style={{ maxWidth: '800px', padding: '20px',position: 'absolute',marginTop: '-60px' }}>
    <h1>Expense Tracker</h1>
    <h2>Add Expense</h2>
    
    <ExpenseForm onAdd={addExpense} />
    
    <input
      type="text"
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '90%', padding: '8px' }}
    />
    
    <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
  </div>
);
}

export default App;