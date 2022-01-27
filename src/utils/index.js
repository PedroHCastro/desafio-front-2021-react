const objMonth = {
    
} 

export const formatDate = (dateString) => {
    const partsDate = dateString.split("-");
    const formatedDate = `${partsDate[2]} de ${partsDate[1]}, ${partsDate[0]}`;
    
    return formatedDate;
}