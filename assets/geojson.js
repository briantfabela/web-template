// Here ('geojson.js') we will store our GeoJson and Heatmap features
// The features will be put inside variables that area callable ('referenced' by functions when adding them to webmap) in our 'index.html' file or anywhere or anywhere where we link this file to.

/* to link this JavaScript file to '.html' files (our webpages within our website) ame sure to include this line inside the '<head>' section of the html file:
    <script src="assets/geojson.js"></script>
    
    After that the variables inside here like 'cities; can be called from within the <script> section of the html file where our webmap code is.
*/

// We have loaded our geojson data inside the 'cities' varible 
var cities = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#003660",
                "marker-size": "medium",
                "marker-symbol": "college",
                "country": "USA",
                "city": "Santa Barbara"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -119.6905517578125,
          34.41993845660677
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#ff9300",
                "marker-size": "medium",
                "marker-symbol": "cinema",
                "country": "USA",
                "city": "Los Angeles"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -118.21289062499999,
          34.07086232376631
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#ff2600",
                "marker-size": "medium",
                "marker-symbol": "harbor",
                "country": "USA",
                "city": "San Francisco"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -122.3876953125,
          37.77071473849609
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#00fdff",
                "marker-size": "medium",
                "marker-symbol": "zoo",
                "country": "USA",
                "city": "San Diego"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -117.158203125,
          32.731840896865684
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#fffb00",
                "marker-size": "medium",
                "marker-symbol": "ferry",
                "country": "MEX",
                "city": "Cabo San Lucas"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -109.918212890625,
          22.907803451058392
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#7e7e7e",
                "marker-size": "medium",
                "marker-symbol": "land-use",
                "country": "USA",
                "city": "Phoenix"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -112.03857421875,
          33.486435450999885
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#00f900",
                "marker-size": "medium",
                "marker-symbol": "roadblock",
                "city": "El Paso",
                "country": "USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -106.45751953125,
          31.85889704445453
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#0433ff",
                "marker-size": "medium",
                "marker-symbol": "rocket",
                "city": "Houston",
                "country": "USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -95.350341796875,
          29.773913869992242
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#aa6850",
                "marker-size": "medium",
                "marker-symbol": "dog-park",
                "city": "Chihuahua",
                "country": "MEX"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -106.051025390625,
          28.680949728554964
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#7d85a6",
                "marker-size": "medium",
                "marker-symbol": "industrial",
                "city": "Monterrey",
                "country": "USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -100.316162109375,
          25.69103802005013
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#e64ab9",
                "marker-size": "medium",
                "marker-symbol": "shop",
                "city": "Las Vegas",
                "country": "USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -115.15869140624999,
          36.1822249804225
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#f6f000",
                "marker-size": "medium",
                "marker-symbol": "dentist",
                "city": "Mexicali",
                "country": "MEX"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -115.31249999999999,
          32.62087018318113
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#ff9300",
                "marker-size": "medium",
                "marker-symbol": "commercial",
                "city": "Dallas",
                "country": "USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -96.767578125,
          32.82421110161336
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#00f900",
                "marker-size": "medium",
                "marker-symbol": "alcohol-shop",
                "city": "Guadalajara",
                "country": "USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -103.348388671875,
          20.694461597907797
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "#ff2600",
                "marker-size": "medium",
                "marker-symbol": "museum",
                "city": "Mexico City",
                "country": "MEX"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -99.129638671875,
          19.445874298215937
        ]
            }
    }
  ]
};

// this variable includes the coordinates for our cities:

    /*  NOTE ON HOW TO USE THIS:
        - For the heatmap to work they must be in this format: 
            " coordinates list for each city -> '[x, y]' "
        - Optionally the coordinate lists can include a 'z' atribute for intensity ranging from '0' to '0.1'; Example: 
            "[34.56, -119.58, 0.5]"
        Place all those coordinate lists inside another list -> []
        The End result should look like the cities_coord variable:
    */
var cities_coord = [
                [34.4199, -119.6905], // x and y coords per city
                [34.0708, -118.2128],
                [37.7707, -122.3876],
                [32.7318, -117.1582],
                [22.9078, -109.9182],
                [33.4864, -112.0385],
                [31.8588, -106.4575],
                [29.7739, -95.3503],
                [28.6809, -106.051],
                [25.6910, -100.3161],
                [36.1822, -115.1586],
                [32.6208, -115.3124],
                [32.8242, -96.7675],
                [20.694, -103.3483],
                [19.4458, -99.1296]
            ];
