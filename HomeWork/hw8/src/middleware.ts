import { Request, Response, NextFunction } from "express";

export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const key = req.headers["x-api-key"];

    if (key !== "secret123") {
        return res.status(400).json(
            { message: "Unauthorized" }
        );
    }
    next();
};



