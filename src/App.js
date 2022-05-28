import React, { useEffect } from "react";
import "./App.css";
import { getNASAPictures } from "./NasaAPI";
import SelectOptions from "./Select"
import Card from "react-bootstrap/Card";
import ImageCard from './ImageCard';
require('dotenv').config()

function App() {

  const [pictures, updatePictures] = React.useState(null);
  const [picturesCopy, updatePicturesCopy] = React.useState(null);

  const options = [
    { value: '-7', label: 'Last week' },
    { value: '-14', label: 'Last two weeks' },
    { value: '-30', label: 'Last month' }
  ]

  useEffect(() => {
    if (!pictures) {
      const startDate = new Date("2022-05-01T08:28:41.917Z");
      const endDate = new Date();
      getNASAPictures(startDate, endDate).then((res) => {

        res = res.filter( function (value) {
          return value.media_type === 'image';
        })

        updatePictures(res);
        updatePicturesCopy(res);
      });
    }
  }, [pictures]);

  // Hangle Change when select any date
  const handleChange = (e) =>{

    // check if pictures is found
    if (pictures) {

      // date now
      var days_last = new Date();

      // date now - selected option
      days_last.setDate(days_last.getDate() + parseInt(e.value));

      // let's filter
      let picturesData = pictures.filter(function (picture) {
        return new Date(picture.date) >= days_last;
      })

      // update state
      updatePicturesCopy(picturesData)
    }else{
      // if data not found
      console.log('please wait a few moments')
    }
  }

  return (
    <div className="App">
      <div className="container mt-5">
       <Card>
          <Card.Body className="col-md-12 row">
            <div className="col-md-9 pull-left"> 
            </div>
            <div className="col-md-3">  
              <SelectOptions options={options} handleChange={handleChange} />
            </div> 
          </Card.Body>
        </Card>

        <div className="row mt-3">

          {picturesCopy && picturesCopy.map((picture , i) =>
          
          <div key={i} className="col-md-4">
              <ImageCard picture={picture}/>
          </div>

          )}
       </div>
      </div>
    </div>
  );
}

export default App;
