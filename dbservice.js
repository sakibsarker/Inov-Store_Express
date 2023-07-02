const mysql=require('mysql');
const dotenv=require('dotenv');
dotenv.config();

const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,

})

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('db'+connection.state)
    }
})

class DbService{
    static getDbServiceInstance(){
        return instance?instance:new DbService();
    }
    async getAllData(){
        try{
            const res=await new Promise((resolve,reject)=>{
                const query="SELECT * FROM names"
                connection.query(query,(err,results)=>{
                    if(err)reject(new Error(err.message));
                    resolve(results)
                })
            })
            console.log(res)
            }catch(error){
                console.log(error)
            }
        }
    }

module.children=DbService