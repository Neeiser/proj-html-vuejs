<template>
    <div class="container">
        <header>
            <img src="../assets/img/logo.png" alt="">
            <nav>
                <ul>
                    <li v-for="navItem in navList" :key="navItem">
                        {{navItem.category.toUpperCase()}}
                    </li>
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

<style lang="scss" scoped>

header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    img{
        height: 20px;
    }
    ul{
        display: flex;
        font-weight: 500;
        border-right: 1px solid black;
    }
}

</style>