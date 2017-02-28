module.exports = (req, res, next) => {
  const { limit = 10, page = 1, show, hide } = req.query
  const skipResults = (+page - 1) * limit
  var projection = {}

  req.limit = +limit
  req.skipResults = skipResults

  if (show) show.split(',').forEach(elemQuery => projection[elemQuery] = 1)
  if (hide) hide.split(',').forEach(elemQuery => projection[elemQuery] = 0)

  req.projection = projection
  next()
}

// Try this : http://localhost:3000/restaurants?limit=1&page=2&show=borough,cuisine,name&hide=_id
