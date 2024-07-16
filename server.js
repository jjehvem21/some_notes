const express = require('express');
const app = express();
const port = 3000;

// 中间件，用于解析 JSON 请求体
app.use(express.json());

// 定义一个简单的 GET 接口
app.get('/api/hello', (req, res) => {
  console.log('coming')
  res.send('peanut butter');
});

// 定义一个简单的 POST 接口
app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.send({ echoedMessage: message });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
