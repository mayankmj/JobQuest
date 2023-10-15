import 'bootstrap/dist/css/bootstrap.min.css'
import JobForm from './components/JobForm';
import { useEffect, useState } from 'react';
import { getData } from './services/api';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
const  App = () => {

  const[showForm,setShowForm] = useState(false);

  const[jobs,setJobs] = useState([]);

  const[selectedJob,setSelectedJob] = useState(null);

  // useEffect call back function is a sync func we
  // can not make it async , so we can sync func inside it
  useEffect(() => {
    const getJobsData = async () => {
       const response = await getData();
       setJobs(response);
    }
    getJobsData();

  },[showForm])

  const handleToggleForm = () =>{
    setSelectedJob(null);
    setShowForm(prevState =>!prevState)
  }

  return (
    <div className='container mt-5'>
       {/* // left section */}
         <div className="row">
           <div className="col-md-4">
             <h1 className="mb-4">Job Board</h1>
             <button className="btn btn-primary mb-3"
               onClick ={handleToggleForm}
             >
               {showForm ? 'Hide Job Form' : 'Show Job form'}
             </button>
             <div>
               {showForm ? <JobForm setShowForm={setShowForm}/> : <JobList jobs = {jobs} 
                setSelectedJob={setSelectedJob}
               />}
             </div>
           </div>
           { selectedJob && 
              <div className="col-md-8">
                  <JobDetail job={selectedJob}/>
               </div>
           }
         </div>
         <div>

         {/* right section */}

         </div>
    </div>
  );
}

export default App;
