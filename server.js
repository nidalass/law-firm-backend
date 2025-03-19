const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// UTF-8 인코딩 강제 설정 (한글 깨짐 방지)
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

// PostgreSQL 데이터베이스 설정
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// 기본 경로 확인용 API
app.get("/", (req, res) => {
  res.send("백엔드 서버 정상 작동 중! 🚀");
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중...`);
});
