let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

const studentSchema = require('../Models/Student');

router.route("/create-student").post(async (req, res, next) => {
    await studentSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully added!",
                status:200
            });
        })
        .catch((err) => {
            return next(err);
        });
});

router.route("/").get(async (req, res, next) => {
    await studentSchema
        .find()
        .then((result) => {
            res.json({
                data: result,
                message: "All items successfully fetched.",
                status: 200
            });
        })
        .catch((err) => {
            return next(err);
        });
});

router.route("/get-student/:id").get(async (req, res, next) => {
    await studentSchema
        .findById(req.params.id)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully fetched.",
                status: 200
            });
        })
        .catch((err) => {
            return next(err);
        });
});

router.route("/update-student/:id").put(async (req, res, next) => {
    await studentSchema
        .findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        .then((result) => {
            console.log(result);
            res.json({
                data: result,
                msg: "Data successfully updated."
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/delete-student/:id").delete(async (req, res, next) => {
    await studentSchema
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.json({
                msg: "Data successfully updated.",
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = router;

