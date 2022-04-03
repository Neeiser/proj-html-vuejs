<template>
    <div class="jumbo-container text-vertical-centering">
        <h2>Conference on</h2>
        <h1>Social Networks</h1>
        <hr>
        <div>
            <span>23 - 26 may 2019</span>/
            <span>sans francisco</span>/
            <span>8 speakers</span>
        </div>
        <button class="btn-style">Register online</button>
    </div>
</template>

<script>

export default {
    name: 'JumboHeaderKeynote',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style';

.jumbo-container{
    height: 600px;
    background-image: url('../../assets/img/slider-1-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-transform: uppercase;
    color: $white;
    h2{
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 20px;
    }
    h1{
        font-size: 5rem;
        font-weight: 800;
    }
    hr{
        width: 500px;
        border: 2px solid $white;
        margin: 30px 0px 15px 0px;
    }
    span{
        font-weight: 700;
        margin: 0px 30px;
    }
    button{
        color: $white;
        background-color: $scarlet;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 50px;
    }
}
</style>