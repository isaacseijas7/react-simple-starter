/**
 * Genera un número aleatorio, lo convierte en una cadena hexadecimal y luego devuelve esa cadena
 * @returns Una función que devuelve una cadena.
 */
export const uuidv4 = () => {
  return "x4xyy".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16).toUpperCase();
  });
};

/**
 * Toma una matriz de objetos y devuelve una matriz de objetos con duplicados eliminados
 * @param originalArray - La matriz de la que desea eliminar los duplicados.
 * @param prop - La propiedad de la matriz de la que desea eliminar los duplicados.
 * @returns Una matriz de objetos con valores únicos para la propiedad que se pasa.
 */
export const removeDuplicates = (originalArray, prop) => {
  let newArray = [];
  let lookupObject = {};
  for (let key in originalArray) {
    lookupObject[originalArray[key][prop]] = originalArray[key];
  }
  for (let key in lookupObject) {
    newArray.push(lookupObject[key]);
  }
  return newArray;
};

/**
 * Toma una matriz de objetos, una cadena de búsqueda y una clave o matriz de claves para buscar, y
 * devuelve una matriz de objetos que coinciden con la cadena de búsqueda.
 * @param element - El elemento a buscar
 * @param searchRegExp - La expresión regular que se usará para hacer coincidir la cadena de búsqueda.
 * @param keyObj - Esta es la clave que desea buscar. Puede ser una cadena o una matriz de cadenas.
 * @param search - La cadena de búsqueda
 * @returns Una matriz de objetos que coinciden con los criterios de búsqueda.
 */
const matchKey = (element, searchRegExp, keyObj, search) => {
  let results = [];
  if (!Array.isArray(keyObj)) {
    const $search = `${element[`${keyObj}`]}`.slice(0, search.length);
    let result = $search.match(searchRegExp);
    if (result) {
      results.push(element);
    }
  } else {
    for (const key of keyObj) {
      if (Object.prototype.hasOwnProperty.call(element, key)) {
        const $search =
          key === "id"
            ? `${element[key]}`.slice(0, search.length)
            : `${element[key]}`;
        let result = $search.match(searchRegExp);
        if (result) {
          results.push(element);
        }
      }
    }
  }

  results = removeDuplicates(results, "_id");
  return results;
};

/**
 * Toma una matriz de objetos, una cadena de búsqueda y una clave para buscar, y devuelve una matriz de
 * objetos que coinciden con la cadena de búsqueda.
 * @param [myArray] - La matriz de objetos en los que desea buscar.
 * @param [search] - La cadena de búsqueda
 * @param [keyObj] - La clave del objeto en el que desea buscar.
 */
export const searchInArrayObject = (myArray = [], search = "", keyObj = "") => {
  let results = [];
  const gt = search.split(" ");
  let expresion = "";
  gt.map((datos) => {
    expresion += `^(?=.*${datos})`;
    return expresion;
  });
  const searchRegExp = new RegExp(expresion);

  for (const key in myArray) {
    if (Object.prototype.hasOwnProperty.call(myArray, key)) {
      const element = myArray[key];
      const matchs = matchKey(element, searchRegExp, keyObj, search);
      if (matchs && matchs.length > 0) {
        results = results.concat(matchs);
      }
    }
  }

  return results;
};
