const categoryModal = require("../modals/CategorySchema");

const categoryController = {
    getAllCategories: async (req, res) => {
        const allCategories = await categoryModal.find();
        res.json({
            message: "Categories fethed Successfully",
            status: true,
            data: allCategories 
        })
    } 
}

module.exports = categoryController;