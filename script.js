const cities = [
    'दिसावर  01:20 Am ', 'आजमगढ़ 11:20 am', 'गोरखपुर 12:10 pm', 'सदर बाजार 01:15 Pm',
    'ग्वालियर 02:15 Pm', 'दिल्लीबाजार 02:55 Pm', 'श्री गणेश 04:20 Pm', 'फरीदाबाद 05:45 Pm'
    ,
    'मथुरा 07:00 pm', 'रायपुर  07:00 pm', 'गाज़ियाबाद 08:20 Pm', 'अयोध्या 09:40 Pm', 'गली 11:20 Pm'
];

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    cities.forEach(city => {
        const yesterdayNumber = localStorage.getItem(`${city}_yesterday`) || '00';
        const todayNumber = localStorage.getItem(`${city}_today`) || '00';

        tableBody.innerHTML += `
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>${city}</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">${yesterdayNumber}</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">${todayNumber}</td>
            </tr>
        `;
    });
}

function updateInfo() {
    const cityName1 = document.getElementById('cityName1');
    const numberDisplay = document.getElementById('number');
    const nextCityDisplay = document.getElementById('nextCity');
    const liveTimerDisplay = document.getElementById('liveTimer');

    const storedCityName1 = localStorage.getItem('cityName1') || cities[0];
    const storedNumber = localStorage.getItem('number') || '00';
    const storedNextCity = localStorage.getItem('nextCity') || cities[1];

    cityName1.textContent = storedCityName1;
    numberDisplay.textContent = storedNumber;
    nextCityDisplay.textContent = storedNextCity;

    updateTable();

    // Live timer for next update (example: every 10 seconds)
    const nextUpdateTime = new Date(Date.now() + 10 * 1000); // 10 seconds from now
    const updateTimer = setInterval(() => {
        const now = new Date();
        const timeLeft = nextUpdateTime - now;
        if (timeLeft <= 0) {
            clearInterval(updateTimer);
            updateInfo();
            return;
        }
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        liveTimerDisplay.textContent = seconds + "s";
    }, 1000);
}

updateInfo();

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('google-time').textContent = timeString;
}

setInterval(updateTime, 1000); // Update the time every second
updateTime(); // Initial call to set the time immediately
