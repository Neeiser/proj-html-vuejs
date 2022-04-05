<template>
    <main>
        <SectionSubscribeKeynote />
        <SectionSpeakersKeynote />
        <SectionProgramKeynote />
        <SectionMapKeynote />
        <SectionLocationKeynote />
        <SectionRecentNewsKeynote />
        <SectionTicketsKeynote />
        <!-- 1 section left -->
        <SectionSponsorKeynote />
    </main>
</template>

<script>

import SectionSubscribeKeynote from './main-components/SectionSubscribeKeynote.vue';
import SectionSpeakersKeynote from './main-components/SectionSpeakersKeynote.vue';
import SectionProgramKeynote  from './main-components/SectionProgramKeynote.vue';
import SectionMapKeynote  from './main-components/SectionMapKeynote.vue';
import SectionLocationKeynote  from './main-components/SectionLocationKeynote.vue';
import SectionRecentNewsKeynote  from './main-components/SectionRecentNewsKeynote.vue';
import SectionTicketsKeynote  from './main-components/SectionTicketsKeynote.vue';
/* 1 section left */
import SectionSponsorKeynote  from './main-components/SectionSponsorKeynote.vue';


export default {
    name: 'MainKeynote',
    components: {
        SectionSubscribeKeynote,
        SectionSpeakersKeynote,
        SectionProgramKeynote,
        SectionMapKeynote,
        SectionLocationKeynote,
        SectionRecentNewsKeynote,
        SectionTicketsKeynote,
        /* 1 section left */
        SectionSponsorKeynote
    }

}
</script>

<style>

</style>