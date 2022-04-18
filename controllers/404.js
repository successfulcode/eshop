exports.get404 = (req, res) => {
  res.status(404).send('404 Page Not Found');
  console.warn('Page not found, was returned 404 status')
};
