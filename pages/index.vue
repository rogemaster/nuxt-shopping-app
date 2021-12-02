<template>
	<div class="app">
		<Header />
		<main>
			<!-- <SearchInput 
				:search-keyword="searchKeyword"
				@input="updateSerchKeyword"
			/> -->
			<SearchInput v-model="searchKeyword" @search="searchProducts" />
			<ul>
				<li v-for="product in products" :key="product.id" 
					class="item flex" 
					@click="routeToDetailPage(product.id)"
				>
					<img :src="product.imageUrl" :alt="product.name" class="product-image" />
					<p>{{ product.name }}</p>
					<span>{{ product.price }}</span>
				</li>
			</ul>
			<div class="cart-wrapper">
				<button class="btn" @click="routToCartPage">장바구니 바로가기</button>
			</div>
		</main>
	</div>
</template>

<script>
import SearchInput from '@/components/SearchInput';
import { fetchProducts, fetchProductByKeyword } from '@/api/index';
import Header from '@/components/header.vue';

export default {
	components: {
		Header,
		SearchInput
 
	},
    // asyncData는 컴포넌트를 로드 하기 전에 호출된다.(페이지 진입 전에 호출)
    // asyncData는 페이지 컴포넌트에서만 사용이 가능하다.
    // asyncData는 컨텍스트 객체를 첫번째 인수로 받으며, 이를 사용해 일부 데이터를 가져와 컴포넌트 데이터를 반환할 수 있다.
    // asyncData의 return값은 컴포넌트의 data와 병합된다. 
	// {isDev, route, store, env, params, query, req, res, redirect, error}
    async asyncData() {
        const res = await fetchProducts();
        const products = res.data.map((item) => ({
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`
        }));
        return { products };
    },

	data() {
		return {
			searchKeyword: ''
		} 
	},

	methods: {
		routeToDetailPage (id) {
			this.$router.push({path: `detail/${id}`});
		},

		routToCartPage () {
			this.$router.push({path: '/cart'});
		},

		// updateSerchKeyword (keyword) {
		// 	this.searchKeyword = keyword;
		// }

		async searchProducts () {
			const res = await fetchProductByKeyword(this.searchKeyword);
			console.log(res.data);
			this.products = res.data.map((item) => ({
				...item,
				imageUrl: `${item.imageUrl}?random=${Math.random()}`
			}));
		}
	}

}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>