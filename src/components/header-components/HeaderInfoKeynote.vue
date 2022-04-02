<template>
    <section>
        <div class="margin-sides">
        </div>
    </section>
</template>

<script>
export default {
    name:'HeaderInfoKeynote',
    data(){
        return {
            ArrInfo:[
                {
                    infoTitle: 'who are we',
                    infoDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat.',
                    infoLink: 'Learn More'
                },
                {
                    infoTitle: 'what we do',
                    infoDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat.',
                    infoLink: 'Learn More'
                },
                {
                    infoTitle: 'why us?',
                    infoDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat.',
                    infoLink: 'Learn More'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

section{
    background-color: lightcoral;
    height: 300px;
}
</style>