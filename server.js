const { default: axios } = require('axios')
const bodyParser = require('body-parser')
const express=require('express')
const { send } = require('process')

const app=express()
const port = process.env.PORT || 3000;



chat_ID = `-924847416`
const token = `6102998931:AAFwi6UXLX64EeRoPHtDFxCouJkF8CtKmq0`
const uriApi = `https://api.telegram.org/bot${token}/sendMessage`


app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/sendMessage', async (req,res)=>{
    await req.body
    const {text}=req.body
    console.log(text)


    try{
       const response=await  axios.post(uriApi,{
        chat_id: chat_ID,
        text: text,
        parse_mode: 'HTML'
        })
        res.status(200).send('done')
        console.log(response.data)
    }
    

    catch(error){
        console.log(error)
    }
})



app.listen(port,()=>{
    console.log('server is listening')
})