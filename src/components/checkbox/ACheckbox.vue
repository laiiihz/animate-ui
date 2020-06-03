<template>
  <div>
    <span>{{ subLabel }}</span>
    <label :class="['a-checkbox', { 'is-flat': flat }]">
      <input
        type="checkbox"
        :class="['a-checkbox__input']"
        :checked="checked"
        @change="handleChange"
        :name="name"
      />
      <i class="material-icons" :class="['a-checkbox__check-icon']">check</i>
    </label>
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "ACheckbox",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: Boolean,
    flat: Boolean,
    name: String,
    label: String,
    subLabel: String,
  },
  methods: {
    handleChange() {
      this.$emit("change", !this.checked);
    },
  },
};
</script>
