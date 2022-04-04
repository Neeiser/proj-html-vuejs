<template>
    <section>
        <div class="timer-section text-vertical-centering">
            <div class="timer-counter">

            </div>
            <span>subscribe for updates</span>
            <form>      
                <input type="email" id="email" name="email" placeholder="Please fill your email:">
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
    }
    form{
        input{
            height: 55px;
        }
        .btn-style{
            color: $white;
            background-color: $scarlet;
            border-radius: 0px;
        }
    }
}

</style>