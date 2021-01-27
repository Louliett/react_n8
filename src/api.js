export const getProducts=()=>{fetch('http://localhost:3000/db/items_old.json')
    .then(res => res.json())
    .then((result) => {
        return result['items']

    }, (error) => {
        console.log('error fetching items',error)
    })}