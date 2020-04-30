<template>
  <div id="header">
    <router-link id="logo" to="/">
      <img alt="Rocketshoes logo" src="../assets/logo.svg" />
    </router-link>

    <router-link to="/cart" id="cart-badge">
      <div>
        <strong>Meu carrinho</strong>
        <span> {{ Object.keys(amount).length || 0 }} itens </span>
      </div>
      <span>
        <i class="fas fa-shopping-cart"></i>
      </span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['amount']),
  },
};
</script>

<style scoped lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
}

#cart-badge {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  div strong {
    display: block;
    color: #fff;
    font-weight: 900;
  }

  div span {
    font-size: 12px;
    color: #999;
  }

  span {
    color: white;
    font-size: 24px;
  }
}

@media only screen and (max-width: 625px) {
  #header {
    flex-direction: column;
  }

  #cart-badge {
    margin-top: 20px;
  }
}
</style>
