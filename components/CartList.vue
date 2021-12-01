<template>
    <div class="list-wrapper">
        <ul>
            <li v-for="cartItem in $store.state.cartItems" :key="cartItem.key" class="list-item">
                <div>
                    <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
                    <div class="description">
                        <p>{{ cartItem.name }}</p>
                        <span>{{ cartItem.price }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store/index'

export default {

    // async asyncData({ store }) {
    //     await store.dispatch(FETCH_CART_ITEMS);
    // },

    async fetch() {
        await this.$store.dispatch(FETCH_CART_ITEMS);
    }

}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>