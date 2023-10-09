import express from 'express'

// server initilisation
const app = express();

const PORT = process.env.PORT || 8000;
 
 // listen function creates backend server
 app.listen(PORT , () => console.log(`Server is running successfully on PORT ${PORT}`));