<template>
    <div class="footer-copyright">
        <div class="margin-sides">
            <div>&copy;Copyright Goodlayers, All Right Reserved</div>
            <div class="copyright-links">
                <a href="#">About Us</a>|
                <a href="#">Accommodation</a>|
                <a href="#">Call fo Paper</a>|
                <a href="#">Contact Us</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FooterCopyrightKeynote',

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

.footer-copyright{
    background-color: $mine-shaft-darker;
    color: $chicago;
    >div{
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

</style>