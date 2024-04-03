const { default: axios } = require("axios")
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU0MDYzLCJpYXQiOjE3MTIxNTM3NjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNkNGVmYTI3LWE5NTQtNGJhZS05MmY5LTcxMzdhZGVlNWQzYyIsInN1YiI6ImtzOTI3NEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiTXljYXJ0IiwiY2xpZW50SUQiOiJjZDRlZmEyNy1hOTU0LTRiYWUtOTJmOS03MTM3YWRlZTVkM2MiLCJjbGllbnRTZWNyZXQiOiJ3SlNwYm9sSGNURFhubWNNIiwib3duZXJOYW1lIjoiS2F1c3R1YmggU2hhdGRoYXIiLCJvd25lckVtYWlsIjoia3M5Mjc0QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMjgwMTAwOTMifQ.6uQMw81W3XwTLMat5ocMALpre99XPm-P-qEvBESPCjs"
const headers = {
    'Authorization': `Bearer ${token}`
  };

  const windowprevstate= []
  const windowcurrstate = []
exports.getnumbers = async(req,res,next)=>{
    try{
    if(req.params.numberid==='p'){
        windowprevstate = windowcurrstate
        var response
        try{
            response = await axios.get('http://20.244.56.144/test/primes',{headers})
        }catch(e){
            console.log(e.message)
            const postdata = {
                companyName: "Mycart",
                clientID: "cd4efa27-a954-4bae-92f9-7137adee5d3c",
                clientSecret: "wJSpbolHcTDXnmcM",
                ownerName: "Kaustubh Shatdhar",
                ownerEmail: "ks9274@srmist.edu.in",
                rollNo: "RA2111028010093"
            }
            const resp1 = await axios.post('http://20.244.56.144/test/auth',postdata)
            token = resp1.access_token
            response = await axios.get('http://20.244.56.144/test/primes',{headers})

        }
        const number = response.data.numbers
        const numberset = new Set()
        console.log(response)
        for(let i =0;i<number.length;i++){
            numberset.add(number[i])

        }

        const numberarray = []

        for(let i of numberset){
            numberarray.push(i)
        }
        windowcurrstate = windowprevstate
        for(let i=0;i<numberarray.length;i++){
            if(windowcurrstate.length>10){
                windowcurrstate.shift()
            }
            windowcurrstate.push(numberarray[i])
        }
        res.status(200).json({
            numbers:numberarray,
            windowcurrstate,
            windowprevstate
                      
        })
    }else if(req.params.numberid==='even'){
        windowprevstate = windowcurrstate
        var response
        try{
            response = await axios.get('http://20.244.56.144/test/even',{headers})
        }catch(e){
            console.log(e.message)
            const postdata = {
                companyName: "Mycart",
                clientID: "cd4efa27-a954-4bae-92f9-7137adee5d3c",
                clientSecret: "wJSpbolHcTDXnmcM",
                ownerName: "Kaustubh Shatdhar",
                ownerEmail: "ks9274@srmist.edu.in",
                rollNo: "RA2111028010093"
            }
            const resp1 = await axios.post('http://20.244.56.144/test/auth',postdata)
            token = resp1.access_token
            response = await axios.get('http://20.244.56.144/test/primes',{headers})

        }
        const number = response.data.numbers
        const numberset = new Set()
        console.log(response)
        for(let i =0;i<number.length;i++){
            numberset.add(number[i])

        }

        const numberarray = []

        for(let i of numberset){
            numberarray.push(i)
        }
        windowcurrstate = windowprevstate
        for(let i=0;i<numberarray.length;i++){
            if(windowcurrstate.length>10){
                windowcurrstate.shift()
            }
            windowcurrstate.push(numberarray[i])
        }
        res.status(200).json({
            numbers:numberarray,
            windowcurrstate,
            windowprevstate
                      
        })
    }else{
        windowprevstate = windowcurrstate
        var response
        try{
            response = await axios.get('http://20.244.56.144/test/rand',{headers})
        }catch(e){
            console.log(e.message)
            const postdata = {
                companyName: "Mycart",
                clientID: "cd4efa27-a954-4bae-92f9-7137adee5d3c",
                clientSecret: "wJSpbolHcTDXnmcM",
                ownerName: "Kaustubh Shatdhar",
                ownerEmail: "ks9274@srmist.edu.in",
                rollNo: "RA2111028010093"
            }
            const resp1 = await axios.post('http://20.244.56.144/test/auth',postdata)
            token = resp1.access_token
            response = await axios.get('http://20.244.56.144/test/primes',{headers})

        }
        const number = response.data.numbers
        const numberset = new Set()
        console.log(response)
        for(let i =0;i<number.length;i++){
            numberset.add(number[i])

        }

        const numberarray = []

        for(let i of numberset){
            numberarray.push(i)
        }
        windowcurrstate = windowprevstate
        for(let i=0;i<numberarray.length;i++){
            if(windowcurrstate.length>10){
                windowcurrstate.shift()
            }
            windowcurrstate.push(numberarray[i])
        }
        res.status(200).json({
            numbers:numberarray,
            windowcurrstate,
            windowprevstate
                      
        })
    }
    }catch(e){
        console.log(e.message)
        res.status(404).json({
            message:'fail'
        })
    }

    
}