 // model for store locations
     $(document).ready(function(){
    //Global variable declaration
    var map_location = [];
    var model = {

        "locations" : [
            {
                location: "Fremont CA",
            },
            {
                location : 'Sunnyvale CA',
            },
            {
                location : 'Santa Clara CA',
            },
            {
                location : 'Milpitas CA',
            },
            {
                location : 'San Francisco CA',
            }
        ]
    };


   

        var map;    // declares a global map variable
        window.addEventListener('resize', function(e) {
          // Make sure the map bounds get updated on page resize
         });


	var initlist = function() {
	for (i = 0; i < map_location.length; i++) {
				
				if(map_location[i].formatted_address == document.getElementById('myFilter').value)
				{
					alert(map_location[i].formatted_address)
				}
				else
				{
					 var marker = new google.maps.Marker({
					  map: null,
					  position: null,
					  title: null

            });
				}
	}
			
}
     /*  var initlist = function() {
            ul = document.createElement('ul');
            var div = document.getElementById('location-list');
            var li;
            var cList = $('ul')
        $.each(map_location,function(i)
        {
            li = $('<li/>').addClass('location-name').attr('id', map_location[i].id).text(map_location[i].formatted_address).appendTo(cList);
        });
   }*/

var gettitle;
        function createMapMarker(placeData) {

            // The next lines save location data from the search result object to local variables
            var lat = placeData.geometry.location.lat();  // latitude from the place service
            var lon = placeData.geometry.location.lng();  // longitude from the place service
            var name = placeData.formatted_address;   // name of the place from the place service
            var bounds = window.mapBounds;            // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location
            var marker = new google.maps.Marker({
              map: map,
              position: placeData.geometry.location,
              title: name

            });
			 ul = document.createElement('ul');
            var div = document.getElementById('location-list');
            var li;
            var cList = $('ul')
			
            li = $('<li/>').addClass('location-name').attr('id', name.id).text(name).appendTo(cList);
       		var infoWindow = new google.maps.InfoWindow({
              content: name
            });
            gettitle = marker.title
            google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map,marker);
            });
 			$('#location-list').on('click', 'li', function () {
  			if(this.innerHTML == marker.title){
				infoWindow.open(map,marker);
			}
			
			});
			$('#myFilter').on('keyup', function () {
  			
			var keyword = document.getElementById('myFilter').value;
			 
			/* if (marker.map === null) {
				 alert("not null")
				map_location[i].marker.setMap(map);
			  }*/
			  if (marker.title.toLowerCase().indexOf(keyword) === -1 ) {
				
				marker.setMap(null);
			 }
			 else
			 {
				 marker.setMap(map);
			 }
 //  }
			});
			
			/*********************************************/
			
	var initlist = function(keyword) {
		
	//for (i = 0; i < map_location.length; i++) {
		 for (var i in map_location) {
			
			 
			/* if (map_location[i].marker.map === null) {
				 alert("not null")
				map_location[i].marker.setMap(map);
			  }
			  if (map_location[i].name.indexOf(keyword) === -1 ) {
				  alert("get value")*/
				map_location[i].marker.setMap(null);
			 // }
    }
	
	
				
				/*if(map_location[i].formatted_address == document.getElementById('myFilter').value)
				{
					alert(map_location[i].formatted_address)
				}
				else
				{
					 map_location[i].setMap(null);
           
				}*/
	
			
}

			/******************************************/
            // this is where the pin actually gets added to the map.
            // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
            // fit the map to the new marker
            map.fitBounds(bounds);
            // center the map
            map.setCenter(bounds.getCenter());


          }
         
        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
				createMapMarker(results[0]);
             	 map_location.push(results[0]);
				 
			   }
			  
          }


         function pinPoster(locations) {
            // creates a Google place search service object. PlacesService does the work of
            // actually searching for location data.
            var service = new google.maps.places.PlacesService(map);

            // Iterates through the array of locations, creates a search object for each location
            for (var place in locations) {
              var request = {
                query: locations[place]
              };
              // Actually searches the Google Maps API for location data and runs the callback
              // function with the search results after each search.
              service.textSearch(request, callback);
            }
          }
         
         
         function locationFinder() {
            // initializes an empty array
            var locations = [];
            // adds the single location property from bio to the locations array
            for (var i in model.locations) {
              locations.push(model.locations[i].location);
            }
          return locations;
          }

   
        function initializeMap() {
              var mapOptions;
              map = new google.maps.Map(document.querySelector('#map'), mapOptions);
              // Sets the boundaries of the map based on pin locations
             window.mapBounds = new google.maps.LatLngBounds();
            locations = locationFinder();
            pinPoster(locations);

        }

     var appViewModel = function() {
          var self = this;
          self.markers = ko.observableArray([]);
          self.allLocations = ko.observableArray([]);
          self.locations  = ko.observable([]);

          self.filter =  ko.observable("");
          self.search = ko.observable("");

          var map = initializeMap();
          self.map = ko.observable(map);
    }

         ko.applyBindings(new appViewModel());
      
     
  
    });