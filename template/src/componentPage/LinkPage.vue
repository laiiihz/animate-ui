<template>
    <page-padding></page-padding>
</template>

<script>
    import PagePadding from "../page/PagePadding";
    import darkMixin from "../mixins/darkMixin";
    export default {
        name: "LinkPage",
        components: {PagePadding}
        ,mixins:[darkMixin]
    }
</script>

<style scoped>

</style>