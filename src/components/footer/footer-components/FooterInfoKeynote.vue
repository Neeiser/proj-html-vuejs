<template>
    <section>
        <div class="margin-sides">
            <div>
                <h5>about us</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                <div id="footer-icons">
                    <FooterInfoIcons />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
</template>

<script>
import FooterInfoIcons from './FooterInfoIcons.vue';
export default {
    name: 'FooterInfoKeynote',
    components:{
        FooterInfoIcons,
    }

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

section{
    background-color: $masala;
}

</style>