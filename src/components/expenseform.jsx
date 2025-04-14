import { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    onAdd({
      name,
      amount: Number(amount),
      category,
      date,
      description
    });
    
    // Reset form
    setName('');
    setAmount('');
    setCategory('Food');
    setDate(new Date().toISOString().split('T')[0]);
    setDescription('');
  };

  return (
    
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px',backgroundColor: '#f2f2f2',borderRadius: '5%',padding: '40px 0',marginRight:'50%'}}>
      <div style={{ marginBottom: '10px',marginLeft:'10%',marginTop:'-25px' }}>
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '70%', padding: '8px',borderRadius: '20px' }} 
          required
        />
      </div>
      
      <div style={{ marginBottom: '10px',marginLeft:'10%' }}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '70%', padding: '8px',borderRadius: '20px' }}
          min="0"
          step="0.01"
          required
        />
      </div>
      
      <div style={{ marginBottom: '10px',marginLeft:'10%' }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: '75%', padding: '8px',borderRadius: '20px' }}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div style={{ marginBottom: '10px' ,marginLeft:'10%'}}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: '70%', padding: '8px',borderRadius: '20px' }}
          required
        />
      </div>
      
      <div style={{ marginBottom: '10px',marginLeft:'10%' }}>
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '70%', padding: '8px',borderRadius: '20px' }}
        />
      </div>
      
      <button 
        type="submit"
        style={{ 
          padding: '8px 16px', 
          backgroundColor: '#4CAF50', 
          color: 'black', 
          border: 'none', 
          cursor: 'pointer',
          marginLeft:'10%' ,
          borderRadius: '20px',
        

        }}
      >
        Submit
      </button>
    </form>
    
  );
}

export default ExpenseForm; 
