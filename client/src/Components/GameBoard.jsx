
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import commonImage from "../images/back.jpg";
import kittenImage from "../images/kitten1.jpg";
import defuseImage from "../images/difuse1.jpg";
import bamImage from "../images/bomb.jpg";
import shuffleImage from "../images/shuffle.jpg";


const GameBoard = () => {
  
  const [cards, setCards] = useState([
    { value: "Kitten", emoji: "😺", image: kittenImage, zIndex: 1 },
    { value: "Defuse", emoji: "💣", image: defuseImage, zIndex: 1 },
    { value: "Bam", emoji: "💥", image: bamImage, zIndex: 1 },
    { value: "shuffle", emoji: "", image: shuffleImage, zIndex: 1 },
  ]);

  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const [points, setPoints] = useState(0);

  const handleStartGame = () => {
   
    setPoints(0);
    let shuffeldCards = [
      { id:1, value: "Kitten", emoji: "😺", image: kittenImage, zIndex: 1 },
      { id:2, value: "Defuse", emoji: "💣", image: defuseImage, zIndex: 1 },
      { id:3, value: "Bam", emoji: "💥", image: bamImage, zIndex: 1 },
      { id:4, value: "shuffle", emoji: "", image: shuffleImage, zIndex: 1 },
    ]
    shuffeldCards = shuffeldCards.sort(() => Math.random() - 0.5); // Make a copy and shuffle
    setCards(shuffeldCards);
  };
  




  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmitUsername = () => {
    
  };

  


  const handleDivClick = (id) => {
    // Check the value of the clicked card
    const clickedCard = cards.find((card) => card.value === id);
    if (clickedCard) {
      if (clickedCard) {
        if (clickedCard.value === "Kitten") {
          setPoints((prevPoints) => prevPoints + 1);
        } 
        else if (clickedCard.value === "Defuse") {
          setPoints((prevPoints) => prevPoints + 1);
          setCards((prevCards) => prevCards.filter((card) => card.id !== id));
        }
         else if (clickedCard.value === "Bam") {
          handleStartGame();
        } 
        else if (clickedCard.value === "shuffle") {
          handleStartGame();
        }
      }
    }
  
    // Update z-index of clicked card
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.value === id) {
          return { ...card, zIndex: 3 };
        } else {
          return { ...card, zIndex: Math.max(card.zIndex - 1, 1) };
        }
      })
    );
  
    // Hide clicked card after 2 seconds
   let ID= setTimeout(() => {
      setCards((prevCards) => prevCards.filter((card) => card.value !== id));
    }, 2000);
  };
  


  return (
    <Container>
    <CardContainer>
      {cards.map((card,ind) => (
        <Card  key={card.value} onClick={() => handleDivClick(card.value)}>
          <CardImage
            src={card.image}
            alt={card.value}
            style={{ zIndex: card.zIndex }}
          />
          {card.zIndex === 1 && (
            <CommonImage src={commonImage} alt="Common Image" />
          )}
        </Card>
      ))}
    </CardContainer>
    <Button onClick={handleStartGame}>Start New Game</Button>
      <Points>Points: {points}</Points> 
    </Container>
  );


};

export default GameBoard;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const CardContainer = styled.div`
  display: flex;
  
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommonImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s ease;
`;


const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Points = styled.div`
  margin-top: 20px;
`;