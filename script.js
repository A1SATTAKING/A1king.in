const cities = [
    'दिसावर  01:20 Am ', 'सदर बाजार 01:15 Pm',
    'ग्वालियर 02:15 Pm', 'दिल्लीबाजार 02:55 Pm', 'श्री गणेश 04:20 Pm', 'फरीदाबाद 05:45 Pm',
    'मथुरा 07:00 pm', 'गाज़ियाबाद 08:20 Pm', 'अयोध्या 09:40 Pm', 'गली 11:20 Pm'
];

// function updateTable() {
//     const tableBody = document.getElementById('tableBody');
//     tableBody.innerHTML = '';

//     cities.forEach(city => {
//         const yesterdayNumber = localStorage.getItem(`${city}_yesterday`) || '00';
//         const todayNumber = localStorage.getItem(`${city}_today`) || '00';

//         // Debugging logs
//         console.log(`City: ${city}, Yesterday: ${yesterdayNumber}, Today: ${todayNumber}`);

//         tableBody.innerHTML += `
//             <tr>
//                 <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
//                     <div>${city}</div>
//                     <div>Record Chart</div>
//                 </td>
//                 <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">${yesterdayNumber}</td>
//                 <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">${todayNumber}</td>
//             </tr>
//         `;
//     });
// }


  

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

function updateTime() {
    const timerElement = document.getElementById('google-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();  // Initial call to display the time immediately
