<template>
    <section>
        <div class="margin-sides news-container">
            <div class="news-header">
                <h2>Recent News</h2>
                <a href="#">Read All News</a>
            </div>
            <div class="news-box">
                <div
                v-for="newsBox in arrNews"
                :key="newsBox.id">
                    <img :src="newsBox.newsImg" alt="">
                    <small>{{ newsBox.newsComments }}</small>
                    <h4>{{newsBox.newsTitle.toUpperCase()}}</h4>
                    <p>{{newsBox.newsDesc}}</p>
                    <a href="#">{{newsBox.newsLink}}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'SectionRecentNewsKeynote',
    data(){
        return {
            arrNews:[
                {
                    newsImg: require('../../../assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg'),
                    newsComments: '03 Dec 2013 / 0 Comments',
                    newsTitle: 'Sedial Eiusmod tempor',
                    newsDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat. Consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis.',
                    newsLink: 'Read More'
                },
                {
                    newsImg: require('../../../assets/img/photodune-8797753-multiethnic-people-with-startup-business-t.jpg'),
                    newsComments: '03 Dec 2013 / 2 Comments',
                    newsTitle: 'donect luctus imperdiet',
                    newsDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat. Consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis.',
                    newsLink: 'Read More'
                },
                {
                    newsImg: require('../../../assets/img/photodune-8522811-speaker-at-business-conference-and-present.jpg'),
                    newsComments: '03 Dec 2013 / 2 Comments',
                    newsTitle: 'magna pars studiorum',
                    newsDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis, nulla odit aliquam ad labore fugiat. Consectetur adipisicing elit. Illo, quisquam. Quos pariatur quis.',
                    newsLink: 'Read More'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

.news-container{
    height: 600px;
    .news-box{
        display: flex;
        div{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            img{
            height: 200px;
            }
        }
    }
}

</style>