

function ExpenseTable({ expenses, onDelete }) {
  return (
    
    <table style={{ width: '92.5%',backgroundColor: '#f2f2f2' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ padding: '8px', textAlign: 'left' }}>Date</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Amount</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Category</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Description</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '8px' }}>{expense.date}</td>
            <td style={{ padding: '8px' }}>{expense.name}</td>
            <td style={{ padding: '8px' }}>${expense.amount.toFixed(2)}</td>
            <td style={{ padding: '8px' }}>{expense.category}</td>
            <td style={{ padding: '8px' }}>{expense.description || '-'}</td>
            <td style={{ padding: '8px' }}>
              <button 
                onClick={() => onDelete(expense.id)}
                style={{ 
                  padding: '4px 8px', 
                  backgroundColor: '#f44336', 
                  color: 'white', 
                  border: 'none', 
                  cursor: 'pointer' 
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
}

export default ExpenseTable;