const users = [];



const addUser = function(id, username, roomname){

    
    // is there is no username and roomname
    
    if(!username || !roomname){
       
        return {
            error: "Username And Roomname Are Required!"
        }
        
    }
    
    // If username and roomname  is already exist
    const existingUser = users.find((user)=>{

        return (user.username === username && user.roomname === roomname);
    })
    
    if (existingUser){
        return {
            error: "username is in use"
        }
    }
    
    const user = {id, username, roomname}
    users.push(user)
    return {user}
}




const removeUser =  function(id){
    const index = users.findIndex((user) =>{ user.id === id})

    // -1 hua  toh match ni hua

    if(index !== -1){
      return  users.splice(index, 1)[0]
    }

}

const getUser = function(id){
    return users.find((user)=>{user.id === id})
}

const getUserInRoom = function(roomname){
    // roomname = roomname.toLowercase().trim()
    return users.filter((user) =>{user.roomname === roomname})
}



module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}