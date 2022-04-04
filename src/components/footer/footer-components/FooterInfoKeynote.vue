<template>
    <section>
        <div class="margin-sides">
            <div>
                <h5>about us</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                <div>
                    <FooterInfoIcons />
                </div>
            </div>
            <div>
                <h5>Regent News</h5>
                <ul v-for="link in iconsLinks" :key="link.id">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                    <li><a href="#">{{ link.linkData }}</a></li>
                </ul>
            </div>
            <div>
                <h5>Get your seat!</h5>
                <p>Book for your seat before it's too late. We provide vaiety of ticket options.</p>
            </div>
            <div>
                <h5>gallery from last year</h5>
            </div>
        </div>
    </section>
</template>

<script>
import FooterInfoIcons from './FooterInfoIcons.vue';
export default {
    name: 'FooterInfoKeynote',
    components:{
        FooterInfoIcons,
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
    background-color: $masala;
}

</style>