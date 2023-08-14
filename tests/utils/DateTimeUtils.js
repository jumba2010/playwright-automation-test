const formatDate =(date) =>{
    let day = String(date.getDate()).padStart(2, '0');
    let month = date.toLocaleString('default', { month: 'long' });
    let year = date.getFullYear();

    return `${day} ${month} ${year}`
  
}

  module.exports={formatDate }