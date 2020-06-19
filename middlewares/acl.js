const ROLES_MAP_PERMISSIONS = {
    'User':{

    },
    'Artist':{

    }
};

const PUBLIC_ROUTES = ['GET /artist'];
module.exports = (req,res,next) => {
    let token = req.headers['token'];

    let currRoute = req.method + ' ' + req.baseUrl;
    if (token === 'token' || isPublicRoute(currRoute)){
        return next()
    }else{
        res.status(400).send({status:400,message:'You are not allowed to access this route'})
    }
}

const isPublicRoute = route => PUBLIC_ROUTES.indexOf(route) >= 0;