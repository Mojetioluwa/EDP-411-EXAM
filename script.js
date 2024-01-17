function updateDateTime() {
    var now = new Date();

    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    var year = now.getFullYear();

    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    var formattedDateTime = day + '/' + month + '/' + year + ' - ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('time').innerText = formattedDateTime;
}

// Update the date and time initially
updateDateTime();

// Update every second (1000 milliseconds)
setInterval(updateDateTime, 1000);