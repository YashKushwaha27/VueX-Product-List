<template>
    <Cards :data="card_data" />
</template>

<script>
import Cards from "../components/Cards.vue"
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';

export default {
    name: 'ProductList',
    components: {
        Cards
    },
    setup() {
        const store = useStore()
        const getData = async () => await store.dispatch('setProductList');
        const card_data = computed(() => store.getters.getProductList)
        return { card_data, getData }
    },
    async mounted() {
        this.getData();
    },
}
</script>

<style scoped>
</style>