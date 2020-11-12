
function list(){
    let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist';
    fetch(url)
    .then(res=>res.json())
    .then(res=>console.log(res.data))
}

export default list;