<template>
    <div class="container">
        <header class="margin-sides">
            <img src="../assets/img/logo.png" alt="">
            <nav>
                <ul>
                    <li v-for="navItem in navList" :key="navItem.id">
                        {{navItem.category.toUpperCase()}}
                    </li>
                </ul>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </nav>
        </header>
        <JumboHeaderKeynote />
    </div>
</template>

<script>
import JumboHeaderKeynote from './header-components/JumboHeaderKeynote.vue';

export default {
    name: 'HeaderKeynote',
    components:{
        JumboHeaderKeynote,
    },
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

<style lang="scss" scoped>

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    img{
            height: 20px;
        }
    nav{
        display: flex;
        align-items: center;
        margin: 0px 10px;
        ul{
            display: flex;
            font-weight: 600;
            font-size: 0.9rem;
            margin: 0px 5px;
            li{
                padding: 0px 20px;
            }
        }
    }
}

</style>