<template>
    <section>
        <div class="margin-sides info-section">
            <div class="info-box"
            v-for="infoBox in ArrInfo"
            :key="infoBox.id">
                <h4>{{infoBox.infoTitle}}</h4>
                <p>{{infoBox.infoDesc}}</p>
                <a href="#">{{infoBox.infoLink}}</a>
            </div>
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
    .info-section{
        height: 300px;
        display: flex;
        align-items: center;
    }
}
</style>