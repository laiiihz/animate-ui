<template>
  <div v-highlight class="code-block">
    <pre>
        <code
                :style="dark?'':'filter:invert(100%);'"
                :class="type">{{aData}}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "CodeBlock",
  props: {
    aData: String,
    type: String,
    dark: Boolean,
  },
};
</script>

<style scoped>
code {
  font-family: "Noto Sans Mono CJK SC", monospace;
  font-size: 16px;
  font-weight: lighter;
  -webkit-font-smoothing: subpixel-antialiased;
  font-variant-ligatures: contextual;
}
.code-block > pre {
  margin: unset;
    white-space: unset;
}
.code-block > pre > code {
  border-radius: 10px;
  overflow: auto;
    white-space: pre-line;
}
.code-block > pre > code::-webkit-scrollbar {
  height: 5px;
  background-color: rgba(0, 0, 0, 0.4);
}
.code-block > pre > code::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
}
.code-block > pre:hover > ::-webkit-scrollbar {
  height: 10px;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
