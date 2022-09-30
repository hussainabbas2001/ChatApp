// Helpers Function

const generateMessage = function(text){
    return{
    text: text,
    createdAt: new Date().getTime()
    }};
    
const generateLocationMessage = function(url){
    return{
    url: url,
    createdAt: new Date().getTime()
    }};
    
    
    
    module.exports = {
    generateMessage,
    generateLocationMessage
    }