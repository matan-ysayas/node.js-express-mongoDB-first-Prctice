const basic_url='http://localhost:9000/office'
export const getAllEmployees=()=>{
    return fetch(basic_url)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}