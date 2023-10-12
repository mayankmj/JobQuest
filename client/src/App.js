import 'bootstrap/dist/css/bootstrap.min.css'
import JobForm from './components/JobForm';
function App() {
  return (
    <div className='container mt-5'>
       {/* // left section */}
         <div className="row">
           <div className="col-md-4">
             <h1 className="mb-4">Job Board</h1>
             <button className="btn btn-primary mb-3">show job form</button>
             <div>
                <JobForm />
             </div>
           </div>

           <div className="col-md-8">
                hello
           </div>
         </div>

         {/* right section */}
         <div>

         </div>
    </div>
  );
}

export default App;
