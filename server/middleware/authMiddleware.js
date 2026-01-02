export const simpleAuth = (req, res, next) => {
  const phone = req.headers["x-user-phone"];

  if (!phone) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
