import APIWrapper from "../../../api/APIWrapper";
// Obtiene los datos y los guarda en la variable 'getCotizaciones'
export const getCotizaciones = async () => await APIWrapper.get("cotizaciones");
