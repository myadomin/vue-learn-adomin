# vue 文档学习
``` javascript
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
  // 和上面一样的输出 但是这里就不能像上面一样缓存
  <p>Computed reversed message: "{{ reversedMessage() }}"</p>
</div>

 computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
```
