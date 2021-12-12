import React, {useEffect, useState} from "react";
import './Event.css'
import {HiUser, MdGrade, MdVerified, SiPytorchlightning, AiFillEye, AiFillStar} from "react-icons/all";
import {useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import Geocode from "react-geocode";
import { Rating } from 'react-simple-star-rating'

const Event = ({navbarLightMode}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);
  let eventId = useParams();
  console.log(eventId);//http://localhost:8080/event/id-search?eventID=61b4fe8eb6529a4b5b8e44e9
  const[socialEvent, setSocialEvent] = useState();
  const[user, setUser] = useState();
  // const getEvents = async () => {
  //   if (cookies.loggedInUserId != null) {
  //     await fetch("http://localhost:8080/event/id-search?eventID=" + eventId.id)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("aaaa")
  //         console.log(data);
  //         setSocialEvent(data)
  //         fetch("http://localhost:8080/user/findByID?id=" + data.userID)
  //           .then((response1) => response1.json())
  //           .then((data1) => setUser(data1))
  //       })
  //   }
  // }
  const[title1, setTitle1] = useState("");
  const[username1, setUsername1] = useState("");
  const[verified1, setVerified1] = useState(false);
  const[time1, setTime1] = useState();
  const[address1, setAddress1] = useState("");
  const[city1, setCity1] = useState("");
  const[userC, setUserC] = useState("");
  const[numInterested1, setNumInterested1] = useState(-1);
  const[views1, setViews1] = useState(0)
  const[grade1, setGrade1] = useState(0);
  const[LAT, setLAT] = useState(0);
  const[LNG, setLNG] = useState(0);
  useEffect(async ()=> {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/event/id-search?eventID=" + eventId.id)
        .then((response) => response.json())
        .then(async (data) => {
          console.log("aaaa")
          console.log(data);
          setTitle1(data.title)
          setTime1(data.time);
          setAddress1(data.address);
          setAddress1(data.address);
          setCity1(data.city);
          setNumInterested1(data.numI);
          setViews1(data.views);
          setSocialEvent(data);
          setUserC(data.userID);
          await fetch("http://localhost:8080/user/findByID?id=" + data.userID)
            .then((response1) => response1.json())
            .then(async (data1) => {
              setUsername1(data1.username);
              setVerified1(data1.verified);
              setGrade1(data1.grade);
              setUser(data1);
              gettingViewed(data1.id);
            })
        })
    }
  }, []);

  const OnClickInterested = () => {
    console.log("zainteresovan sam");
    //event/getting-interested?eventID={}&userID={} PUT
    //event/getting-viewed?eventID={}&user
  }

  const[interestedError, setInterestedError] = useState(false);
  const setInterested = async () => {
    if (socialEvent.userI.includes(user.id)) {
      setInterestedError(true);
      return
    }

    console.log();
    const result = await fetch( "http://localhost:8080/event/getting-interested?eventID=" + eventId.id + "&userID=" + user.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if(result.status === 200){
      //nesto
      setInterestedError(false);
      console.log("brrrrr aaa 200")
      setNumInterested1(numInterested1 + 1)
    } else if (result.status===403){
      //NESTO DRUGO
      setInterestedError(true);
      console.log("brrrrr 403")

    }
  }


  //PUT /user/add-points/
  /*
  body {
  userID
  eventID
  code: 51e22ceb2655
  }
   */
  const gettingViewed = async (userId) => {
    console.log();
    const result = await fetch( "http://localhost:8080/event/getting-viewed?eventID=" + eventId.id + "&userID=" + userId, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if(result.status === 200){
      //nesto
      console.log("brrrrr 200")
    } else if (result.status===403){
      //NESTO DRUGO
      console.log("brrrrr 403")

    }
  }

  const[code, setCode] = useState();
  const[codeError, setCodeError] = useState(false);

  const putCode = async (bodi) => {
    if (!socialEvent.userI.includes(user.id)) {
      setCodeError(true)
      return
    }
    console.log(bodi);
    const result = await fetch("http://localhost:8080/user/add-points", {
      method: "PUT",
      body: JSON.stringify({
        userID: bodi.userID,
        eventID: bodi.eventID,
        code: bodi.code,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if(result.status === 200){
      //nesto
      console.log("brrrrr asjdfojas 200")
      setCodeError(false)
    } else if (result.status===403){
      //NESTO DRUGO
      console.log("brrrrr asjdfojas 403")
      setCodeError(true);
    }
  }

  const onPutCode = () => {
    putCode({
      userID: user.id,
      eventID: socialEvent.id,
      code: code,
    })
  }
  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
          (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };

  Geocode.setLanguage("sr");
  Geocode.setRegion("RS");
  Geocode.setApiKey("AIzaSyAzw8QoREj--LVBNP9C-XXXdoIElLMEqko");
  Geocode.fromAddress(city1 + " " + address1).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLAT(lat);
        setLNG(lng);
      },
      (error) => {
        console.error(error);
      }
  );
  const points = [
    { id: 1, title: city1 + " " +address1, lat: LAT, lng: LNG}
  ];

  const oceni = async (ocena) => {
    const resp = await fetch( "http://localhost:8080/event/grade-organizer?userID=" + userC + "&ocena=" + ocena, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json());
  }

  const [rating, setRating] = useState(0) // initial rating value
  const handleRating = (rate: number) => {
    setRating(rate / 20);
    let ocena = rate / 20;
    console.log(ocena.toString());
    // let ocena = rate;
    oceni(ocena);
    // other logic
  }

  return (
    <div className={navbarLightMode ? 'event-container login-container form lightMode' : 'event-container login-container form'}>
      <div className={'container'}>
        <h2>{title1}</h2>
        <h3>{username1} <MdVerified className={verified1 ? 'small-icon' : 'small-icon dont'}/></h3>
        <p>{time1}</p>
        <p>{address1}, {city1}</p>
        <p>{views1} <AiFillEye className={'small-icon'}/></p>
        <p>{Math.round(grade1 * 10) / 10} <AiFillStar className={'small-icon'}></AiFillStar></p>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
        />
        <p>{numInterested1} korisnik/a je zainteresovano <SiPytorchlightning className={'small-icon'}/></p>
        <button className={'btn'} onClick={setInterested}>Zainteresovan sam</button>
        <p className={interestedError ? 'err active' : 'err'}>Vec ste zainteresovani</p>
        <input type={'text'} onChange={(event) => {
          setCode(event.target.value)
        }}/>
        <button className={'btn'} onClick={onPutCode}>KOD</button>
        <p className={codeError ? 'err active' : 'err'}>Kod nije validan</p>
        <div className={'map'}>
        <GoogleMapReact
            bootstrapURLKeys={{
              // remove the key if you want to fork
              key: "AIzaSyCbYGcB4JrQ-RngwulMk_LvHz7WOWdTjs8",
              language: "en",
              region: "RS"
            }}
            defaultCenter={{ lat: 44.7960922, lng: 20.4694964  }}
            defaultZoom={15}
            distanceToMouse={distanceToMouse}
        >
          {points.map(({ lat, lng, id, title }) => {
            return (
                <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
            );
          })}
        </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

export default Event