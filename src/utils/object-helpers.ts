export const updateObjectInArray = (items:any[], objPropName:string, itemsId: string, newObjProps:any ) => {
  return items.map(el => {
    if (el[objPropName] === itemsId) {
      return { ...el, ...newObjProps };
    }
    return el;
  });
};
