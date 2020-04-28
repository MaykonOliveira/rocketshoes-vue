<template>
  <ul id="grid-list">
    <li class="grid-item" v-for="product in products" :key="product.id">
      <img :src="product.image" />
      <strong>{{ product.title }}</strong>
      <span>{{ product.priceFormatted }}</span>

      <button>
        <div>
          <i class="fas fa-cart-plus"></i>
          0
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  </ul>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Home',
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const response = await api.get('/products');
    this.products = response.data;

    this.products = this.products.map(product => {
      const priceFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price);

      const productFormatted = { ...product, priceFormatted };
      return productFormatted;
    });
  },
};
</script>

<style scoped lang="scss">
#grid-list {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
}

.grid-item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    align-self: center;
    max-width: 250px;
  }

  strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    transition: background 0.2s;

    &:hover {
      background: #573fa8;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
