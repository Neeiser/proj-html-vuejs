<template>
    <section>
        <div class="margin-sides info-section">
            <div class="info-box"
            v-for="infoBox in ArrInfo"
            :key="infoBox.id">
                <font-awesome-icon :icon="infoBox.infoIcon" />
                <h4>{{infoBox.infoTitle.toUpperCase()}}</h4>
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
                    infoIcon: 'fa-solid fa-trophy',
                    infoTitle: 'who are we',
                    infoDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat.',
                    infoLink: 'Learn More'
                },
                {
                    infoIcon: 'fa-solid fa-bolt-lightning',
                    infoTitle: 'what we do',
                    infoDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat.',
                    infoLink: 'Learn More'
                },
                {
                    infoIcon: 'fa-solid fa-question',
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
@import '../../../assets/styles/style';

section{
    .info-section{
        height: 300px;
        display: flex;
        align-items: center;
        .info-box{
            padding: 30px;
            position: relative;
            svg{
                position: absolute;
                transform: scale(140%);
                top: 30px;
                left: 0px;
                color: $gray;
            }
            p{
                font-size: 0.8rem;
                line-height: 25px;
                margin: 25px 0px;
                color: $gray;
            }
            a{
                font-family: 'Times New Roman', Times, serif;
                font-style: italic;
                font-size: 1.1rem;
                color: $scarlet;
            }
        }
    }
}
</style>