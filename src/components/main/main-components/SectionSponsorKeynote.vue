<template>
    <section class="margin-sides">
        <div class="text-vertical-centering sponsor-container">
            <h2>SPONSORS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="sponsor-logos">
                <img src="../../../assets/img/banner-1.jpg" alt="">
                <img src="../../../assets/img/banner-2.jpg" alt="">
                <img src="../../../assets/img/banner-3.jpg" alt="">
                <img src="../../../assets/img/banner-4.jpg" alt="">
                <img src="../../../assets/img/banner-5.jpg" alt="">
                <img src="../../../assets/img/banner-6.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionSponsorKeynote',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

.sponsor-container{
    height: 500px;
    h2{
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: 800;
        padding-bottom: 20px;
        color: $mine-shaft-darker;
    }
    p{
        font-size: 0.9rem;
        color: $mine-shaft;
    }
    .sponsor-logos{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 50px 0px;
    }
}

</style>