<template>
  <div class="event-add" v-if="openedEvent !== false && openedEvent.type === 'add'">
    <button type="button"
            @click="closeAddEvent"
            class="close">
      <span>&times;</span>
    </button>
    <form enctype="multipart/form-data" ref="eventAddForm">
      <div class="form-group">
        <label for="type">Event type</label>
        <select v-model="type"
                name="type"
                class="form-control">
          <option disabled value="">Choose type</option>
          <option v-for="(pollutionType, index) in pollutionTypes"
                  :key="index"
                  :value="pollutionType"
                  :selected="pollutionType === type">{{ getPollutionName(pollutionType) }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="description"
                  name="description"
                  class="form-control"
                  placeholder="Put description here"
                  rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="images">Photos</label>
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file"
                   multiple="multiple"
                   class="custom-file-input"
                   name="images"
                   ref="imagesInput"
                   accept="image/*"
                   id="eventImagePicker">
            <label class="custom-file-label" for="eventImagePicker">Choose file</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="levelSliderValue">Level</label>
        <div class="slider-container pb-3">
          <vue-slider v-model="level"
                      v-bind="sliderOptions"
                      :contained="true"
                      :silent="true"
                      :adsorb="true"
                      :interval="1"
                      :marks="true"
                      :tooltip="'always'"
                      :tooltip-placement="['top', 'bottom']"
          >
          </vue-slider>
        </div>
      </div>
      <button type="button"
              @click="saveEvent"
              class="btn btn-secondary">Save
      </button>
    </form>
  </div>

</template>

<script>
  import {WATER, DEFORESTATION, OTHER, GARBAGE, getPollutionName} from '../../mixins/polutionTypes';

  export default {
    props: ['currentPosition'],
    data() {
      return {
        pollutionTypes: [WATER, DEFORESTATION, GARBAGE, OTHER],
        type: WATER,
        description: '',
        images: [],
        sliderOptions: {
          min: 1,
          max: 4,
          tooltip: 'none',
          dotSize: 20,
          railStyle: {
            backgroundColor: '#E3E8F3'
          }
        },
        level: 1,
      }
    },
    methods: {
      getPollutionName(type) {
        return getPollutionName(type);
      },
      async saveEvent() {
        const self = this;
        let files = [];
        const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
        for (const file of this.$refs.imagesInput.files) {
          files.push(await toBase64(file));
        }

        this.$store.dispatch('events/addEvent', {
          type: this.type,
          description: this.description,
          images: files,
          position: this.currentPosition,
          level: this.level
        }).then(response => {
          console.log(response);
          self.closeAddEvent();
        })
      },
      closeAddEvent() {
        this.$store.dispatch('events/setOpenedEvent', false);
      }
    },
    computed: {
      openedEvent() {
        return this.$store.getters['events/openedEvent'];
      }
    }
  }
</script>

<style scoped lang="scss">
  .close {
    outline: none;
  }
</style>