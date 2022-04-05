<template>
    <section>
        <div class="map-option">
            <span><strong>Map</strong></span>
            <span>Satellite</span>
        </div>
        <img src="../../../assets/img/vt-1.png" alt="">
        <img src="../../../assets/img/vt-2.png" alt="">
        <img src="../../../assets/img/vt-3.png" alt="">
        <img src="../../../assets/img/vt-4.png" alt="">
        <img src="../../../assets/img/vt-5.png" alt="">
        <img src="../../../assets/img/vt-6.png" alt="">
        <img src="../../../assets/img/vt-7.png" alt="">
        <img src="../../../assets/img/vt-8.png" alt="">
        <img src="../../../assets/img/vt-9.png" alt="">
        <img src="../../../assets/img/vt-10.png" alt="">
        <img src="../../../assets/img/vt-11.png" alt="">
        <img src="../../../assets/img/vt-12.png" alt="">
        <img src="../../../assets/img/vt-13.png" alt="">
        <img src="../../../assets/img/vt-14.png" alt="">
    </section>
</template>

<script>
export default {
    name: 'SectionMapKeynote',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';
section{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    img{
    width: calc(100% / 7);
    }
    .map-option{
        position: absolute;
        top: 20px;
        box-shadow: 2px 12px 30px $gray;
        span{
            padding: 10px;
            background-color: $white;
        }
    }
}


</style>