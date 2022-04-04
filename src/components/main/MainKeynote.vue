<template>
    <main>
        <SectionSubscribeKeynote />
        <SectionSpeakersKeynote />
    </main>
</template>

<script>

import SectionSubscribeKeynote from './main-components/SectionSubscribeKeynote.vue';
import SectionSpeakersKeynote from './main-components/SectionSpeakersKeynote.vue';

export default {
    name: 'MainKeynote',
    components: {
        SectionSubscribeKeynote,
        SectionSpeakersKeynote,
    }

}
</script>

<style>

</style>