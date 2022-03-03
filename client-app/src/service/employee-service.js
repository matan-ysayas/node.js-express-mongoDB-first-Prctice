const basic_url= process.env.NODE_ENV==='production'?
'https://my-office-app.herokuapp.com/office':
'http://localhost:9000/office';
;
export const getAllEmployees=()=>{
    return fetch(basic_url)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}