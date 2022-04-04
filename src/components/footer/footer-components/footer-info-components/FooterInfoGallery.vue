<template>
    <div class="gallery">
        <div v-for="image in arrGallery" :key="image.id">
            <a href="#"><img :src="image.imagePath" alt=""></a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FooterInfoGallery',
    data(){
        return{
            arrGallery:[
                {imagePath: require('../../../../assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg')},
                {imagePath: require('../../../../assets/img/photodune-8522811-speaker-at-business-conference-and-present (1).jpg')},
                {imagePath: require('../../../../assets/img/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg')},
                {imagePath: require('../../../../assets/img/photodune-8523683-speaker-at-business-convention-and-present.jpg')},
                {imagePath: require('../../../../assets/img/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg')},
                {imagePath: require('../../../../assets/img/card04-150x150.jpg')},
                {imagePath: require('../../../../assets/img/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg')},
                {imagePath: require('../../../../assets/img/photodune-6745585-modern-creative-workspace-m-150x150.jpg')},
                {imagePath: require('../../../../assets/img/6426608875_186070f8ca_o-150x150.jpg')},
                {imagePath: require('../../../../assets/img/card01-150x150.jpg')},
                {imagePath: require('../../../../assets/img/13349065283_64d09b067c_o-150x150.jpg')},
                {imagePath: require('../../../../assets/img/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg')},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/style';

.gallery{
    display: flex;
    flex-wrap: wrap;
    div{
    width: 60px;
    height: 60px;
    margin: 5px;
    }
    img{
    width: 100%;
    }
}


</style>