export const handleItemNavBar=(value): string=>{
    const arr = JSON.parse(value);
    if( arr[0].title === 'Home'){
      return arr[0].title=''
    }
    return arr[0].title;
}

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
