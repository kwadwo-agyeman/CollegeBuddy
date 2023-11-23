import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ActivityCards from "./components/ActivityCards";
import { Stack } from "@mui/material";

function Profile() {
  const [cardArr, setCardArr] = React.useState([1]);
  const [cardDetails, setDetails] = React.useState([{ title: "", description: " " }]);
  const [title, setTitle] = React.useState([false]);
  const [description, setDescription] = React.useState([false]);

  const addCard = () => {
    setCardArr((prevCardArr) => [...prevCardArr, prevCardArr.length + 1]);
    setDetails((prevDetails) => [...prevDetails, { title: "", description: " " }]);
    setTitle((prevTitle) => [...prevTitle, false]);
    setDescription((prevDescription) => [...prevDescription, false]);
  };

  const deleteCard = (index) => {
    const updatedCardArr = [...cardArr];
    updatedCardArr.splice(index, 1);
    setCardArr(updatedCardArr);
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
