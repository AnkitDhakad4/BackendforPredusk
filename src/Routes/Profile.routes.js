import { Router } from "express";
import { createProfile, getProfile, getProjects, updateProfile } from "../controller/profileControllers.js";

const router=Router()


//CRUD operations
router.route('/register').post(createProfile)
router.route('/update').post(updateProfile)
router.route('/getProfile').get(getProfile)
router.route('/projects').get(getProjects)
router.route('/check').get((req,res)=>{
    return res.json({message:"Everything is working fine"}).status(200)
})


export default router