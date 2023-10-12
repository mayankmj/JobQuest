import InputField from "./InputField";
import { useState } from "react";


const defaultData = {title:"",company:"",location:"",description:""};
const JobForm = () =>{

    const[formData, setFormData] = useState(defaultData)

    const hadnleSubmit = () =>{

    }
    return(
        <div>
            <h2 className="mt-3 mb-4">
                Add a Job Listing
            </h2>
            <form onSubmit={hadnleSubmit}>
                <InputField 
                    type="text" 
                    label="Job Title"
                />
                <InputField 
                    type="text" 
                    label="Company"
                />
                <InputField 
                    type="text" 
                    label="Location"
                />
                <InputField 
                    type="text" 
                    label="Job Description"
                />
                <button 
                type="submit"
                className="btn btn-primary mt-2 "
                >
                    Submit
                </button>
            </form>        
        </div>
    )
}

export default JobForm;