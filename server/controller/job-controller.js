
import Job from "../models/job.js"

export const saveJobData = async (request,response) =>{
    try {
       const newJob =  new Job(request.body);

       await newJob.save();
       response.status(200).json({message: "Job saved successfully"})
    } catch (error) {
        console.log(error.mesage);
        response.status(500).json({error: error.message})
    }
}