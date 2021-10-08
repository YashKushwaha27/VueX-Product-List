<template>
    <div class="main">
        <div class="imgClass">
            <img class="image-data" v-bind:src="data?.image" :alt="data?.title" />
        </div>
        <div class="details">
            <div class="title">
                <text class="titleInner">{{ data?.title }}</text>
            </div>
            <div class="description">
                <text class="descriptionData">{{ data?.description }}</text>
            </div>
            <div class="rating">
                <text class="ratingData">Rating: {{ data?.rating?.rate }} / 5</text>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
    name: 'ProductDetails',
    data() {
        return {
            data: {},
        }
    },
    async created() {
        const store = useStore();
        if (!isNaN(this.$route.params.id)) {
            await store.dispatch('setProductDetails', this.$route.params.id)
            this.data = computed(() => store.getters.getProductDetails)
        } else {
            alert("Enter a valid ID");
            router.push({ path: '/' })
        }
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    margin-top: 0.5%;
}

.imgClass {
    border: 1px solid gray;
    border-radius: 10px;
    height: 500px;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
}

.image-data {
    height: 500px;
    width: 350px;
}
.details {
    border: 1px solid gray;
    border-radius: 10px;
    margin-left: 30px;
    widows: 100%;
}
.title {
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 7px;
    height: 100px;
    padding-top: 10px;
    color: rgb(0, 0, 118);
}
.titleInner {
    font-size: 35px;
    font-weight: bold;
    font-style: italic;
}
.description {
    border-top: 1px solid gray;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    margin-top: 15px;
    height: 300px;
    width: 75%;
    margin-left: 10%;
    overflow-y: scroll;
}
.descriptionData {
    color: rgb(104, 102, 102);
    font-style: italic;
    font-size: 20px;
}
.rating {
    border-top: 1px solid gray;
    margin-top: 10px;
    padding-top: 10px;
    width: 80%;
    margin-left: 10%;
}
.ratingData {
    font-size: 40px;
    margin-left: 30%;
    font-style: italic;
}
</style>