const path = require('path');
const dbService=require('../dbservice')
exports.getAllPage = (req, res) => {
    const db=dbService.getDbServiceInstance();
    res.json({
        success:true
    })
};

