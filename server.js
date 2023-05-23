const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: ip, // MySQL 호스트
  user: 'PPAPP', // MySQL 사용자 이름
  password: '!xuzin010910', // MySQL 암호
  database: 'donga' // 사용할 데이터베이스 이름
});

const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호
const ip = '15.165.247.9'

// 미들웨어 설정
app.use(express.json());

// 라우팅 설정
app.get('/', (req, res) => {
  res.send('API 서버가 동작 중입니다.');
});

app.get('/data', (req, res) => {
    connection.query('SELECT * FROM emart', (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://${ip}:${port} 에서 동작 중입니다.`);
});

