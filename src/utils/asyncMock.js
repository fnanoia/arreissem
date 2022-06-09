const asyncMock = (time, task) => {
    return new Promise((res) => {
        setTimeout(() =>{
            res(task)
        }, time)
     })
}

export default asyncMock;