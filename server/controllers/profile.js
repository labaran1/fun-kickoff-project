const Profile = require("../models/Profile")
const User = require("../models/User")
const asyncHandler = require("express-async-handler");


// @route POST /profile
// @desc Given parameters passed in , create a profile
// @access Private
exports.createProfile = asyncHandler(async()=> {
    const { firstName, lastName,description, availability, id} = req.body;

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


      if(profile) {
        res.status(201).json({
            success: {
              profile: {
                id: user._id,
                firstName: profile.firstName,
                lastName: profile.lastName,
                description: profile.description,
                availability:profile.availability
              }
            }
          });

      }else {
        res.status(400);
        throw new Error("Invalid profile data");

      }

})