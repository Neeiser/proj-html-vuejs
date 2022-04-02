<template>
    <div class="container">
        <header class="margin-sides">
            <img src="../../assets/img/logo.png" alt="">
            <nav>
                <ul>
                    <li v-for="navItem in arrNavList" :key="navItem.id">
                        <a href="#">
                            {{navItem.category.toUpperCase()}}
                        </a>
                    </li>
                </ul>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </nav>
        </header>
        <JumboHeaderKeynote />
        <HeaderInfoKeynote />
    </div>
</template>

<script>
import JumboHeaderKeynote from './JumboHeaderKeynote.vue';
import HeaderInfoKeynote from './HeaderInfoKeynote.vue';

export default {
    name: 'HeaderKeynote',
    components:{
        JumboHeaderKeynote,
        HeaderInfoKeynote,
    },
    data(){
        return{
            arrNavList:[
                {category:'home'}, {category:'pages'}, {category:'program'}, {category:'tickets'},
                {category:'speackers'}, {category:'papers'}, {category:'blog'}, {category:'shortcodes'}    
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style';

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
        color: $gray;
        ul{
            display: flex;
            font-weight: 600;
            font-size: 0.8rem;
            margin: 0px 5px;
            font-weight: 700;
            li{
                padding: 0px 20px;
            }
        }
    }
}

</style>