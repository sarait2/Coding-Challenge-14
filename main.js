// TASK 2 - Fetch Tickets Using Async/Await and Handle Errors
// Create a JavaScript file (e.g., tickets.js)

// Select the element to display ticket data
const orderList = document.getElementById('orderList');

// Async function to fetch and display tickets
async function fetchTickets() {
    try {
        // Fetch data from the Unresolved Tickets API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to obtain ticket information');
        }

        const tickets = await response.json();

        // Show error if no tickets are found
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available');
        }

        // TASK 3 - Display ticket info
        const unresolvedTickets = [
            // Sample tickets
            { ticketId: 12, userId: 'user123', title: 'Login Issue', body: 'Unable to login.' },
            { ticketId: 22, userId: 'user456', title: 'Unsuccessful Payment', body: 'Payment is failing with error code.' },
        ];
        tickets.forEach(ticket => {
            const listItem = document.createElement('li');
            listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: User ${ticket.userId}, Issue Description: ${ticket.title}, Details: ${ticket.body}`;
            orderList.appendChild(listItem);
        });
    } catch (error) {
        // Log error message
        console.error('Error:', error.message);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    }
 finally {
    // TASK 4 
// Call the function to fetch and display ticket
fetchTickets();
 }
