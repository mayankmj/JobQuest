

const JobDetail = ({job}) =>{
    return(
        <div>
            <h2 className="mt-3 mb-4">{job.title} - {job.company}</h2>
            <div className="card">
               <div className="card-body">
                  <h5 className="card-title">{job.location}</h5>
                  <p className="card-sent">{job.description}</p>
               </div>
            </div>

        </div>
    )
}

export default JobDetail