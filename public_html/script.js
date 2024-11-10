const events = [
    {
        id: 1,
        title: 'Eminem Concert',
        date: 'July 15, 2025',
        category: 'concerts',
        location: 'Madison Square Garden, New York, USA',
        description: `Get ready for an unforgettable night as Eminem takes the stage in his highly anticipated 2025 tour. 
                      Known for his intense energy and powerful lyrics, Eminem will perform hits from his entire career, 
                      including "Lose Yourself," "Not Afraid," and "Rap God." Special guests will make appearances, 
                      adding even more excitement to the evening.`,
        image: 'img/eminem.png'
    },
    {
        id: 2,
        title: 'Champions League Final',
        date: 'May 28, 2025',
        category: 'sports',
        location: 'Allianz Arena, Munich, Germany',
        description: `The pinnacle of European soccer returns with the Champions League Final, held at the Allianz Arena. 
                      Fans from across the globe will gather to witness a showdown between Europe’s top two teams, each vying 
                      for the coveted trophy. Expect world-class players, strategic plays, and nail-biting suspense.`,
        image: 'img/champions_league.png'
    },
    {
        id: 3,
        title: 'National Basketball Finals',
        date: 'June 20, 2025',
        category: 'sports',
        location: 'Staples Center, Los Angeles, USA',
        description: `The National Basketball Finals are here, where the two top teams of the season face off in an exhilarating 
                      seven-game series. This year's Finals bring together all-stars and emerging talents, showcasing skill, 
                      speed, and athleticism at the highest level.`,
        image: 'img/basketball_finals.png'
    },
    {
        id: 4,
        title: 'NFL Match: Patriots vs Eagles',
        date: 'September 12, 2025',
        category: 'sports',
        location: 'Gillette Stadium, Foxborough, USA',
        description: `The NFL returns with a thrilling matchup between the New England Patriots and the Philadelphia Eagles. 
                      This game promises edge-of-your-seat excitement as the Patriots' precise offense faces the Eagles' 
                      relentless defense. Get ready for high-stakes tension and unforgettable moments.`,
        image: 'img/nfl_match.png'
    },
    {
        id: 5,
        title: 'Tennis Match: Rafael Nadal vs Roger Federer',
        date: 'August 10, 2025',
        category: 'sports',
        location: 'Arthur Ashe Stadium, New York, USA',
        description: `Two legends of the tennis world, Rafael Nadal and Roger Federer, come head-to-head in an epic showdown. 
                      Known for their iconic rivalry, these champions will bring intense rallies and strategic gameplay 
                      to this highly anticipated match.`,
        image: 'img/tennis_match.png'
    },
    {
        id: 6,
        title: 'La Liga Match: Real Madrid vs Barcelona',
        date: 'April 3, 2025',
        category: 'sports',
        location: 'Santiago Bernabeu Stadium, Madrid, Spain',
        description: `The legendary El Clasico is back as Real Madrid faces Barcelona in this exciting La Liga match. 
                      This match promises thrilling competition and showcases one of soccer's most iconic rivalries.`,
        image: 'img/real_madrid_vs_barcelona.png'
    },
    {
        id: 7,
        title: 'Europe Tech Summit 2025',
        date: 'November 18-20, 2025',
        category: 'conference',
        location: 'Messe Berlin, Berlin, Germany',
        description: `Join the brightest minds in technology at the Europe Tech Summit. This premier event will cover 
                      the latest trends in AI, cybersecurity, and more. Network with industry leaders and attend insightful 
                      sessions on the future of technology.`,
        image: 'img/tech_summit.png'
    },
    {
        id: 8,
        title: 'Snoop Dogg Concert',
        date: 'October 14, 2025',
        category: 'concerts',
        location: 'The O2 Arena, London, UK',
        description: `Enjoy an unforgettable evening with Snoop Dogg live in concert, as he performs his classic hits 
                      and fan favorites. This event is a must-see for hip-hop enthusiasts.`,
        image: 'img/snoop_dogg.png'
    },
    {
        id: 9,
        title: 'New Year\'s Eve Gala at Times Square',
        date: 'December 31, 2025',
        category: 'celebration',
        location: 'Times Square, New York City, USA',
        description: `Ring in the New Year at Times Square with live music, performances, and the iconic Ball Drop. 
                      Join thousands of attendees for this celebrated event, which is broadcast worldwide.`,
        image: 'img/times_square_new_year.png'
    }
];

// Function to open event details in a new page
function openEventDetails(eventId) {
    // Redirect to event-details.html with the event ID as a query parameter
    window.location.href = `event-details.html?id=${eventId}`;
}

// Function to load event details on event-details.html
function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'), 10);
    const event = events.find(e => e.id === eventId);

    if (event) {
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-date').textContent = event.date;
        document.getElementById('event-location').textContent = event.location;
        document.getElementById('event-category').textContent = event.category;
        document.getElementById('event-description').textContent = event.description;
        document.getElementById('event-image').src = event.image;
    } else {
        document.body.innerHTML = '<p>Event not found.</p>';
    }
}

// Automatically load event details if on event-details.html
if (window.location.pathname.includes('event-details.html')) {
    document.addEventListener('DOMContentLoaded', loadEventDetails);
}

// Search and display results as previously implemented (for search functionality in index.html)
function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.toLowerCase();
    const category = document.getElementById('category').value;

    const filteredResults = events.filter(result => {
        const matchesQuery = query === '' || result.title.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || result.category === category;
        return matchesQuery && matchesCategory;
    });

    displayResults(filteredResults);
}

function displayResults(filteredResults) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    document.getElementById('search-results-section').style.display = 'block';

    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${result.title}</strong> - ${result.category} - ${result.date}`;
            listItem.style.cursor = 'pointer';
            listItem.onclick = () => openEventDetails(result.id);
            resultsList.appendChild(listItem);
        });
        document.getElementById('no-results-message').style.display = 'none';
    } else {
        document.getElementById('no-results-message').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.card');
    eventCards.forEach((card, index) => {
        card.addEventListener('click', () => openEventDetails(events[index].id));
    });
});
