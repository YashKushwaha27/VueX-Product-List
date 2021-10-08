<template>
    <div class="main">
        <div class="img-class">
            <img class="image-self" v-bind:src="data?.image" v-bind:alt="data?.title" />
        </div>
        <router-link :to="{ name: 'ProductDetails', params: { id: data?.id } }">
            <h4 class="title">{{ data?.title }}</h4>
        </router-link>
        <div class="body">
            <text>{{ data?.description }}</text>
        </div>
        <div class="footer">
            <text>Rating: {{ data?.rating?.rate }} / 5</text>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.main {
    border: 1px solid gray;
    border-radius: 10px;
    width: 200px;
    min-height: 250px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 5px 10px 8px gray;
}
.title {
    margin-top: 170px;
    height: 50px;
    width: 100%;
    overflow-y: scroll;
    color: rgb(117, 117, 243);
    padding-right: 15px;
}

.body {
    height: 150px;
    width: 100%;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: black;
    color: gray;
    padding-right: 15px;
}

.img-class {
    margin: 5px;
    align-self: center;
    height: 50px;
}

.image-self {
    height: 200px;
    width: 100%;
}

.footer {
    border-top: 1px solid gray;
    margin-top: 15px;
    color: gray;
    padding-top: 10px;
    padding-left: 30%;
}
</style>