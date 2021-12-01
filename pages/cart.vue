<template>
    <div>
        <Header />
        <div class="container">
            <h1 class="list-title">
                장바구니 페이지
            </h1>
            <CartList />
            <div class="extra-panel">
                <button>구매하기</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import CartList from '@/components/CartList.vue';
// import { FETCH_CART_ITEMS } from '@/store/index'

export default {
    components: {
        Header,
        CartList
    },

    // async asyncData({ store }) {
    //     await store.dispatch(FETCH_CART_ITEMS);
    // },

}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>