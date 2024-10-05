const disasterInfo = [
    {
        name: 'Flood',
        image: 'https://i.ytimg.com/vi/DXC9dgkQGVg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFQgZShGMA8=&rs=AOn4CLBQbzhU-7eBp3ev2ZrCR57bW1Y0VA', // Replace with actual image path
        description: `Floods can cause significant damage to crops and farmland by submerging fields, disrupting farming activities, and posing risks to livestock.<br><br>
        <strong>Before the Flood:</strong><br>
        - Identify flood risks by checking flood maps and forecasts.<br>
        - Create barriers such as sandbags to divert water from crops and buildings.<br>
        - Move equipment and livestock to higher ground.<br>
        - Install drainage systems to redirect excess water away from fields.<br>
        - Prepare emergency kits with essential tools, first-aid supplies, and food.<br><br>
        <strong>During the Flood:</strong><br>
        - Follow evacuation orders to avoid being trapped by rising floodwaters.<br>
        - Turn off power to avoid electrical hazards.<br>
        - Avoid walking or driving through floodwaters to stay safe.<br><br>
        <strong>After the Flood:</strong><br>
        - Inspect crops and soil for water damage.<br>
        - Clean and disinfect tools, barns, and surfaces exposed to floodwaters.<br>
        - Seek assistance from government or agricultural relief programs to recover from the flood.`
    },
    {
        name: 'Drought',
        image: 'https://www.shutterstock.com/image-photo/cornfield-corn-crop-damage-cracked-600nw-2040220538.jpg', // Replace with actual image path
        description: `Droughts significantly reduce water availability, threatening crops and livestock. Farmers should take the following steps to prepare for and survive a drought:<br><br>
        <strong>Before the Drought:</strong><br>
        - Select crops that are more tolerant to dry conditions, such as sorghum or millet, to reduce water dependency.<br>
        - Install efficient drip or sprinkler irrigation systems to minimize water wastage.<br>
        - Use mulch and organic matter to improve soil water retention, preventing water loss from evaporation.<br>
        - Build reservoirs or ponds to capture rainwater during wet seasons and store it for use during droughts.<br>
        - Use weather forecasts and soil moisture sensors to track conditions and plan irrigation accordingly.<br><br>
        <strong>During the Drought:</strong><br>
        - Focus water resources on high-value crops or those in critical growth stages (like flowering or fruiting).<br>
        - Minimize soil disturbance to prevent moisture loss from deeper soil layers.<br>
        - Add mulch around crops to conserve moisture and reduce soil temperature.<br>
        - Water crops early in the morning or late in the evening to minimize evaporation.<br><br>
        <strong>After the Drought:</strong><br>
        - Replenish soil nutrients through cover crops or organic compost to restore soil health.<br>
        - Rebuild and maintain water storage systems, such as ponds and reservoirs, for future droughts.<br>
        - Assess the health of crops and determine which crops need replanting or soil recovery efforts.<br>
        - Apply for government programs that offer financial assistance or resources for drought recovery.`
    },
    {
        name: 'Storm',
        image: 'https://w0.peakpx.com/wallpaper/716/701/HD-wallpaper-lightening-clouds-colorful-cg-beautiful-sky-clouds-storm-scary-beauty-nature-field-landscape.jpg', // Replace with actual image path
        description: `Storms can cause significant damage through high winds, heavy rains, and hail. Farmers should take the following steps to prepare for and survive a storm:<br><br>
        <strong>Before the Storm:</strong><br>
        - Anchor or move heavy machinery and tools to prevent damage.<br>
        - Use windbreaks, tarps, or row covers to shield crops from wind and hail.<br>
        - Harvest any ripe crops before the storm to minimize losses.<br>
        - Reinforce barns, greenhouses, and other structures to withstand strong winds.<br><br>
        <strong>During the Storm:</strong><br>
        - Stay indoors or in a reinforced structure during the storm.<br>
        - Do not walk or drive through flooded areas.<br>
        - Shut off electricity to avoid electrical hazards.<br><br>
        <strong>After the Storm:</strong><br>
        - Assess crop and structural damage once it is safe.<br>
        - Repair damaged fences, barns, and infrastructure.<br>
        - Seek help from local agricultural organizations or government relief programs.`
    },
    {
        name: 'Wildfire',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMv_2zlhVKP4-3hF2N7xUE0wO5E0KL4x3zw&s', // Replace with actual image path
        description: `Wildfires can destroy crops and farmland. Farmers should take the following steps to prepare for and survive a wildfire:<br><br>
        <strong>Before the Wildfire:</strong><br>
        - Clear vegetation and debris to create defensible space around buildings and crops.<br>
        - Ensure that firefighting tools (like hoses, shovels, and rakes) are accessible and in good condition.<br>
        - Keep fuels, propane tanks, and other flammable materials away from structures.<br>
        - Establish an evacuation plan for you and your livestock, including routes and safe locations.<br>
        - Keep an eye on local weather reports and fire danger ratings in your area.<br><br>
        <strong>During the Wildfire:</strong><br>
        - Evacuate immediately if authorities issue orders to do so.<br>
        - If trapped, seek shelter in a cleared area with little vegetation.<br>
        - Stay indoors with windows and doors closed to keep smoke out.<br><br>
        <strong>After the Wildfire:</strong><br>
        - Assess damage to crops, equipment, and infrastructure.<br>
        - Clean up debris and ash from burned areas to promote regrowth.<br>
        - Participate in community recovery efforts to restore the affected areas.`
    }
];

// Load Infographics and Attach Click Events
function loadInfographics() {
    const container = document.getElementById('disasterInfographics');
    disasterInfo.forEach(info => {
        const infographic = document.createElement('div');
        infographic.classList.add('infographic');
        infographic.innerHTML = `
            <h3>${info.name}</h3>
            <img src="${info.image}" alt="${info.name}" class="disaster-image" />
        `;
        
        // Click event to show description
        infographic.querySelector('img').addEventListener('click', () => {
            showDescription(info.description);
        });

        container.appendChild(infographic);
    });
}

// Function to Display Description in Modal
function showDescription(description) {
    const descriptionContainer = document.getElementById('descriptionText');
    descriptionContainer.innerHTML = description;
    document.getElementById('descriptionModal').style.display = 'block';
}

// Close the modal
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
    document.getElementById('descriptionModal').style.display = 'none';
});

// Close the modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('descriptionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Buzzer Button Functionality
document.getElementById('buzzerBtn').addEventListener('click', () => {
    alert('Rescue team has been notified!');
});

// Load Infographics on Page Load

const predictions = [
    { name: 'Flood', probability: 70 },
    { name: 'Drought', probability: 50 },
    { name: 'Storm', probability: 60 },
    { name: 'Wildfire', probability: 30 }
];

// Function to create disaster prediction chart
function createPredictionChart() {
    const ctx = document.getElementById('predictionChart').getContext('2d');
    const disasterNames = predictions.map(p => p.name);
    const disasterProbabilities = predictions.map(p => p.probability);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: disasterNames,
            datasets: [{
                label: 'Disaster Probability (%)',
                data: disasterProbabilities,
                backgroundColor: ['#FF5733', '#FFC300', '#28B463', '#DAF7A6'],
                borderColor: ['#C70039', '#FF5733', '#138D75', '#FFC300'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Load infographics and prediction chart when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadInfographics();
    createPredictionChart();
});
