<template>
    <div class="input-wrapper flex">
        <input type="text" 
            class="search-input"
            :value="value" 
            @input="$emit('input', $event.target.value)" 
        />
        <button class="btn" type="button" @click="$emit('search')">Search</button>
    </div>
</template>

<script>
export default {
    // model: {

    // },
    props: {
        value: {    // value가 아닌 다른 name을 원할 경우 props가 아닌 model로 처리
            type: String,
            default: () => ''
        }
    }
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>