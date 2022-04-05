<template>
    <section>
        <div class="text-vertical-centering ticket-container">

        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionTicketsKeynote',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

section{
    background-image: url('../../../assets/img/photodune-8523683-speaker-at-business-convention-and-present (1).jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    .ticket-container{
        height: 600px;
    }
}

</style>