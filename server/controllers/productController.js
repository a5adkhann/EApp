const productModal = require("../modals/ProductSchema");

const productController = {
    getAllProducts: async (req, res) => {
        const allProducts = await productModal.find();
        res.json({
            message: "Product fethed Successfully",
            status: true,
            data: allProducts
        })
    }
}

module.exports = productController;