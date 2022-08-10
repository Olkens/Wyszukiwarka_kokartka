<template>
    <div>
        <div>
            <label for="group">GRUPA</label>
            <select name="grupa" id="group" v-model="this.fGroup">
                <option value="grupa" selected disabled>Grupa</option>
                <option value="mucha">mucha</option>
                <option value="kokartka">kokartka</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
</style>