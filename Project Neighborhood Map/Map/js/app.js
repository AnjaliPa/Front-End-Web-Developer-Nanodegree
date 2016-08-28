'use strict';

//Global variable
var map;
var clientID;
var clientSecret;
// initliaze static locations
var Locations = [
	{
		locationname: 'Sunnyvale CA',
		latitude: 37.36883,
		longitude: -122.0363496
	},
	{
		locationname: 'Cupertino, CA',
		latitude: 37.3229978,
		longitude: -122.03218229999999
	},
    {
		locationname: 'Santa Clara CA',
		latitude: 37.35410789999999,
		longitude: -121.95523559999998
	},
    {
		locationname: 'Great Mall, Milpitas, CA',
		latitude: 37.4157632,
		longitude: -121.90493249999997
	},
    {
		locationname: 'San Jose, CA',
		latitude: 37.3382082,
		longitude: -121.88632860000001
	}
];

function AppViewModel() {
	var self = this;
	this.search = ko.observable('');
    
	this.locationList = ko.observableArray([]);
	 map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: {lat: 37.36883, lng: -122.0363496}
	});
    
    

	Locations.forEach(function(locationItem){
		self.locationList.push( new GetLocations(locationItem));
	});
    this.filteredList = ko.computed(function() {
		var check = self.search().toLowerCase();
      
		if (!check) {
            	self.locationList().forEach(function(locationItem){
				locationItem.visible(true);
			});
			return self.locationList();
		} else {
             
			return ko.utils.arrayFilter(self.locationList(), function(locationItem) {
				var loc = locationItem.locationname.toLowerCase();
				var getvalue = (loc.search(check) >= 0);
				locationItem.visible(getvalue);
				return getvalue;
			});
		}
	});
}


function LoadApp() {
   
	ko.applyBindings(new AppViewModel());
}

function errorHandle() {
	alert("Google Maps has failed to load. Please try again later!!!");
}

var GetLocations = function(data) {
    var self = this;
    this.lat = data.latitude;
	this.long = data.longitude;
	this.locationname = data.locationname;
    this.URL = "";
	this.street = "";
	this.city = "";
	
	this.visible = ko.observable(true);
    
    	// Foursquare API settings
	clientID = "R2MRCRBJPRWGXBDN3OADY3CHTFLVLGGYNWUI0HX3QU2JSJYA";
	clientSecret = "CQOGXKI3M1CI2U20T1QWPPVNUNMKQWKHRNGYVXQ3P5FYKHK3";
    
    
    var foursquareURL = 'https://api.foursquare.com/v2/venues/search?ll='+ this.lat + ',' + this.long + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20160118' + '&query=' + this.locationname;

	$.getJSON(foursquareURL).done(function(data) {
        var results = data.response.venues[0];
		self.URL = results.url;
		if (typeof self.URL === 'undefined'){
			self.URL = "";
		}
		self.street = results.location.formattedAddress[0];
     	self.city = results.location.formattedAddress[1];
        
        }).fail(function() {
		alert("Please refresh the page and try again to load Foursquare data!!!");
	});
        
    this.contentdata = '<div><b>' + data.locationname + "</b></div>"+
     '<div ><a href="' + self.URL +'">' + self.URL + "</a></div>" +
        '<div>' + self.street + "</div>" +
        '<div >' + self.city + "</div>" ;
	this.infoWindow = new google.maps.InfoWindow({content: self.contentdata});
	this.marker = new google.maps.Marker({
			position: new google.maps.LatLng(data.latitude, data.longitude),
			map: map,
			title: data.locationname
	});

	this.showMarker = ko.computed(function() {
		if(this.visible() === true) {
			this.marker.setMap(map);
		} else {
			this.marker.setMap(null);
		}
		return true;
	}, this);
    this.marker.addListener('click', function(){
		self.contentdata = '<div><b>' + data.locationname + "</b></div>" +
         '<div class="content"><a href="' + self.URL +'">' + self.URL + "</a></div>" +
        '<div class="content">' + self.street + "</div>" +
        '<div class="content">' + self.city + "</div>"  ;       
        self.infoWindow.setContent(self.contentdata);
		self.infoWindow.open(map, this);
		self.marker.setAnimation(google.maps.Animation.BOUNCE);
      	setTimeout(function() {
      		self.marker.setAnimation(null);
     	}, 3000);
	});

	this.bouncemarker = function(placeval) {
		google.maps.event.trigger(self.marker, 'click');
	};

};
