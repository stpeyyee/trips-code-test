
const url = "http://localhost:5000"
export async function getTrips() {
    fetch(`${url}/trips`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON data
    }).then((data) => {
        return data
    }).catch((error) => {
        console.error('Error:', error); // Handle errors
    });
}
