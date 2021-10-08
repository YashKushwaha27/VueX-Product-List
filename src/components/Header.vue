<template>
    <div class="topnav">
        <a class="active">
            <router-link to="/" style="background: transparent; font-size: 30px">Product List</router-link>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.topnav {
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #0c875a;
    color: white;
    font-size: 25px;
}
</style>