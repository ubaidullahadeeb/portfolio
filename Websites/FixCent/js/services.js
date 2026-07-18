// Service data
const servicesData = [
    {
        id: 1,
        title: 'AC General Services',
        description: 'Per AC (1 to 2.5 tons)',
        oldPrice: 'Rs.1200',
        currentPrice: 'Rs.1000',
        rating: '4.8',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20397-rQnnWdo1usZmbKDG4Zu4SakMIxK02X.png',
        includes: [
            'Dismounting of indoor unit',
            'Dismounting of outdoor unit',
            'AC pipe dismounting'
        ],
        excludes: [
            'Any type of repair',
            'Any type of material',
            'Ladder'
        ],
        count: 0
    },
    {
        id: 2,
        title: 'AC Installation',
        description: 'With 10 rft pipe (1 to 2.5 tons)',
        oldPrice: 'Rs.3500',
        currentPrice: 'Rs.3000',
        rating: '4.6',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20397-rQnnWdo1usZmbKDG4Zu4SakMIxK02X.png',
        includes: [
            'Complete AC installation',
            'Up to 10 rft pipe included',
            'Testing and verification'
        ],
        excludes: [
            'Extra piping beyond 10 rft',
            'Wall drilling charges',
            'Stand or bracket'
        ],
        count: 0
    },
    {
        id: 3,
        title: 'AC Repairing',
        description: 'Visit & inspection charges',
        oldPrice: '',
        currentPrice: 'Rs.800',
        rating: '4.7',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20397-rQnnWdo1usZmbKDG4Zu4SakMIxK02X.png',
        includes: [
            'Complete AC diagnosis',
            'Problem identification',
            'Repair recommendation'
        ],
        excludes: [
            'Spare parts cost',
            'Gas refilling',
            'Major repairs'
        ],
        count: 0
    },
    {
        id: 4,
        title: 'AC Mounting & Dismounting',
        description: 'Per AC (1 to 2.5 tons)',
        oldPrice: '',
        currentPrice: 'Rs.3500',
        rating: '4.8',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20397-rQnnWdo1usZmbKDG4Zu4SakMIxK02X.png',
        includes: [
            'Safe dismounting',
            'Professional mounting',
            'Complete installation'
        ],
        excludes: [
            'Piping charges',
            'Gas refilling',
            'Electrical work'
        ],
        count: 0
    },
    {
        id: 5,
        title: 'AC Dismounting',
        description: 'Per AC (1 to 2.5 tons)',
        oldPrice: 'Rs.1200',
        currentPrice: 'Rs.1000',
        rating: '4.5',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20397-rQnnWdo1usZmbKDG4Zu4SakMIxK02X.png',
        includes: [
            'Safe AC dismounting',
            'Gas recovery',
            'Pipe disconnection'
        ],
        excludes: [
            'Transportation',
            'Storage',
            'Reinstallation'
        ],
        count: 0
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderServiceCards();
});

// Render service cards
function renderServiceCards() {
    const container = document.getElementById('serviceCardsRow');
    container.innerHTML = '';

    servicesData.forEach(service => {
        const cardHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="service-card" onclick="openDetailedView(${service.id})">
                    <img src="${service.image}" alt="${service.title}" class="service-card-image">
                    <div class="service-card-body">
                        <h3 class="service-card-title">${service.title}</h3>
                        <p class="service-card-description">${service.description}</p>
                        <div class="price-section">
                            ${service.oldPrice ? `<span class="old-price">${service.oldPrice}</span>` : ''}
                            <span class="current-price">${service.currentPrice}</span>
                        </div>
                        <div class="card-footer-section">
                            <span class="rating-badge">
                                <i class="fas fa-star"></i> ${service.rating}
                            </span>
                            <div class="counter-controls" onclick="event.stopPropagation()">
                                <button class="minus-btn ${service.count > 0 ? 'visible' : ''}" 
                                        id="minus-${service.id}" 
                                        onclick="decrementCount(${service.id})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="count-display" id="count-${service.id}">${service.count}</span>
                                <button class="add-btn" onclick="incrementCount(${service.id})">
                                    Add <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Increment counter
function incrementCount(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (service) {
        service.count++;
        updateCounterDisplay(serviceId);
    }
}

// Decrement counter
function decrementCount(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (service && service.count > 0) {
        service.count--;
        updateCounterDisplay(serviceId);
    }
}

// Update counter display
function updateCounterDisplay(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    const countElement = document.getElementById(`count-${serviceId}`);
    const minusBtn = document.getElementById(`minus-${serviceId}`);
    
    if (countElement) {
        countElement.textContent = service.count;
    }
    
    if (minusBtn) {
        if (service.count > 0) {
            minusBtn.classList.add('visible');
        } else {
            minusBtn.classList.remove('visible');
        }
    }
}

// Open detailed view
function openDetailedView(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;

    // Populate detailed view
    document.getElementById('detailImage').src = service.image;
    document.getElementById('detailTitle').textContent = service.title;
    document.getElementById('detailDescription').textContent = service.description;
    document.getElementById('detailOldPrice').textContent = service.oldPrice;
    document.getElementById('detailPrice').textContent = service.currentPrice;
    document.getElementById('detailRating').textContent = `★ ${service.rating}`;
    document.getElementById('detailCount').textContent = service.count;

    // Show/hide minus button in detailed view
    const detailMinusBtn = document.getElementById('detailMinusBtn');
    detailMinusBtn.style.display = service.count > 0 ? 'flex' : 'none';

    // Populate includes list
    const includesList = document.getElementById('includesList');
    includesList.innerHTML = '';
    service.includes.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        includesList.appendChild(li);
    });

    // Populate excludes list
    const excludesList = document.getElementById('excludesList');
    excludesList.innerHTML = '';
    service.excludes.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        excludesList.appendChild(li);
    });

    // Setup counter buttons for detailed view
    document.getElementById('detailAddBtn').onclick = function() {
        service.count++;
        document.getElementById('detailCount').textContent = service.count;
        detailMinusBtn.style.display = 'flex';
        updateCounterDisplay(serviceId);
    };

    document.getElementById('detailMinusBtn').onclick = function() {
        if (service.count > 0) {
            service.count--;
            document.getElementById('detailCount').textContent = service.count;
            if (service.count === 0) {
                detailMinusBtn.style.display = 'none';
            }
            updateCounterDisplay(serviceId);
        }
    };

    // Show detailed view
    document.getElementById('detailedServiceView').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close detailed view
function closeDetailedView() {
    document.getElementById('detailedServiceView').classList.remove('active');
    document.body.style.overflow = 'auto';
}