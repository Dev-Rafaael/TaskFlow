import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" })
  }

  const token = authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Invalid token format" })
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as { id: string }

    req.user = { id: decoded.id }

    return next()
  } catch {
    return res.status(403).json({ message: "Invalid token" })
  }
}
