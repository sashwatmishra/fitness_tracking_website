// function colorChange(event) {
//     const element = event.target;
//     const items = document.querySelectorAll('.days li');

//     // toggles off all other active dates
//     items.forEach(item => {
//         item.classList.remove('current-day');
//     });
    
//     element.classList.add("current-day")

// }

function clearCurrentDay() {
    const carouselItems = document.querySelectorAll('.days li');
    carouselItems.forEach((item) => {
        item.classList.remove('current-day');
    });
}

function beginner() {
    clearCurrentDay(); // Clear the current-day class from all items

    const carouselItems = document.querySelectorAll('.days li');
    const pattern = [0, 2, 5]; // This pattern applies to every 7-day block

    carouselItems.forEach((item, index) => {
        // Determine the position within the 7-day block
        const positionInBlock = index % 7;

        // Check if the current position matches one of the pattern days
        if (pattern.includes(positionInBlock)) {
            item.classList.add('current-day');
        }
    });
}

function medium() {
    clearCurrentDay(); // Clear the current-day class from all items

    const carouselItems = document.querySelectorAll('.days li');
    const pattern = [0, 1, 3, 5]; // Positions to apply the class

    carouselItems.forEach((item, index) => {
        // Determine the position within the block of interest
        if (pattern.includes(index % 7)) { // Assuming 7-day blocks
            item.classList.add('current-day');
        }
    });
}

function hard() {
    clearCurrentDay(); // Clear the current-day class from all items

    const carouselItems = document.querySelectorAll('.days li');
    const pattern = [0, 1, 2, 4, 5, 5]; // Positions to apply the class

    carouselItems.forEach((item, index) => {
        // Determine the position within the block of interest
        if (pattern.includes(index % 7)) { // Assuming 7-day blocks
            item.classList.add('current-day');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const years = [2024, 2025, 2026, 2027,2028,2029,2030];

    const carouselInner = document.getElementById('carousel-inner');

    years.forEach(year => {
        months.forEach((month, index) => {
            const daysInMonth = new Date(year, index + 1, 0).getDate();
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (year === 2024 && month === "January") {
                carouselItem.classList.add('active');
            }
            carouselItem.innerHTML = `
                <div class="month-content">
                    <div class="month-year-container">
                        <h1>${month}</h1>
                        <h2>${year}</h2>
                    </div>

                    <ul class="weekdays">
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                        <li>Su</li>
                    </ul>

                    <ul class="days">
                        ${generateDays(daysInMonth)}
                    </ul>
                </div>
            `;
            carouselInner.appendChild(carouselItem);
        });
    });

    function generateDays(days) {
        let daysHtml = '';
        for (let i = 1; i <= days; i++) {
            daysHtml += `<li onclick="colorChange(event)">${i}</li>`;
        }
        return daysHtml;
    }
});

document.querySelector('.btn1').addEventListener('click', beginner);
document.querySelector('.btn2').addEventListener('click', medium);
document.querySelector('.btn3').addEventListener('click', hard);
