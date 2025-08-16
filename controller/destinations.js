// CONTROLLER METHODS

// @desc    Get all Destinations
// @route   GET /api/v1/destinations
// @access  Public
exports.getDestinations = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get All Destinations' });
};

// @desc    Get single Destination
// @route   GET /api/v1/destinations/:id
// @access  Public
exports.getDestination = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get Destination ${req.params.id}` });
};

// @desc    Create new Destination
// @route   POST /api/v1/destinations
// @access  Private
exports.createDestination = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new destination' });
};

// @desc    Update Destination
// @route   PUT /api/v1/destinations/:id
// @access  Private
exports.updateDestination = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated Destination ${req.params.id}` });
};

// @desc    Delete Destination
// @route   DELETE /api/v1/destinations/:id
// @access  Private
exports.deleteDestination = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Destination ${req.params.id}` });
};
