document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const city1 = document.getElementById('city1').value;
    const number = document.getElementById('number').value;
    const nextCity = document.getElementById('nextCity').value;

    localStorage.setItem('cityName1', city1);
    localStorage.setItem('number', number);
    localStorage.setItem('nextCity', nextCity);

    const cities = [
        'सदर बाजार', 'ग्वालियर', 'दिल्ली बाजार', 'श्री गणेश',
        'फरीदाबाद', 'कानपुर सिटी', 'गाज़ियाबाद', 'अयोध्या',
        'गली', 'दिसावर', 'आजमगढ़', 'गोरखपुर', 'मथुरा', 'रायपुर'
    ];

    cities.forEach(city => {
        localStorage.setItem(`${city}_yesterday`, document.getElementById(`${city}_yesterday`).value || '00');
        localStorage.setItem(`${city}_today`, document.getElementById(`${city}_today`).value || '00');
    });

    console.log('Data updated successfully!');
    cities.forEach(city => {
        console.log(`${city}_yesterday:`, localStorage.getItem(`${city}_yesterday`));
        console.log(`${city}_today:`, localStorage.getItem(`${city}_today`));
    });

    populateCityNumbers(); // Refresh the table data after submission
});

function populateCityNumbers() {
    const cities = [
        'सदर बाजार', 'ग्वालियर', 'दिल्ली बाजार', 'श्री गणेश',
        'फरीदाबाद', 'कानपुर सिटी', 'गाज़ियाबाद', 'अयोध्या',
        'गली', 'दिसावर', 'मथुरा'
    ];

    cities.forEach(city => {
        const yesterday = localStorage.getItem(`${city}_yesterday`) || '00';
        const today = localStorage.getItem(`${city}_today`) || '00';

        document.getElementById(`${city}_yesterday`).value = yesterday;
        document.getElementById(`${city}_today`).value = today;
    });
}

// Call the function to populate the data when the page loads
populateCityNumbers();
