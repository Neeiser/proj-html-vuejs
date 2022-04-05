<template>
    <section>
        <div class="text-vertical-centering location-container">
            <h2>location</h2>
            <h3>gd building, grand conference room</h3>
            <span><font-awesome-icon icon="fas fa-location-arrow" />11 GD Buildind, River Mall, New york, USA 8879</span>
            <a href="#">Check for Accommodations Here</a>
            <hr>
            <div class="location-contacts">
                <span><font-awesome-icon icon="fas fa-phone" />-1-112-222-3344</span>
                <span><font-awesome-icon icon="fas fa-envelope" />Contact@TheKeynoteTheme.com</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionLocationKeynote',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

section{
    margin: 10px 0px;
    background-image: url('../../../assets/img/location-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $white;
    .location-container{
        height: 450px;
        h2, 
        h3{
            text-transform: uppercase;
            margin: 10px 0px;
            letter-spacing: 5px;
        }
        h2{
            font-size: 2.5rem
        }
        h3{
            font-size: 1.8rem;
        }
        span{
            margin: 5px 10px;
            svg{
                margin-right: 10px;
            }
        }
        a{
            color: $thunderbird;
            margin: 20px 0px;
        }
        hr{
            width: 430px;
            margin: 10px 0px;
        }
    }
}

</style>