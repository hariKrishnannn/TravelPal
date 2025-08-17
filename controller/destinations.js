const Destination = require('../models/Destination');

// @desc    Get all Destinations
// @route   GET /api/v1/destinations
// @access  Public
exports.getDestinations = async (req, res, next) => {
  try {
    const destinations = await Destination.find();
    res
      .status(200)
      .json({ success: true, count: destinations.length, data: destinations });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single Destination
// @route   GET /api/v1/destinations/:id
// @access  Public
exports.getDestination = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: destination });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new Destination
// @route   POST /api/v1/destinations
// @access  Private
exports.createDestination = async (req, res, next) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json({
      success: true,
      data: destination,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update Destination
// @route   PUT /api/v1/destinations/:id
// @access  Private
exports.updateDestination = async (req, res, next) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedDestination) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: updatedDestination });
  } catch (error) {
    res.status(400).josn({ success: false });
  }
};

// @desc    Delete Destination
// @route   DELETE /api/v1/destinations/:id
// @access  Private
exports.deleteDestination = async (req, res, next) => {
  try {
    const updatedDestination = await Destination.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({ data: updatedDestination });
    if (!updatedDestination) {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).josn({ success: false });
  }
};
