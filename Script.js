const endDate = "28 april 2024 12:00:01 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)

// Explanation:

// const endDate = "28 April 2024 12:00:01 AM";: Specifies the end date and time for the countdown.

// document.getElementById("end-date").innerText = endDate;: Sets the inner text of the HTML element with the ID "end-date" to the specified end date. This is likely a visual representation of the end date on the webpage.

// const inputs = document.querySelectorAll("input");: Retrieves all input elements on the page. These inputs are presumably used to display the countdown values for days, hours, minutes, and seconds.

// function clock() { ... }: Defines a function named "clock" responsible for calculating and updating the countdown values based on the current time and the specified end date.

// clock();: Calls the "clock" function initially to set the initial countdown values on the page.

// setInterval(() => { clock(); }, 1000);: Sets up a repeating function using setInterval. The "clock" function will be called every 1000 milliseconds (1 second), ensuring that the countdown values are updated regularly.