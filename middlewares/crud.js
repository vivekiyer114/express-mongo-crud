
function callback(err,response,res){
    console.log(err,response,'hey')
    if (err){
        res.status(400).send({message:err.message})
    }else{
        res.send(response)
    }
};

module.exports = Model => {
    function find(req,res){
        Model.find(req.query,(err,response) => callback(err,response,res));
    }

    function findOne(req,res){
        Model.findOne({_id:req.params.id},(err,response) => callback(err,response,res));
    }
    
    function create(req,res){
        Model.create(req.body,(err,response) => callback(err,response,res));
    }
    
    function update(req,res){
        Model.update({_id:req.params.id},req.body,(err,response) => callback(err,response,res));
    }
    
    const router = require('express').Router();

    router.get('/',find);
    
    router.get('/:id',findOne);

    router.post('/',(req,res) => {
        create(req,res);
    });
    
    router.put('/:id',update)

    return router;
}