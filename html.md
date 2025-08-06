# HTML

全称是**超文本标记语言**(HyperText Markup Language)



# \<form>

# \<video>

| 属性            | 作用     | 特殊说明             |
| --------------- | -------- | -------------------- |
| src（必须属性） | 视屏URL  | 支持格式：MP4        |
| loop            | 循环播放 |                      |
| muted           | 静音     |                      |
| autoplay        | 自动播放 | 支持静音状态自动播放 |

# \<table>

| 标签     | 描述           |
| :------- | :------------- |
| \<table> | 定义表格       |
| \<th>    | 定义表格的表头 |
| \<tr>    | 定义表格的行   |
| \<td>    | 定义表格单元   |

合并单元格

保留**最左最上**的单元格

要删除多余的单元格

```html
    <table border="5px">
        <tr>
            <th>name</th>
            <th>chinese</th>
            <th>english</th>
            <th>math</th>
        </tr>
        <tr>
            <td>zhangsan</td>
            <td>22</td>
            <!-- 跨行合并 -->
            <td rowspan="2">23</td>
            <td>24</td>
        </tr>
        <tr>
            <td>lisi</td>
            <td>222</td>
            <!-- <td>232</td> -->
            <td>242</td>
        </tr>
        <tr>
            <td>rank</td>
            <td>1</td>
            <!-- 跨列合并 -->
            <td colspan="3">2</td>   
            <!-- <td>3</td> -->
        </tr>
    </table>
```

# \<input>

