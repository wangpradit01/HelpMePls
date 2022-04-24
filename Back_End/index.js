//npm init --y
//npm i -s express body-parser cors

const bodyParser = require('body-parser');
const express = require('express');
const{ Router } = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();

const PORT = 80;

app.use(cors())
app.use('/api',bodyParser.json(),router);
app.use('/api',bodyParser.urlencoded({extended : false}),router);



let Student = {
    list: [
        {id : 1, fname : "Nisanad", surname :"Taweekaew" , major : "CoE",gpa : 4.00 }

    ]
}

router.route('/Student')
    .get((req,res)=>res.json(Student))
    .post((req,res) =>{
        let id = (Student.list.length)?Student.list[Student.list.length-1].id+1:1
        let fname = req.body.fname
        let surname = req.body.surname
        let major = req.body.major
        let gpa = req.body.gpa

        Student = {list:[...Student.list,{id,fname,surname,major,gpa}]}
        res.json(Student)
    })

router.route('/Student/:std_id')
    .get((req,res)=>{
        let ID = Student.list.findIndex(item => (item.id === +req.params.std_id))
        res.json(Student.list[ID])
    })

    .put((req,res)=>{
        let ID = Student.list.findIndex( item => (item.id === +req.params.std_id))

        if(ID >= 0){
            Student.list[ID].fname = req.body.fname
            Student.list[ID].surname = req.body.surname
            Student.list[ID].major = req.body.major
            Student.list[ID].gpa = req.body.gpa

            res.json(Student)
        }
        else{
            res.json({status: " Student Error"})
        }

    })

    .delete((req,res)=>{
        let ID =Student.list.findIndex(item => (item.id === +req.params.std_id ))
        Student.list = Student.list.filter(item => item.id !== +req.params.std_id)
        res.json(Student)
    })


app.listen(PORT,()=>console.log('Server is run :',PORT))
