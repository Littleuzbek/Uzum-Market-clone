export const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const localData = window.localStorage.getItem(key);

  return { localData };
};

export const WishHandler = (product) =>{
  const {localData: wishes} = getItem('wishes');
  const existingWish = JSON.parse(wishes)?.find(wish => wish.id === product.id);

  if(wishes){
    if(existingWish){
      const filteredWishes = JSON.parse(wishes).filter(wish => wish.id !== product.id);

      setItem('wishes', filteredWishes);
    }else{
      const updatedWishes = JSON.parse(wishes);

      setItem('wishes', [...updatedWishes, product])
    }

  }else{
    setItem('wishes', [product]);
  }
}