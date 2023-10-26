module.exports = (req, res) => {

    res.status(404).send({
        message: "API Not Found",
        status: false,
        data: []
    });

};