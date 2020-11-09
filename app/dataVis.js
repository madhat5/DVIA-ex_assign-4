// var map = new Datamap({element: document.getElementById('container')});

var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('map_election'),
    geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function (geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name + 'Electoral Votes: ' +  data.electoralVotes + ' '
        },
        highlightBorderWidth: 3
    },

    fills: {
        'Republican': '#CC4731',
        'Democrat': '#306596',
        'Heavy Democrat': '#667FAF',
        'Light Democrat': '#A9C0DE',
        'Heavy Republican': '#CA5E5B',
        'Light Republican': '#EAA9A8',
        defaultFill: '#EDDC4E'
    },
    data: {
        "AZ": {
            "fillKey": "Republican",
            "electoralVotes": 5
        },
        "CO": {
            "fillKey": "Light Democrat",
            "electoralVotes": 5
        },
        "DE": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 29
        },
        "GA": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "HI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "ID": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "IL": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "IN": {
            "fillKey": "Republican",
            "electoralVotes": 11
        },
        "IA": {
            "fillKey": "Light Democrat",
            "electoralVotes": 11
        },
        "KS": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "KY": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "LA": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "MD": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "ME": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MN": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MS": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "MO": {
            "fillKey": "Republican",
            "electoralVotes": 13
        },
        "MT": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "NC": {
            "fillKey": "Light Republican",
            "electoralVotes": 32
        },
        "NE": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "NV": {
            "fillKey": "Heavy Democrat",
            "electoralVotes": 32
        },
        "NH": {
            "fillKey": "Light Democrat",
            "electoralVotes": 32
        },
        "NJ": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "NY": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "ND": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "NM": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 32
        },
        "OK": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "OR": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "PA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "RI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "SC": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "SD": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "TN": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "TX": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "UT": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "WI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "VA": {
            "fillKey": "Light Democrat",
            "electoralVotes": 32
        },
        "VT": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "WA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "WV": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "WY": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "CA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "CT": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "AK": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "AR": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "AL": {
            "fillKey": "Republican",
            "electoralVotes": 32
        }
    }
});
election.labels();







// ========================================================================
// // The svg
// var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height");

// // Map and projection
// let projection = d3.geoMercator()
//     .center([-100, 40]) // GPS of location to zoom on
//     .scale(550) // This is like the zoom
//     .translate([width / 2, height / 2])

// // Data and color scale
// var data = d3.map();
// var colorScale = d3.scaleThreshold()
//     .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
//     .range(d3.schemeBlues[7]);

// // Load external data and boot
// d3.queue()
//     .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
//     .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function (d) {
//         data.set(d.code, +d.pop);
//     })
//     .await(ready);

// function ready(error, topo) {

//     // Draw the map
//     svg.append("g")
//         .selectAll("path")
//         .data(topo.features)
//         .enter()
//         .append("path")
//         // draw each country
//         .attr("d", d3.geoPath()
//             .projection(projection)
//         )
//         // set the color of each country
//         .attr("fill", function (d) {
//             d.total = data.get(d.id) || 0;
//             return colorScale(d.total);
//         });
// }