import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

export const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};
