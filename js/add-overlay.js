// Add overlay live information overlay data (like construction or alerts) to the map
var overlay = L.mapbox.featureLayer() // create a new feature layer called overlay
                .loadURL('https://rawgit.com/WilliamChittester/PSUCampusNightMap/gh-pages/data/campus-map-overlay.json') // load in the campus-map-overlay GeoJSON file from the data folder
                .addTo(map); // add overlay to map
