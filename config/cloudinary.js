const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

/**
 * Configures Cloudinary to upload media using the provided credentials.
 *
 * @return {void} This function does not return anything.
 */
exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
			secure: true,

			
		});
	} catch (error) {
		console.log(error);
	}
};