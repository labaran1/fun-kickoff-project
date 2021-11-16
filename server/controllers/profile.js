const Profile = require("../models/Profile")
const User = require("../models/User")
const asyncHandler = require("express-async-handler");


// @route POST /profile
// @desc Given parameters passed in , create a profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, description, availability, id } = req.body;

    const user = await User.findById(id);
    if (!user) {
        res.status(401);
        throw new Error("Not authorized");
    }

    const profile = await Profile.create({
        firstName,
        lastName,
        description,
        availability,
    });


    if (profile) {
        res.status(200).json({
            success: {
                profile: {
                    id: user._id,
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    description: profile.description,
                    availability: profile.availability
                }
            }
        });

    } else {
        res.status(400);
        throw new Error("Invalid profile data");

    }

})


// @route PUT /profile
// @desc Given an ID and new parameters, update the profile
// @access Private

exports.updateProfile = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, description, availability, id } = req.body
    const profile = await Profile.findById(id);

    if (!profile) {
        res.status(401);
        throw new Error("Not authorized");
    }


    Profile.updateOne({
        _id: id
    }, {
        $set: {
            firstName: firstName,
            lastName: lastName,
            description: description,
            availability: availability
        }
    }

    );


})

// @route GET /profile:id
// @desc  Given an ID, return profile with that ID
// @access Public


exports.getProfile = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const profile = await Profile.findById(id);
    if (profile) {
        res.status(200).json({
            success: {
                profile: profile
            }
        }
        )
    }
    else {
        res.status(404);
        throw new Error("Profile Not found");
    }

}
)


// @route GET /profiles
// @desc list of profiles
// @access Public


exports.getProfiles = asyncHandler(async (req, res, next) => {

    const profiles = await Profile.find().pretty()

    if (profiles) {
        res.status(200).json({
            success: {
                profiles: profiles
            }
        }
        )
    }
    else {
        res.status(404);
        throw new Error("No User Found");
    }




})
