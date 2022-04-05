<template>
    <main>
        <SectionSubscribeKeynote />
        <SectionSpeakersKeynote />
        <SectionProgramKeynote />
    </main>
</template>

<script>

import SectionSubscribeKeynote from './main-components/SectionSubscribeKeynote.vue';
import SectionSpeakersKeynote from './main-components/SectionSpeakersKeynote.vue';
import SectionProgramKeynote  from './main-components/SectionProgramKeynote.vue';

export default {
    name: 'MainKeynote',
    components: {
        SectionSubscribeKeynote,
        SectionSpeakersKeynote,
        SectionProgramKeynote,
    }

}
</script>

<style>

</style>