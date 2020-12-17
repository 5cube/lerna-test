import { h, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Btn',

  props: {
    text: String,
    small: Boolean,
  },

  setup (props) {
    const classes = computed(() => {
      return [
        'bg-blue-500 hover:bg-blue-600 focus:ring rounded-md text-white font-semibold',
        props.small ? 'h-6 text-sm px-3' : 'h-10 px-6',
      ]
    })

    return {
      classes,
    }
  },

  render () {
    return h('button', {
      class: this.classes,
    }, this.$slots.default ? this.$slots.default() : this.text)
  },
})
