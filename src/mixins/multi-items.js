const parentMixin = {
  mounted() {
    if (this.vulue >= 0) {
      this.currentIndex = this.value;
    }
    this.updateIndex();
  },
  metheds: {
    updateIndex() {
      if (!this.$children || !this.$children.length) return;
      this.number = this.$children.length;
      let children = this.$children.length;
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i;
        if (children[i].currentSelected) {
          this.index = i;
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {},
  data() {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length
    };
  }
};

const childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$parent.updateIndex();
  },
  beforeDestroy() {
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.updateIndex();
    });
  },
  methods:{
      onItemClick(hasLink){
          if(this.$parent.preventDefault){
              this.$parent
          }

      }
  }
};

export { parentMixin };
