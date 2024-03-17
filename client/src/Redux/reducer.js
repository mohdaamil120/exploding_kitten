import kittenImage from "../images/kitten1.jpg";
import defuseImage from "../images/difuse1.jpg";
import bamImage from "../images/bomb.jpg";


const initialState = {
    deck: [ { value: "Kitten", emoji: "😺", image: kittenImage, zIndex: 1 },
    { value: "Defuse", emoji: "💣", image: defuseImage, zIndex: 1 },
    { value: "Bam", emoji: "💥", image: bamImage, zIndex: 1 },],
    gameOver: false,
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };
  
  
  export default gameReducer;