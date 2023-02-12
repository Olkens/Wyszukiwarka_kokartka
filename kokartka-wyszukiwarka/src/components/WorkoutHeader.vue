<template>
    <div class="tr-heading">
        <div v-if="trening.brand == 'kokartka'" class="Kokartka-color">
            <p>
                {{ trening.brand.toUpperCase() }}
            </p>
        </div>
        <div v-else-if="trening.brand == 'mucha'" class="Mucha-color">
            <p>
                {{ trening.brand.toUpperCase() }}
            </p>
        </div>
        <div v-if="trening.brand == 'junior'" class="Junior-color">
            <p>
                {{ trening.brand.toUpperCase() }}
            </p>
        </div>
        <div v-if="trening.brand == 'pro'" class="pro-color">
            <p>
                {{ trening.brand.toUpperCase() }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        trening: Object,
    }

}
</script>
<style lang="scss">

</style>