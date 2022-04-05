<template>
    <section class="margin-sides">
        <div class="speakers-title">
            <h2>speakers</h2>
            <div class="speakers-title-arrows">
                <div>&lt;</div>
                <div>&gt;</div>
            </div>
        </div>
        <div class="speakers-slides">
            <div>
                <img src="../../../assets/img/speaker-6.jpg" alt="">
                <h3>patrick spencer</h3>
                <small>S&amp;P Analyzer</small>
            </div>
            <div>
                <img src="../../../assets/img/speaker-5.jpg" alt="">
                <h3>janet jones</h3>
                <small>Newyork Post's GM</small>
            </div>
            <div>
                <img src="../../../assets/img/speaker-4.jpg" alt="">
                <h3>michael dover</h3>
                <small>Starbuk's CEO</small>
            </div>
            <div>
                <img src="../../../assets/img/speaker-3.jpg" alt="">
                <h3>angelina holy</h3>
                <small>Maxii's Manager</small>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionSpeakersKeynote',
    
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

.speakers-title{
    position: relative;
    margin: 50px 0;
    h2{
        text-transform: uppercase;
        font-size: 2rem;
        color: $masala
    }
    .speakers-title-arrows{
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        div{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $scarlet;
        height: 40px;
        width: 40px;
        margin-left: 5px;
        border-radius: 5px;
        color: $white;
        }
    } 
}

.speakers-slides{
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    div{
        text-align: center;
        *{
            margin: 10px 0px;
        }
        img{
        height: 200px;
        }
        h3{
            text-transform: uppercase;
            font-size: 1rem;
            color: $masala;
        }
        small{
            font-style: italic;
            color: $masala;
        }
    }
}

</style>