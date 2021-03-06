// Initialize and add the map

function markerClick(){
		//console.log("clicked marker ", this.name);
		document.getElementById('gym_name').innerHTML = this.name;
		document.getElementById('phone').innerHTML = this.phone;
        document.getElementById('open').innerHTML = this.open;
        document.getElementById("myImg").innerHTML = '<img class="map_img" src="'+ this.image + '" />';
    }
    
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.376181, lng: -6.320789 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var gymList = [
            {'name': 'EliteFitGym', 'location': { lat: 53.376181, lng: -6.320789 }, 'phone':'01/2426-589', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym2.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.392699, lng: -6.399460 }, 'phone':'01/2426-576', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym3.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.333437, lng: -6.262525 }, 'phone':'01/2426-325', 'open':'0-24 Hours', 'img': "/assets/images.readme/GYM.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.314395, lng: -6.245897 }, 'phone':'01/2426-126', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym4.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.307092, lng: -6.350751 }, 'phone':'01/2426-753', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym5.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.389752, lng: -6.279799 }, 'phone':'01/2426-159', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym6.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.394159, lng: -6.160858 }, 'phone':'01/2426-852', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym7.PNG"},
			{'name': 'EliteFitGym', 'location': { lat: 53.247920, lng: -6.122881 }, 'phone':'01/2426-452', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym8.PNG"},    
      ];

       var markers = gymList.map(function(gym, i){
           newMarker =  new google.maps.Marker ({
               position: gym.location, 
               label: "",
               map: map,
               name: gym.name,
               phone: gym.phone,
               open: gym.open,
               image: gym.img
           });

        newMarker.addListener('click', markerClick);
		   
        return newMarker;
       });

       //var markerClusterer = new MarkerClusterer(map, markers,
       // {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
    }