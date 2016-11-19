export class AppSettings { 
public static get API_URL():string {   
  
   return "hhhh";
}
}
export class ApiUrl{
    DEV:string;
    STAGE:string;
    LIVE:string; 
}

//objectToParams(params)

/**
 * Converts an object to a parametrised string.
 * @param object
 * @returns {string}
 */
export function objectToParams(object): string {
    console.log("object",object);
    return Object.keys(object).map((key) => (typeof (object[key]) === "object") ?
        subObjectToParams(encodeURIComponent(key), object[key]) :
        `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
    ).join('&');
}

/**
 * Converts a sub-object to a parametrised string.
 * @param object
 * @returns {string}
 */
function subObjectToParams(key, object): string {
    return Object.keys(object).map((childKey) => (typeof (object[childKey]) === "object")  ?
            subObjectToParams(`${key}[${encodeURIComponent(childKey)}]`, object[childKey]) :
            `${key}[${encodeURIComponent(childKey)}]=${encodeURIComponent(object[childKey])}`
    ).join('&');
}
