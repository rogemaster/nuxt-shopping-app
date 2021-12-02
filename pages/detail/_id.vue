<template>
    <div>
    <Header />
        <div class="container">
            <div class="main-panel">
                <img :src="product.imageUrl" :alt="product.name" class="product-image" />
            </div>
            <div class="side-panel">
                <p class="name">{{ product.name }}</p>
                <p class="price">{{ product.price }}</p>
                <button type="button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index';
import Header from '@/components/header.vue';

export default {
    components: {
        Header
    },

    async asyncData({params}) {
        const res = await fetchProductById(params.id);
        const product = res.data;
        console.log(product);
        return { product };
    },
    // 함수형태
    head() {
        return {
            title: `Shopping Item Detail - ${tthis.product.name}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `이 상품은 ${tthis.product.name} 입니다.`,
                },
            ],
        }
    },

    methods: {
        async addToCart () {
            const res = await createCartItem(this.product);
            console.log(res);
            this.$store.commit('addCartItem', this.product);
            this.$router.push({path: '/cart'});
        }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
