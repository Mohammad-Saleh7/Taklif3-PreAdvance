module.exports = (req, res, next) => {
    console.log(`Request received at: ${new Date().toLocaleString()}`);
    next();
  };
  