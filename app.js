document.addEventListener('DOMContentLoaded', () => {
    const manageFlightsButton = document.getElementById('manageFlightsButton');
    const flightManagementSection = document.getElementById('flightManagementSection');
    const flightTableBody = document.querySelector('#flightTable tbody');
    const flightPicker = document.getElementById('flightPicker');

    manageFlightsButton.addEventListener('click', () => {
        flightManagementSection.style.display =
            flightManagementSection.style.display === 'none' ? 'block' : 'none';
    });

    function loadFlights() {
        fetch('flights.php')
            .then((response) => response.json())
            .then((flights) => {
                flightTableBody.innerHTML = '';
                flightPicker.innerHTML = '<option value="">Select a flight</option>';
                flights.forEach((flight) => {
                    // Populate table and dropdown
                });
            });
    }

    // Add new flight
    document.getElementById('addFlightButton').addEventListener('click', () => {
        const formData = new FormData(document.getElementById('flightForm'));
        formData.append('action', 'add');

        fetch('flights.php', {
            method: 'POST',
            body: formData,
        }).then(() => loadFlights());
    });

    // Add form submission for main page
    document.getElementById('flightDetailsForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Collect data and calculate differences
    });

    loadFlights();
});
