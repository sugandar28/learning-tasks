new Vue({
  el: "#app",
  data() {
    return {
      value: [0, 100],
    };
  },
  created() {
    this.min = 0;
    this.max = 250;
    this.enableCross = true;
    this.tooltipMerge = false;
    this.formatter = (value) => `$${value}`;
  },
  components: {
    VueRangeSlider,
  },
});
