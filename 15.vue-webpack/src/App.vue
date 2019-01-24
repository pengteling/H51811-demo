<template>
  <div>
    <el-table
      :data="cartList"
      style="width: 100%"
      @selection-change="handlerSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        prop="selected"
      >
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名称"
      >
      </el-table-column>
      <el-table-column
        label="商品数量"
      >
        <template slot-scope="scope">
          <div class="num">
            <el-input-number
              v-model="scope.row.buy_num"
              :min="1"
              :max="9999"
              label="请输入数量"
              size="mini"
            ></el-input-number>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
      >
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="8">
        共有 {{ total_num }} 件商品，选中 {{ select_num }} 件
      </el-col>
      <el-col :span="16">
        商品总价 ￥{{ total_price }} <button class="btn btn-primary">
          去结算
        </button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.use(ElementUI)

export default {
  data() {
    return {
      // checkAll:false,
      cartList: [{
        goodsName: '小米6',
        buy_num: 1,
        price: 2000,
        selected: true,
      },
      {
        goodsName: '红米3',
        buy_num: 1,
        price: '999',
        selected: true,
      },
      {
        goodsName: '小米Note3',
        buy_num: 1,
        price: 1199,
        selected: false,
      },
      ],
      selectList: [],
    }
  },
  computed: {
    // selectList() {
    //   return this.cartList.filter(item => item.selected)
    // },
    // selectList:{
    //   get(){}
    // },
    total_num() {
      return this.cartList.reduce((totalNum, item) => totalNum + item.buy_num, 0)
    },
    select_num() {
      return this.selectList.reduce((totalNum, item) => totalNum + item.buy_num, 0)
    },
    total_price() {
      return this.selectList.reduce((totalPrice, item) => totalPrice + item.buy_num * item.price, 0)
    },
  },
  methods: {
    add(item) {
      item.buy_num++
    },
    minus(item) {
      if (item.buy_num > 0) {
        item.buy_num--
      }
    },
    handlerSelectionChange(val) {
      console.log(val)
      this.selectList = val
    },
  },
}
</script>
<style lang="scss">
.num .el-input-number--mini {
    width: 80px;
}

.num .el-input-number--mini .el-input__inner {
    padding-left: 5px;
    padding-right: 5px;
}
.num .el-input-number--mini .el-input-number__decrease, .num .el-input-number--mini .el-input-number__increase {
    width: 18px;
    }
</style>
