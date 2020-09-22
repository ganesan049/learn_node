function validateName(name){
    if(!name){
        return false;
    }
    return true;
}

module.exports = {validateName}