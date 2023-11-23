import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ActivityCards from "./components/ActivityCards";
import { Stack } from "@mui/material";

function Profile() {
  const [cardArr, setCardArr] = React.useState([1]);
  const [cardDetails, setDetails] = React.useState([
    { title: "", description: "" },
  ]);
  const [title, setTitle] = React.useState([false]);
  const [description, setDescription] = React.useState([false]);
const [check,setCheck] = React.useState()
  // Load data from Local Storage on component mount
  useEffect(() => {
    setupCardsArr();
  }, [check]);

  const setupCardsArr = () => {
    const storedCardArr = getCardsArr();
    localStorage.setItem("storedCardArr", JSON.stringify(storedCardArr));
    setCardArr(storedCardArr);
  };

  const getCardsArr = () => {
    return localStorage.getItem("storedCardArr")
      ? JSON.parse(localStorage.getItem("storedCardArr"))
      : cardArr;
  };

  const addCard = () => {
    setCardArr((prevCardArr) => [...prevCardArr, prevCardArr.length + 1]);
    setDetails((prevDetails) => [
      ...prevDetails,
      { title: "", description: "" },
    ]);
    setTitle((prevTitle) => [...prevTitle, false]);
    setDescription((prevDescription) => [...prevDescription, false]);
    setCheck(!check)
  };
  const deleteCard = (index) => {
    const updatedCardArr = [...cardArr];
    updatedCardArr.splice(index, 1);
    setCardArr(updatedCardArr);

    // Update Local Storage after deleting a card
  };

  const handleCardEdits = (e, index) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      const newDetailsArr = [...prevDetails];
      newDetailsArr[index] = { ...newDetailsArr[index], [name]: value };
      return newDetailsArr;
    });
  };

  const handleTitleStatus = (index) => {
    setTitle((prevTitleStat) => {
      const newTitleStat = [...prevTitleStat];
      newTitleStat[index] = !newTitleStat[index];
      return newTitleStat;
    });

    // Update Local Storage after changing title status
    updateLocalStorage();
  };

  const handleDescriptionStatus = (index) => {
    setDescription((prevDescriptionStat) => {
      const newDescriptionStat = [...prevDescriptionStat];
      newDescriptionStat[index] = !newDescriptionStat[index];
      return newDescriptionStat;
    });
  };

  return (
    <div>
      <Navbar />
      <Stack direction="row" spacing={3}>
        <Sidebar addCard={addCard} />
        <ActivityCards
          cardArr={cardArr}
          handleCardEdits={handleCardEdits}
          handleTitleStatus={handleTitleStatus}
          handleDescriptionStatus={handleDescriptionStatus}
          title={title}
          cardDetails={cardDetails}
          description={description}
          addCard={addCard}
          deleteCard={deleteCard}
        />
      </Stack>
    </div>
  );
}

export default Profile;
