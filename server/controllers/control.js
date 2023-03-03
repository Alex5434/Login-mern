const signUpModel = require('../Models/DataModel')

const getHome = (req, res)=>{
    console.log(req)
    res.send("This is Home Page")
}

const postLogin = async(req, res)=>{
    try {
        const {fullname, password} = req.body;
        const user = await signUpModel.findOne({fullname:fullname})
        if(!user){
            return res.status(404).json({msg:"No user Found"})
        }
        else if(password!=user.password){
            return res.status(500).json({msg:"Wrong Password"})
        }
        res.status(200).redirect('/home')
    } catch (error) {
        res.status(500).send("Page under maintainence")
    }
}


const postSignUp = async(req, res)=>{
    try {
        const data =  await signUpModel.create(req.body);
        res.status(201).json(data)
    } catch (error) {
        console.log("Error occured");
        res.status(500).json({msg:"Error"})
    }
}


module.exports = {postLogin,postSignUp,getHome}