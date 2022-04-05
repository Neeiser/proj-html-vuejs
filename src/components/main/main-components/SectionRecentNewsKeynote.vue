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
    padding: 80px 0;

    .news-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 50px;
        h2{
            text-transform: uppercase;
        }
    }
    .news-box{
        display: flex;
        div{
            display: flex;
            flex-direction: column;
            flex-basis: calc(100% / 3);
            padding: 0px 10px;
            img{
                width: 100%;
            }
            small{
                color: $chicago;
                padding: 10px 0;
            }
            h4{
                font-size: 1.2rem;
                padding: 10px 0;
            }
            p{
                color: $chicago;
                font-size: 0.9rem;
                line-height: 25px;
                padding: 10px 0;
            }
        }
    }
    a{
        font-style: italic;
        font-size: 0.9rem;
        color: $scarlet;
        padding: 10px 0;
    }
}

</style>

                    /* <img :src="newsBox.newsImg" alt="">
                    <small>{{ newsBox.newsComments }}</small>
                    <h4>{{newsBox.newsTitle.toUpperCase()}}</h4>
                    <p>{{newsBox.newsDesc}}</p>
                    <a href="#">{{newsBox.newsLink}}</a> */