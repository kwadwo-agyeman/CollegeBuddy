import React, { useEffect } from "react";
import { useState } from "react";
import Navbar2 from "./components/Navbar2";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ActivityCards from "./components/ActivityCards";
import { Stack } from "@mui/material";

function Profile(props) {
  const [cardArr, setCardArr] = React.useState([]);
  const [cardDetails, setCardDetails] = React.useState([
    { title: "", description: "" },
  ]);
  const [title, setTitle] = React.useState([false]);
  const [description, setDescription] = React.useState([false]);
  // HANDLE OPEN AND CLOSE OF THE CARD
  const [modalStates, setModalStates] = React.useState(
    cardArr.map(() => false)
  );

  const [formData, setFormData] = useState(
    cardArr.map(() => ({
      organization: "",
      position: "",
      activityDesc: "",
    }))
  );

  //HANDLE FORM VALUE CHANGE
  function handleFormValueChange(e, index) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const SelectedFormData = [...prevFormData];
      SelectedFormData[index] = { ...SelectedFormData[index], [name]: value };
      return SelectedFormData;
    });
  }

  // Function to handle opening a specific card's modal
  const handleOpenModal = (index) => {
    // Create a copy of modalStates and set the modal at the specified index to open
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = true;
    setModalStates(updatedModalStates);

  };

  // Function to handle closing a specific card's modal
  const handleCloseModal = (index) => {
    // Create a copy of modalStates and set the modal at the specified index to close
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = false;
    setModalStates(updatedModalStates);
  };


  // Load data from Local Storage on component mount
  useEffect(() => {
    const storedCardArr = localStorage.getItem("cardArr");
    const storedCardDetails = localStorage.getItem("cardDetails");
    const storedTitleStat = localStorage.getItem("titleStat");
    const storedDescriptionStat = localStorage.getItem("descriptionStat");
    if (storedCardArr) {
      setCardArr(JSON.parse(storedCardArr));
    }

    if (storedCardDetails) {
      setCardDetails(JSON.parse(storedCardDetails));
    }
    if (storedTitleStat) {
      setTitle(JSON.parse(storedTitleStat));
    }
    if (storedDescriptionStat) {
      setDescription(JSON.parse(storedDescriptionStat));
    }
    
  }, []);

  const updateLocalStorage = () => {
    // Save data to Local Storage whenever it changes
    localStorage.setItem("cardArr", JSON.stringify(cardArr));
    localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
    localStorage.setItem("titleStat", JSON.stringify(title));
    localStorage.setItem("descriptionStat", JSON.stringify(description));
  };

  const addCard = () => {
    setCardArr((prevCardArr) => [...prevCardArr, prevCardArr.length + 1]);
    setCardDetails((prevDetails) => [
      ...prevDetails,
      { title: "", description: "" },
    ]);
    setTitle((prevTitle) => [...prevTitle, false]);
    setDescription((prevDescription) => [...prevDescription, false]);

    // Update Local Storage after adding a card
    updateLocalStorage();
  };

  const deleteCard = (index) => {
    // Create a copy of cardArr and cardDetails without the deleted card
    const updatedCardArr = cardArr.filter((_, i) => i !== index);
    const updatedCardDetails = cardDetails.filter((_, i) => i !== index);
    const updateTitleStat = title.filter((_, i) => i !== index);
    const updateDescriptionStat = description.filter((_, i) => i !== index);
  
    // Update Local Storage after deleting a card
    localStorage.setItem("cardDetails", JSON.stringify(updatedCardDetails));
    localStorage.setItem("cardArr", JSON.stringify(updatedCardArr));
    localStorage.setItem("titleStat", JSON.stringify(updateTitleStat));
    localStorage.setItem(
      "descriptionStat",
      JSON.stringify(updateDescriptionStat)
    );

    // Update the state with the new arrays
    setCardArr(updatedCardArr);
    setCardDetails(updatedCardDetails);
    setTitle(updateTitleStat);
    setDescription(updateDescriptionStat);
  };

  const handleCardEdits = (e, index) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => {
      const newDetailsArr = [...prevDetails];
      newDetailsArr[index] = { ...newDetailsArr[index], [name]: value };
      return newDetailsArr;
    });

    // Update Local Storage after editing card details
    updateLocalStorage();
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

    // Update Local Storage after changing description status
    updateLocalStorage();
  };

  return (
    <div>
      <Navbar2 profPic={ props.selectedFile}/>
      <Stack direction="row" spacing={{xs: 1.4, sm: 2}}>
        <Sidebar addCard={addCard} />
        <ActivityCards
          cardArr={cardArr}
          handleCardEdits={handleCardEdits}
          handleTitleStatus={handleTitleStatus}
          handleDescriptionStatus={handleDescriptionStatus}
          title={title}
          cardDetails={cardDetails}
          description={description}
          formData={formData}
          addCard={addCard}
          deleteCard={deleteCard}
          handleFormValueChange={handleFormValueChange}
      
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          modalStates={modalStates}
        />
      </Stack>
      <Footer/>
    </div>
  );
}

export default Profile;
