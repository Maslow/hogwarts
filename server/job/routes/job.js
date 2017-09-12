const express = require("express")
const job = require("../model/job")

const router = express.Router()

/**
 * 获取当前登录用户的一个作业详情
 */
router.get('/getUserJobBySectionId', async function (req, res) {
    const sectionId = req.query.sid || 0
    if (!sectionId)
        return res.status(422).send('Section Id can not be empty')

    let job0 = await job.GetUserJobBySectionId(userId, sectionId)
    if (!job0)
        job0 = await job.CreateUserJob(userId, sectionId)

    return res.status(200).send(job0)
})

module.exports = router