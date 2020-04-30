<template>
  <div class="cart">
    <table>
      <thead>
        <tr>
          <th label="collumn" />
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>SUBTOTAL</th>
          <th label="collumn" />
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in cart" :key="product.id">
          <td>
            <img :src="product.image" />
          </td>
          <td>
            <div class="product-description">
              <strong>{{ product.title }}</strong>
              <span>{{ product.priceFormatted }}</span>
            </div>
          </td>
          <td>
            <div class="amount-controll">
              <button type="button" @click="handleUpdateAmount(product.id, product.amount-1)">
                <i class="fas fa-minus-circle"></i>
              </button>
              <input readonly :value="product.amount" />
              <button type="button" @click="handleUpdateAmount(product.id, product.amount+1)">
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </td>
          <td>
            <strong>{{ product.subTotalFormatted }}</strong>
          </td>
          <td>
            <button>
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <footer>
      <button type="button">FINALIZAR PEDIDO</button>
      <div>
        <span>TOTAL</span>
        <strong>{{ total }}</strong>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('cart', ['updateProductAmount']),
    handleUpdateAmount(id, amount) {
      this.updateProductAmount({ id, amount });
    },
  },
  computed: {
    ...mapGetters('cart', ['cart', 'total']),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 40px;
  border-radius: 4px;
}

table {
  flex: 1;
  width: 100%;

  th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;

    img {
      max-width: 100px;
    }
  }
}

.product-description {
  display: flex;
  flex-direction: column;

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
}

.amount-controll {
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 30px;
  }
}

button {
  background: none;
  border: 0;
  padding: 6px;

  svg {
    color: rgb(113, 89, 193);
    height: 20px;
    width: 20px;
  }
}

footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: #7159c1;
    color: #fff;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: darken(#7159c1, 10);
    }
  }

  div {
    display: flex;
    align-items: baseline;

    span {
      color: #999;
      font-weight: bold;
    }

    strong {
      font-size: 28px;
      margin-left: 5px;
    }
  }
}
</style>
