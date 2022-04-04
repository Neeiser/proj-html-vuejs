<template>
    <section>
        <div class="timer-section text-vertical-centering">
            <div class="timer-counter">

            </div>
            <span>subscribe for updates</span>
            <form>
                <div class="email-text">
                    <label for="email">Please fill your email:</label>
                    <input type="email" id="email" name="email">
                </div>
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

section{
    background-image: url('../../../assets/img/coutdown-bg1.jpg');
    background-position: center;
    .timer-section{
        height: 500px;
    }
}

</style>