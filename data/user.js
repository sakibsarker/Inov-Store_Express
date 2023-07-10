 const bcrypt =require('bcryptjs')

 const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,

    },
    {
        name:'Sakib Sarker',
        email:'sakib@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,

    },
    {
        name:'Jane Doe',
        email:'jane@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,

    }
]

module.exports=users;