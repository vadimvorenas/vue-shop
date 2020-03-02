<template>
  <div class="shipping">
    <div class="shipping__form" @change="changeForm">
      <div class="shipping__form_name">
        <p>Name*</p>
        <input :placeholder="'Jack Blue'" type="text" @change="checkName" />
      </div>
      <p :class="{'d-none': !errors.name, 'errors': true}">{{errors.name}}</p>
      <div class="shipping__form_address">
        <p>Address*</p>
        <input :placeholder="'109  Victoria Road'" type="text" @change="checkAddress" />
      </div>
      <p :class="{'d-none': !errors.address, 'errors': true}">{{errors.address}}</p>
      <div class="shipping__form_phone">
        <p>Phone</p>
        <input :placeholder="'123-456-7890'" type="text" @change="checkPhone" />
      </div>
      <p :class="{'d-none': !errors.phone, 'errors': true}">{{errors.phone}}</p>
      <div class="shipping__form_email">
        <p>Email</p>
        <input :placeholder="'szbwon@mail.com'" type="text" @change="checkEmail" />
      </div>
      <p :class="{'d-none': !errors.email, 'errors': true}">{{errors.email}}</p>
      <div class="shipping__form_options">
        <p>Shipping options</p>
        <select v-model="selectShipping">
          <option
            v-for="(item, index) in SHIPPING[0]"
            :disabled="CART_TOTAL_COST < 300 && index == 3"
            :key="index"
            :value="index"
          >{{item.name}} - {{item.price}} €</option>
        </select>
      </div>
      <router-link
        :class="{'link-disabled': !isValid, 'shipping__form__link_to_pay': true}"
        :to="{name: 'buy'}"
      >
        <div class="shipping__form__link_to_pay__btn">Pay</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "shipping",
  components: {},
  data() {
    return {
      isValid: false,
      errors: {
        name: false,
        email: false,
        phone: false,
        address: false
      },
      formValid: {
        name: false,
        address: false
      },
      selectShipping: 0
    };
  },
  methods: {
    ...mapActions(["SET_SHIPPING"]),
    checkName(e) {
      let value = e.target.value;
      if (value && value.length < 3) {
        this.errors.name = "Min length 3";
        this.formValid.name = false;
      } else {
        this.errors.name = false;
        this.formValid.name = true;
      }
    },
    checkAddress(e) {
      let value = e.target.value;
      if (value && value.length < 5) {
        this.errors.address = "Invalid address";
        this.formValid.address = false;
      } else {
        this.errors.address = false;
        this.formValid.address = true;
      }
    },
    checkEmail(e) {
      let value = e.target.value;
      console.log(value);
      if (value && !validateEmail(value)) {
        this.errors.email = "Invalid e-mail";
      } else {
        this.errors.email = false;
      }
    },
    checkPhone(e) {
      let value = e.target.value;
      if (value && value.length < 7) {
        this.errors.phone = "Min length 7";
      } else if (!validatePhone(value)) {
        this.errors.phone = "Invalid phone";
      } else {
        this.errors.phone = false;
      }
    },
    changeForm() {
      let is_valid_form = false;
      for (let val in this.formValid) {
        if (!this.formValid[val]) {
          is_valid_form = false;
          break;
        } else {
          is_valid_form = true;
        }
      }
      this.isValid = is_valid_form;
    }
  },
  created() {},
  computed: {
    ...mapGetters(["SHIPPING", "CART_TOTAL_COST"])
  },
  props: {},
  mounted() {
    this.SET_SHIPPING();
    console.log(this.CART_TOTAL_COST);
    if (this.CART_TOTAL_COST > 300) {
      this.selectShipping = 3;
    }
  }
};
function validateEmail(email) {
  let re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhone(phone) {
  let re = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
}
</script>
<style lang="scss" scoped>
.shipping {
  width: 100%;
  &__form {
    width: 50%;
    margin: auto;
    @media screen and (max-width: 768px) {
      width: 80%;
      min-width: 300px;
    }
    > div {
      display: flex;
      height: 30px;
      margin: $margin * 2 auto;
      position: relative;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: $margin * 5 auto;
      }
    }
    > div > p,
    input,
    select {
      display: inline-block;
      flex: 50%;
      box-sizing: content-box;
    }
    > div > p {
      text-align: left;
      margin: auto;
    }
    > div > input {
      border: 1px solid gray;
      border-radius: 2px;
      padding: $padding;
    }
    div > select {
      box-sizing: content-box;
      border: 1px solid gray;
      border-radius: 2px;
      padding: 2px $padding;
      -moz-appearance: menulist;
      -webkit-appearance: menulist;
    }
    &__link_to_pay {
      margin: 15px;
      text-decoration: none;
      background: $green-bg;
      padding: $padding 15px;
      border-radius: 2px;
      border: 1px solid black;
      text-transform: uppercase;
      color: #000;
      display: block;
      width: 150px;
      margin: auto;
      &__btn {
      }
    }
    .errors {
      display: block;
      text-align: start;
      font-size: 12px;
      color: red;
      font-weight: bold;
      width: 50%;
      left: 0;
      margin: -10px 0 5px auto;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
</style>
