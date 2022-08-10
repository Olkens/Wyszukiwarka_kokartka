<template>
    <div class="tr-main-container">
        <div class="tr-info-box-1">
            <div class="tr-info-1">
                <div class="tr-info-1-box">
                    <div>
                        <p class="faded-title">POZIOM</p>
                        <p v-if="trening.level === 'beginner'">Podstawowy</p>
                        <p v-else-if="trening.level === 'beginner_older'">
                            początkująca starsza
                        </p>
                        <p v-if="trening.level === 'advanced'">zaawansowany</p>
                    </div>
                    <div>
                        <p class="faded-title">Szkoła</p>
                        <p>{{ trening.szkola }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tr-info-box-2 tr-info-box-2-grid">
            <div class="tr-info-2">
                <div class="tr-info-2-box tr-border-left">
                    <div>
                        <p class="faded-title">Wiek</p>
                        <p>{{ trening.age }}</p>
                    </div>
                    <div>
                        <p class="faded-title">Dzień</p>
                        <p>{{ trening.day }}</p>
                    </div>
                </div>
            </div>
            <div class="tr-info-3">
                <div class="tr-info-3-box tr-border-left">
                    <div>
                        <p class="faded-title">Godzina</p>
                        <p>
                            {{ trening.date }}
                        </p>
                    </div>
                    <div>
                        <p class="faded-title">GRUPA</p>
                        <p>KOKARTKA</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tr-btn-container">
            <a class="tr-btn tr-btn-wi" href="#">Więcej Informacji</a>
            <a class="tr-btn tr-btn-zs" href="#"> Zapisz się</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trening: Object,
    },
    data() {
        return {

        }
    }
}
</script>
<style>
</style>