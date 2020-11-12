const Data = ( )=>{
    //1、根据接口，获取商品数据
    return (dispatch)=>{
        let url = `https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist`;
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'Add_list',
                    datalist: res.data
                })
            })
    }
}

export {Data}