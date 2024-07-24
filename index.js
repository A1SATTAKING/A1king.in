function updateTimer() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Initial call to update the timer
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);
$(document).ready(function () {
    function fetchData() {
        $.ajax({
            url: 'https://api.example.com/get-result', // Replace with the URL of the external website or API
            method: 'GET',
            success: function (data) {
                // Assuming the data contains the number for the city
                $('#result-number').text(data.resultNumber);
            },
            error: function (error) {
                console.error('Error fetching data', error);
            }
        });
    }

    // Fetch data when the document is ready
    fetchData();

    // Optionally, set an interval to fetch the data periodically
    setInterval(fetchData, 60000); // Fetch new data every 60 seconds
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/get-result', (req, res) => {
    res.json({ resultNumber: Math.floor(Math.random() * 100) });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


