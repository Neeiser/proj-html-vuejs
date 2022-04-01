<template>
    <div class="container">
        <header>
            <img src="../assets/img/logo.png" alt="">
            <nav>
                <ul v-for="navItem in navList" :key="navItem">
                    <li>{{navItem.category.toUpperCase()}}</li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderKeynote',
    data(){
        return{
            navList:[
                {category:'home'}, {category:'pages'}, {category:'program'}, {category:'tickets'},
                {category:'speackers'}, {category:'papers'}, {category:'blog'}, {category:'shortcodes'}    
            ]
        }
    }
}
</script>

<style>

</style>