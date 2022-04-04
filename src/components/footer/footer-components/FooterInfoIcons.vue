<template>
    <div id="footer-icons">
        <a href="#" 
        v-for="item in iconsArr" 
        :key="item.id">

        </a>
    </div>
</template>

<script>
import facebook from "../../../assets/img/icons/facebook-square-brands.svg"
import twitter from "../../../assets/img/icons/twitter-square-brands.svg"
import linkedin from "../../../assets/img/icons/linkedin-brands.svg"
import google from "../../../assets/img/icons/google-plus-square-brands.svg"
import pinterest from "../../../assets/img/icons/pinterest-square-brands.svg"
import youtube from "../../../assets/img/icons/youtube-square-brands.svg"

export default {
    name: 'FooterInfoKeynote',
    data(){
        return{
            iconsArr:[
                {icon: facebook}, {icon: twitter}, {icon: linkedin}, {icon: google}, {icon: pinterest}, {icon: youtube}
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

</style>