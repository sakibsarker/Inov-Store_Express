const path = require('path');

exports.getApiPage = (req, res) => {
  const filePath = path.join(__dirname, '../view', 'index.html');
  res.sendFile(filePath);
};