import { home } from './content_home.js';
import { generateHTML } from './content_page.js';

export function run() {
    const urlParams = new URLSearchParams(window.location.search);
    let site = urlParams.get('site') || 'home';

    document.getElementById('sitehead').innerHTML = site;

    if (site === "home") {
        document.getElementById('itemcontainer').innerHTML = home;
    } else {
        // Function to render the items
        function renderItems(items) {
            const container = document.getElementById('itemcontainer');
            container.innerHTML = items.map(generateHTML).join('');
        }

        // Fetch the JSON file
        fetch(`lists/${site}.json`)
            .then(response => response.json())
            .then(items => {
                // Use the items array to generate HTML or perform other operations
                renderItems(items);
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    }
}
