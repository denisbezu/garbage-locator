<template>
  <div class="map-wrapper w-100 h-100">
    <div class="map-inner w-100" ref="map"></div>

    <div class="events-wrapper w-100">
      <div class="event-actions row col-12 py-3">
        <button class="btn map-btn"
                @click="addEvent"
                type="button">Add event
        </button>
        <button class="btn map-btn ml-3"
                @click="setPositionToCurrent"
                type="button">To current position
        </button>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <event-list></event-list>
        </div>
        <div class="col-12 col-lg-6">
          <event-info></event-info>
          <event-add :current-position="currentPosition"></event-add>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import EventList from "./EventList";
  import EventInfo from "./EventInfo";
  import EventAdd from "./EventAdd";
  import {eventsEmmiter} from "../../events/emitters";

  const defaultZoom = 15;
  const defaultLongitude = 36.22;
  const defaultLatitude = 50.01;

  export default {
    data() {
      return {
        map: null,
        infoWindow: null,
        currentPosition: null,
        markersConfigured: false,
        markerObjects: [],
        currentPositionIcon: 'https://www.robotwoods.com/dev/misc/bluecircle.png',
        markerIcon: 'https://s1.iconbird.com/ico/1012/PlexIcons/w512h5121350249279recyclingbinfull.png'
      }
    },
    computed: {
      markers() {
        return this.$store.getters['events/markers'];
      }
    },
    methods: {
      addEvent() {
        this.$store.dispatch('events/setOpenedEvent', {
          type: 'add'
        });
      },
      handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      },
      setPositionToCurrent() {
        const self = this;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {

            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            if (self.currentPosition === null) {
              self.addCurrentPositionMarker(pos);
            }
            self.currentPosition = pos;
            self.map.setCenter(pos);
          }, () => {
            self.handleLocationError(true, self.infoWindow, self.map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          self.handleLocationError(false, self.infoWindow, self.map.getCenter());
        }
      },
      setUpMarkers() {
        const self = this;
        if (!this.markersConfigured) {
          this.markersConfigured = true;
          console.log(this.markers);
        } else {
          return;
        }

        let marker, i;
        const markerIcon = {
          url: self.markerIcon, // url
          scaledSize: new google.maps.Size(35, 35), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(17, 17) // anchor
        };

        for (i = 0; i < self.markers.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(self.markers[i]['latitude']), parseFloat(self.markers[i]['longitude'])),
            map: self.map,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
          });

          google.maps.event.addListener(marker, 'click', ((marker, i) => {
            return () => {
              if (self.toggleMarkerAnimation(marker, i)) {
                self.$store.dispatch('events/selectMarker', {
                  longitude: marker.position.lng(),
                  latitude: marker.position.lat(),
                });
              } else {
                self.$store.dispatch('events/clearSelectedEvents');
                self.$store.dispatch('events/setOpenedEvent', false);
              }
            }
          })(marker, i));
          self.markerObjects.push(marker);
        }
      },
      toggleMarkerAnimation(marker, i) {
        this.markerObjects.forEach((item, index) => {
          if (index !== i) {
            item.setAnimation(null);
          }
        });
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
          return false;
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          return true;
        }
      },
      removeMarkerAnimation() {
        this.markerObjects.forEach(marker => {
          marker.setAnimation(null);
        });
      },
      addCurrentPositionMarker(pos) {
        const self = this;
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(parseFloat(pos.lat), parseFloat(pos.lng)),
          map: self.map,
          animation: google.maps.Animation.DROP,
          icon: self.currentPositionIcon
        });
      }
    },
    mounted() {
      const self = this;

      const interval = setInterval(() => {
        if (window.mapInit) {
          clearInterval(interval);
          self.map = new google.maps.Map(self.$refs.map, {
            center: {lat: defaultLatitude, lng: defaultLongitude},
            zoom: defaultZoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });
          self.infoWindow = new google.maps.InfoWindow;

          // Try HTML5 geolocation.
          self.setPositionToCurrent();
          if (typeof self.markers !== 'undefined' && self.markers !== null && self.markers.length > 0) {
            self.setUpMarkers();
          }
        }
      }, 100);

    },
    created() {
      const self = this;
      this.$store.dispatch('events/fetchMarkers');

      eventsEmmiter.$on('setMarkers', () => {
        self.setUpMarkers();
      });

      eventsEmmiter.$on('cleanMarkers', () => {
        self.markerObjects.forEach(marker => {
          marker.setMap(null);
        });
        self.$store.dispatch('events/cleanMarkers').then(() => {
          self.$store.dispatch('events/fetchMarkers');
          self.markersConfigured = false;
          self.markerObjects = [];
          self.removeMarkerAnimation();
          self.$store.dispatch('events/clearSelectedEvents');
        });
      });
    },
    components: {
      EventList,
      EventInfo,
      EventAdd
    }
  }
</script>

 