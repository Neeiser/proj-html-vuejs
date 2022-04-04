<template>
    <footer>
        <FooterInfoKeynote />
        <FooterCopyrightKeynote />
    </footer>
</template>

<script>
import FooterInfoKeynote from './footer-components/FooterInfoKeynote.vue';
import FooterCopyrightKeynote from './footer-components/FooterCopyrightKeynote.vue';

export default {
    name: 'FooterKeynote',
    components: {
        FooterInfoKeynote,
        FooterCopyrightKeynote,
    },

}
</script>

<style>

</style>