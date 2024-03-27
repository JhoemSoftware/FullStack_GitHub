export const formatDateMember = (dateInput = '') => {
    const options = {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }
    return new Date(dateInput).toLocaleDateString('es-CO', options);
}

export const validateLanguage = (lang) => {
	const listImages = ['javascript','php','python','c','c++','csharp','css','html','go','java','swift','vue','typescript','shell', 'rust'];

    if(lang === null) lang = 'code'
    
    //console.log(lang)
    
    if(lang === 'C#') lang = 'csharp'
    
    lang = lang.toLowerCase();

    if(!listImages.includes(lang)) lang = 'code'
    
    return `./${lang}.svg`;
}