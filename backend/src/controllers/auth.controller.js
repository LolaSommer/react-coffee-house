import {login} from '../services/auth.service.js'
export function createAuthController(req,res){
     const { phone } = req.body;
     try{
        if(!phone){
        return res.status(400).json({
    error:'PHONE_REQUIRED',
  });
        }else{
            const result = login(phone);
  return res.status(201).json(result);
        }

     }catch(error){
        console.log(error)
   return res.status(500).json({
    error: 'INTERNAL_ERROR',
  });
     }
}