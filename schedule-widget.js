// --- CONFIGURATION: Replace these with your actual details ---
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
const API_KEY = 'YOUR_API_KEY';
const SHEET_NAME = 'Sheet1'; // Make sure this matches your sheet's name
const RANGE = 'A1:C10'; // Adjust the range to cover your data (e.g., 'A1:D15')

// --- MAIN FUNCTION: Fetch and display data ---
async function fetchAndDisplaySchedule() {
    // Get the element where the schedule will be rendered
    const scheduleContainer = document.getElementById('schedule-container');

    // Construct the Google Sheets API URL
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!${RANGE}?key=${API_KEY}`;

    try {
        // Fetch the data from the API
        const response = await fetch(url);

        // Check for HTTP errors (e.g., 404, 403)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if the sheet has any data
        if (data.values && data.values.length > 0) {
            // Process the data and create the HTML
            generateScheduleHTML(data.values, scheduleContainer);
        } else {
            // Handle case where no data is returned
            scheduleContainer.innerHTML = '<p>No schedule events found.</p>';
        }

    } catch (error) {
        // Log the error to the console for debugging
        console.error('Error fetching schedule data:', error);
        // Display a user-friendly error message on the page
        scheduleContainer.innerHTML = '<p>Failed to load the schedule. Please try again later.</p>';
    }
}

// --- HELPER FUNCTION: Generate HTML from data ---
function generateScheduleHTML(data, container) {
    // Clear previous content to avoid duplicates on re-render
    container.innerHTML = '';

    // Loop through each row of data (assuming the first row is headers)
    for (let i = 1; i < data.length; i++) {
        const row = data[i];

        // Ensure the row has enough columns
        if (row.length < 3) continue;

        const eventName = row[0]; // First column
        const eventDate = row[1]; // Second column
        const eventTime = row[2]; // Third column

        // Create a new div for each schedule item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'schedule-item'; // Use a class for CSS styling

        // Populate the div with the data
        itemDiv.innerHTML = `
            <h3>${eventName}</h3>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
        `;

        // Add the new item to the container
        container.appendChild(itemDiv);
    }
}

// --- EXECUTION: Run the function on page load ---
document.addEventListener('DOMContentLoaded', fetchAndDisplaySchedule);
