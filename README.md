# Expense Tracker Application

## Overview
A simple React-based expense tracking application that allows users to:
- Add new expenses with details
- View all expenses in a table
- Search/filter expenses
- Delete expenses

## Features
- **Add Expenses**: Name, amount, category, date, and description
- **Expense Table**: Displays all expense records
- **Search Functionality**: Filter expenses by any field
- **Delete Expenses**: Remove unwanted entries


## Installation
1. Clone the repository:
   ```bash
   git clone https://git@github.com:Mitche-44/expense-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Fill out the form on the left to add new expenses
2. View all your expenses in the table on the right
3. Use the search bar to filter expenses
4. Click the delete button to remove expenses

## Project Structure
```
/src
|-- App.js          # Main application component
|-- ExpenseForm.js  # Form for adding new expenses
|-- ExpenseTable.js # Table displaying all expenses
|-- index.css       # Global styles
```

## Dependencies
- React
- React DOM

## Screenshot
![Expense Tracker Screenshot](/src/assets/expense-tracker.PNG)


[Check out the live app on Vercel.](https://expense-tracker-one-psi-56.vercel.app)


## License
- This project is open source and available under the MIT License.