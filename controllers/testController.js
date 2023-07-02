const testController = (req,res)=>{
   res.status(200).send({
    message:"Test Route is running",
    status:true
   });
};

module.exports = {testController};