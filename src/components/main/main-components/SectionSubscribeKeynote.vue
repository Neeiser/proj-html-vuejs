<template>
    <section>
        <div class="timer-section text-vertical-centering">
            <div class="timer-counter">
                <!-- PROVISIONAL -->
                <div class="text-vertical-centering">012<span>Days</span></div>
                <div class="text-vertical-centering">345<span>Hours</span></div>
                <div class="text-vertical-centering">678<span>Minutes</span></div>
                <div class="text-vertical-centering">901<span>Seconds</span></div>
            </div>
            <span class="sub-text">subscribe for updates</span>
            <form>      
                <input type="email" id="email" name="email" placeholder="Please fill your email">
                <button class="btn-style" type="submit">subscribe</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionSubscribeKeynote',
    
}
</script>

<style lang="scss" scoped>

@import '../../../assets/styles/style';

section{
    background-image: url('../../../assets/img/coutdown-bg1.jpg');
    background-position: center;
    .timer-section{
        height: 500px;
        .timer-counter {
            display: flex;
            div{
            background-color: $mine-shaft-alpha;
            height: 150px;
            width: 150px;
            border-radius: 5px;
            margin: 0px 10px;
            font-family: Verdana, Tahoma, sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: $white;
                span{
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    font-weight: 500;
                }
            }
        }
        .sub-text{
            margin: 30px 0px;
            font-size: 1.2rem;
            font-weight: 700;
            letter-spacing: 5px;
            text-transform: uppercase;
            color: $mine-shaft;
        }
    }
    form{
        input{
            height: 55px;
            width: 400px;
            padding: 10px;
            margin-right: 10px;
        }
        .btn-style{
            color: $white;
            background-color: $scarlet;
            font-weight: 700;
            border-radius: 0px;
        }
    }
}

</style>