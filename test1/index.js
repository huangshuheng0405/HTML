let price = +prompt("请输入商品价格：")
let count = +prompt("请输入购买数量：")
let address = prompt("请输入收货地址：")
let total = price * count
document.write(`
    <table>
      <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>商品数量</th>
        <th>总价</th>
        <th>收货地址</th>
      </tr>
      <tr>
        <td>小米青春版</td>
        <td>${price}元</td>
        <td>${count}</td>
        <td>${total}元</td>
        <td>${address}</td>
      </tr>
    </table>
    `)
