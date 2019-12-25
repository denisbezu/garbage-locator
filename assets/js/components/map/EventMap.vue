<template>
  <div class="map-wrapper w-100 h-100">
    <div class="map-inner w-100" ref="map"></div>

    <div class="events-wrapper w-100">
      <div class="event-actions row col-12 py-3">
        <button class="btn btn-primary" type="button">Add event</button>
        <button class="btn btn-primary ml-3"
                @click="setPositionToCurrent"
                type="button">To current position
        </button>
      </div>
      <div class="row w-100">
        <div class="col-6">
          <event-list></event-list>
        </div>
        <div class="col-6">
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
        markersConfigured: false
      }
    },
    computed: {
      markers() {
        return this.$store.getters['events/markers'];
      }
    },
    methods: {
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
            self.currentPosition = pos;
            console.log(pos);
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

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < self.markers.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(self.markers[i]['latitude']), parseFloat(self.markers[i]['longitude'])),
            map: self.map
          });

          google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
              infowindow.setContent(i);
              infowindow.open(self.map, marker);
            }
          })(marker, i));
        }
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
    },
    components: {
      EventList,
      EventInfo,
      EventAdd
    }
  }
</script>


<style scoped lang="scss">
  .map-wrapper {

    .map-inner {
      min-height: 400px;
    }
  }
</style>