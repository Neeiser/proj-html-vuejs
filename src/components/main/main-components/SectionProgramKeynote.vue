<template>
    <section class="margin-sides">
        <div class="program-title">
            <div>
                <h3>PROGRAM</h3>
                <p>This conference run through all 4 days from 23 - 26 May 2016.
                    <br>
                    We also provide free lunch and coffee break in each day.
                </p>
            </div>
            <a href="#">View Full Program</a>
        </div>
        <div class="program-dates">
            <div>
                <h4>Day 1</h4>
                <span>23 May 2016</span>
            </div>
            <div>
                <h4>Day 2</h4>
                <span>23 May 2030</span>
            </div>
            <div>
                <h4>Day 3</h4>
                <span>24 May 2030</span>
            </div>
            <div>
                <h4>Day 4</h4>
                <span>25 May 2030</span>
            </div>
            <div>
                <h4>Day 5</h4>
                <span>26 May 2030</span>
            </div>
        </div>
        <div class="program-content">
            <div class="program-info">
                <span><font-awesome-icon icon="far fa-clock" />09:00 - 10:30</span>
                <span><font-awesome-icon icon="fas fa-location-arrow" />ROOM A</span>
                <span><a href="#"><font-awesome-icon icon="fas fa-user" />LAURENCE FRANCIS</a></span>
            </div>
            <div class="program-desc">
                <h3>welcoming and introduction</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut accusamus facere eligendi eaque molestiae voluptatibus excepturi, deserunt deleniti fugit corporis magnam aperiam molestias.</p>
                <img src="../../../assets/img/speaker-8-150x150.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionProgramKeynote',
    
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

section{
    padding: 100px 0px;
    .program-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 50px 0;
        div{
            display: flex;
            h3{
            font-size: 2rem;
            color: $mine-shaft;
            }
            p{
                margin-left: 50px;
                color: $masala;
            }
        }
        
        a{
            color: $scarlet;
            font-style: italic;
            font-size: 0.9rem;
        }
    }
    .program-dates{
        display: flex;
        align-items: center;
        background-color: $scarlet;
        color: $white;
        padding: 20px;
        div{
            width: 170px;
            h4{
                text-transform: uppercase;
                margin-bottom: 5px;
            }
        }
    }
    .program-content{
        display: flex;
        div{
            padding: 50px;
        }
        .program-info{
            display: flex;
            flex-direction: column;
            span{
                position: relative;
                margin: 10px 0;
                color: $chicago;
                a{
                    color: $scarlet;
                }
                svg{
                    position: absolute;
                    left: -30px;
                    top: 5px;
                    color: $chicago;
                }
            }
        }
        .program-desc{
            padding: 50px;
            color: $masala;
            h3{
                margin: 10px 0;
                text-transform: uppercase;
                letter-spacing: 8px;
            }
            p{
                margin: 30px 0;
                line-height: 30px;
                font-size: 0.9rem;
            }
            img{
                height: 50px;
            }
        }
    }
}

</style>