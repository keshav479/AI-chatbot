import express from 'express';
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
config();
const app = express();
//middleware
// app.use(cors({origin: "https://gpt-bot-gamma.vercel.app", credentials: true}));
app.use(cors({ origin: "*" }));
// app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in production
// app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map