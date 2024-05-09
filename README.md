# CRUD-Operations
CRUD-Operations-Using-HTML-CSS-JAVASCRIPT
It looks like you’ve shared a CRUD (Create, Read, Update, Delete) application’s HTML structure. This application is designed to manage mobile products. Here’s a brief overview of its structure:

The application uses Bootstrap for styling and Remixicon for icons.
The main page displays a table titled “Manage Mobiles” with columns for Mobile, Price, RAM, and Storage.
There’s an “Add Product” button for adding new mobile products.
Each product can be edited or deleted, which is likely handled in the JavaScript file Index.js.
There’s a form for adding or updating mobile products. The form includes fields for Mobile, Price, RAM, and Storage.
Please note that this is just the HTML structure. The actual functionality like creating, reading, updating, and deleting the products would be implemented in the JavaScript file (Index.js) which is linked at the end of your HTML code.
The .add button opens the form to add a new product by adding the active class to .form-wrapper.
The .cancel button closes the form by removing the active class from .form-wrapper.
The GetData function fetches data from http://localhost:3000/posts and calls DisplayDataInDOM to display the data.
The DisplayDataInDOM function creates a new table row for each item in the data and appends it to the Output element. Each row includes an edit and delete button.
The edit button opens the form and sets TargetData to the id of the current row.
The delete button sets TargetData to the id of the current row and calls DeleteData.
The PostData function is called when the .save button is clicked. It sends a POST request to add a new product.
The UpdateData function is called when the .update button is clicked. It sends a PUT request to update the product with the id TargetData.
The DeleteData function sends a DELETE request to delete the product with the id TargetData.
