let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];
  exports.getAllProducts = (req, res) => {
    res.json(products);
  };
  exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    product ? res.json(product) : res.status(404).json({ message: "Product not found" });
  };
  exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (product) {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  };
  exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      const deleted = products.splice(index, 1);
      res.json(deleted[0]);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  };
  