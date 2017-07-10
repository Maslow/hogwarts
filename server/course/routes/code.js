const express = require("express")
const course = require("../dal/course")
const code = require("../dal/code")
const path = require("path")

let router = express.Router()

router.get("/getSectionCodeFiles", async function (req, res) {
    req.checkQuery('sid').notEmpty().isInt()
    let errors = await req.getValidationResult()
    errors.useFirstErrorOnly()
    if (errors.isEmpty() === false)
        return res.status(422).send(errors.mapped())

    let section = await course.GetSection(req.query.sid, req.uid)
    if (!section)
        return res.status(404).send('Section not found')

    let p = req.query.path || "/"
    let rets = await code.GetCodeDirFiles(section.id.toString(), section.template_id.toString(), p)
    if (rets === null)
        return res.status(404).send('Section Code not found')
    return res.status(200).send(rets)
})

router.get("/getSectionCodeFileContent", async function (req, res) {
    req.checkQuery('sid').notEmpty().isInt()
    let errors = await req.getValidationResult()
    errors.useFirstErrorOnly()
    if (errors.isEmpty() === false)
        return res.status(422).send(errors.mapped())

    let section = await course.GetSection(req.query.sid, req.uid)
    if (!section)
        return res.status(404).send('Section not found')

    let p = req.query.path || '/'
    let rets = await code.GetCodeFileContent(section.id.toString(), section.template_id.toString(), p)
    if (rets === null)
        return res.status(404).send('Section code file not found')

    return res.status(200).send({
        name: req.query.path,
        hash: 'TODO',
        content: rets.toString('utf-8')
    })
})

module.exports = router