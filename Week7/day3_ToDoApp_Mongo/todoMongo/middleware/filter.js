module.exports = (req, res, next) => {
  const {limit = 4, page = 1, show, hide} = req.query
  const skipResults = (+page - 1) * limit
  var projection = {}

  if (show) show.split(',').forEach(elemQuery => (projection[elemQuery] = 1))
  if (hide) hide.split(',').forEach(elemQuery => (projection[elemQuery] = 0))

  Object.assign(req, limit, skipResults, projection)
}
