function serverError(err, req, res) {

    res.status(500)
    res.json({
        "status": 500,
        "error": err.message
    })
}

module.exports = serverError