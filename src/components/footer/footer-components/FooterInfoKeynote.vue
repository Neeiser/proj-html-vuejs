<template>
    <section>
        <div class="margin-sides footer-info">
            <div class="footer-info-about">
                <h5>about us</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                <div>
                    <FooterInfoIcons />
                </div>
            </div>
            <div class="footer-info-recent">
                <h5>Recent News</h5>
                <ul>
                    <li v-for="link in iconsLinks" :key="link.id">
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                        <a href="#">{{ link.linkData }}</a>
                    </li>
                </ul>
            </div>
            <div class="footer-info-seat">
                <h5>Get your seat!</h5>
                <p>Book for your seat before it's too late. We provide vaiety of ticket options.</p>
                <button class="btn-style">check out tickets!</button>
            </div>
            <div class="footer-info-gallery">
                <h5>gallery from last year</h5>
                <FooterInfoGallery />
            </div>
        </div>
    </section>
</template>

<script>
import FooterInfoIcons from './footer-info-components/FooterInfoIcons.vue';
import FooterInfoGallery from './footer-info-components/FooterInfoGallery.vue';

export default {
    name: 'FooterInfoKeynote',
    components:{
        FooterInfoIcons,
        FooterInfoGallery,
    },
    data(){
        return{
            iconsLinks:[
                {linkData: 'Lorem ipsum dolor sit'}, {linkData: 'Lorem ipsum dolor sit'}, {linkData: 'Lorem ipsum dolor sit'}, 
                {linkData: 'Lorem ipsum dolor sit'}, {linkData: 'Lorem ipsum dolor sit'}, 
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

section{
    background-color: $mine-shaft;
    .footer-info{
        display: flex;
        padding: 60px 0;
        div{
            flex-basis: calc(100% / 4);
        }
        li{
            color: $natural-gray;
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 2px;
            padding: 10px 0;
            a{
                padding-left: 10px;
            }
        }
        h5{
            margin-bottom: 30px;
            text-transform: uppercase;
            color: $white;
            letter-spacing: 2px;
        }
        p{
            color: $white;
            font-size: 0.8rem;
            padding-bottom: 30px;
            line-height: 20px;
            letter-spacing: 2px;
        }
        .footer-info-seat .btn-style{
            background-color: $thunderbird;
            color: $white;
            border-radius: 0;
        }
    }
}

</style>