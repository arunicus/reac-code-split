export default function getInventions({},{observer}){
    fetch('./inventions.json')
    .then(response => {
        response.json().then(data => {
            console.log(data);
            if(!data.length){
                observer.noData()
            } else {
                observer.success(data)
            }
        })        
    })
    .catch(err => {
        observer.error()
    })
}