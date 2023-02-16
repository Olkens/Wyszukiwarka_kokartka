<template>
    <div class="main-container-header">
        <p>WYSZUKAJ ZAJĘCIA</p>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.main-container-header {
    display: flex;
    padding: 37px 34px;
    justify-content: flex-start;
    align-items: center;
    background: url(/wyszukiwarka/assets/panel-bg.png) no-repeat center;
    background-size: cover;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    max-height: 86px;
    margin-bottom: 2rem;

    p {
        color: white;
        font-size: 24px;
    }

    @media(max-width:786px) {
        background-position: 12% 0px ;
    }
}
</style>