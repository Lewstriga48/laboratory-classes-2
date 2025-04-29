const renderNewProductPage = (productName) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>New Product</title>
      </head>
      <body>
        <h1>Newest Product</h1>
        <p>${productName}</p>
        <br>
        <a href="/">Return to Home</a>
      </body>
      </html>
    `;
  };
  
  module.exports = renderNewProductPage;
  