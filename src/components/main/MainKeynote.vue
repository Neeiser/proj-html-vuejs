<template>
    <main>
        <SectionSubscribeKeynote />
        <SectionSpeakersKeynote />
        <SectionProgramKeynote />
        <SectionMapKeynote />
        <SectionLocationKeynote />
    </main>
</template>

<script>

import SectionSubscribeKeynote from './main-components/SectionSubscribeKeynote.vue';
import SectionSpeakersKeynote from './main-components/SectionSpeakersKeynote.vue';
import SectionProgramKeynote  from './main-components/SectionProgramKeynote.vue';
import SectionMapKeynote  from './main-components/SectionMapKeynote.vue';
import SectionLocationKeynote  from './main-components/SectionLocationKeynote.vue';


export default {
    name: 'MainKeynote',
    components: {
        SectionSubscribeKeynote,
        SectionSpeakersKeynote,
        SectionProgramKeynote,
        SectionMapKeynote,
        SectionLocationKeynote,
    }

}
</script>

<style>

</style>