import {Request, Response, NextFunction} from 'express'
import {profile} from '../db'

const queries = require("../queries")

export const createprofile  = async (req:Request, res: Response) => {

    try{
        const username = req.body.username
        const email = req.body.email
        const phone_number = req.body.phone_number
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const gender = req.body.gender
        const skill = req.body.skill
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const description = req.body.description

        const postprofileQuery = profile.query(queries.postprofile, [username, email, phone_number, firstname, lastname, gender, skill, city, state, country, description])
        await postprofileQuery
        res.status(200).send("Profile created successfully")
        
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const updateuserprofile  = async (req:Request, res: Response) => {

    try{
        const id = parseInt(req.params.id);
        const username = req.body.username;
        const email = req.body.email;
        const phone_number = req.body.phone_number
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const gender = req.body.gender
        const skill = req.body.skill
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const description = req.body.description
    
        const getskillsByEmailQuery = profile.query(queries.getskillsByEmail, [email]);
    
        const getskillsByEmailQueryResult = await getskillsByEmailQuery;
        const noOfEmail = getskillsByEmailQueryResult.rows.length;

        if (noOfEmail < 1) {
          res.send("Email changed!! Cannot update user profile. Use ORIGINAL EMAIL.");
          return;
        }else if(noOfEmail === 1){

            const getbyusernameQuery = profile.query(queries.getbyusername, [username])
            const getbyusernameQueryResult = await getbyusernameQuery
            const noOfUsername = getbyusernameQueryResult.rows.length
            if(noOfUsername === 1){
                res.status(200).send("Username is already taken")
                return;
            }

            const getbyphoneNumberQuery = profile.query(queries.getbyphoneNumber, [phone_number])
            const getbyphoneNumberQueryResult = await getbyphoneNumberQuery
            const noOfphoneNumber = getbyphoneNumberQueryResult.rows.length
            if(noOfphoneNumber === 1){
                res.status(200).send("Phone Number is already taken")
                return;
            }

            const updateusernameQuery = profile.query(queries.updatebyusername, [username, email]);
            await updateusernameQuery;

            const updatebyphoneNumberQuery = profile.query(queries.updatebyphoneNumber, [phone_number, email]);
            await updatebyphoneNumberQuery;

            const updatefirstnameQuery = profile.query(queries.updatebyfirstname, [firstname, email]);
            await updatefirstnameQuery;

            const updatelastnameQuery = profile.query(queries.updatebylastname, [lastname, email]);
            await updatelastnameQuery;

            const updategenderQuery = profile.query(queries.updatebygender, [gender, email]);
            await updategenderQuery;

            const updateskillQuery = profile.query(queries.updatebyskill, [skill, email]);
            await updateskillQuery;

            const updatecityQuery = profile.query(queries.updatebycity, [city, email]);
            await updatecityQuery;

            const updatestateQuery = profile.query(queries.updatebyestate, [state, email]);
            await updatestateQuery;

            const updatecountryQuery = profile.query(queries.updatebycountry, [country, email]);
            await updatecountryQuery;

            const updatedescriptionQuery = profile.query(queries.updatebydescription, [description, email]);
            await updatedescriptionQuery;
        
            res.status(200).send("User details have been UPDATED successfully!!");
        }

    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const deleteprofile = async (req:Request, res:Response) => {

    try{
        const username = req.body.username;
        const email = req.body.email;

        const getskillsByEmailQuery = profile.query(queries.getskillsByEmail, [email]);
    
        const getskillsByEmailQueryResult = await getskillsByEmailQuery;
        const noOfEmail = getskillsByEmailQueryResult.rows.length;

        if (noOfEmail < 1) {
          res.send("This Profile doesn't exist!");
          return;
        }else if(noOfEmail === 1){

            const deleteUserProfileQuery = profile.query(queries.deleteUserProfile, [email]);
            await deleteUserProfileQuery;
            
            res.status(200).send("Your profile has beeen DELETED successfully!!");
        }

    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const getallartisans = async (req:Request, res:Response) => {

    try{
        const getuserprofileQuery = profile.query(queries.getuserprofile)

        const getProfile = await getuserprofileQuery
        res.status(200).json(getProfile.rows)
        
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const getallartisansBySkill = async (req:Request, res:Response) => {

    try{
        const skill = req.body.skill
        const getStudentQueryBySkill = profile.query(queries.getprofileBySkill, [skill])

        const getUserBySkill = await getStudentQueryBySkill
        res.status(200).json(getUserBySkill.rows)

    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    } 
}

export const getartisansbyState_City_Skill = async (req:Request, res:Response) => {

    try{
        const skill = req.body.skill
        const city = req.body.city
        const state = req.body.state

        const artisansbyState_City_SkillQuery = profile.query(queries.artisansbyState_City_Skill, [skill, city, state])

        const getThisArtisans = await artisansbyState_City_SkillQuery
        if(getThisArtisans.rows.length === 0){
            res.status(200).send("SORRY!! There are no artisans in this location.")
        }else if(getThisArtisans.rows.length >= 1){
            res.status(200).json(getThisArtisans.rows)
        } 

    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    } 
}

export const getpainters = async (req:Request, res:Response) => {

    try{
        const painter = req.params.Painter
 
        const getskillByPaintersQuery = profile.query(queries.getskillByPainters, [painter])

        const getallpainters = await getskillByPaintersQuery
        if(getallpainters.rows.length === 0){
            res.status(200).send("OOPS!! There are no painters available.")
        }else if(getallpainters.rows.length >= 1){
            res.status(200).json(getallpainters.rows)
        } 
    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    } 
}

export const getcleaners = async (req:Request, res:Response) => {

    try{
        const cleaner = req.params.Cleaner
   
        const getskillByCleanersQuery = profile.query(queries.getskillByCleaners, [cleaner])

        const getallcleaners = await getskillByCleanersQuery
        if(getallcleaners.rows.length === 0){
            res.status(200).send("OOPS!! There are no cleaners available.")
        }else if(getallcleaners.rows.length >= 1){
            res.status(200).json(getallcleaners.rows)
        } 
    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    } 
}

export const getguardners = async (req:Request, res:Response) => {
    try{
        const guardner = req.params.Guardner

        const getskillByGuardnersQuery = profile.query(queries.getskillByGuardners, [guardner])

        const getallguardners = await getskillByGuardnersQuery
        if(getallguardners.rows.length === 0){
            res.status(200).send("OOPS!! There are no guardners available.")
        }else if(getallguardners.rows.length >= 1){
            res.status(200).json(getallguardners.rows)
        }  
    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    }
}










































































































