exports.get404 = (req, res) => {
  res.status(404).json({ message: '404 Page Not Found' });
  console.warn('Page not found, was returned 404 status')
};
