<template>
    <div class="jumbo-container text-vertical-centering">
        <h2>Conference on</h2>
        <h1>Social Networks</h1>
        <hr>
        <span>23 - 26 may 2019 / sans francisco / 8 speakers</span>
    </div>
</template>

<script>

export default {
    name: 'JumboHeaderKeynote',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/partials/generic.scss';

.jumbo-container{
    height: 600px;
    background-image: url('../../assets/img/slider-1-bg.jpg');
    background-position: center;
    text-transform: uppercase;
    hr{
        width: 500px;
        border: 2px solid white;
    }
}
</style>