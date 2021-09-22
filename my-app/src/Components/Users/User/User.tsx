import React from "react";
import { Marker } from "@react-google-maps/api";
import { UserType } from "../../../Types/types";
import BlackPin from "../../../Pins/pin-black.png";
import BluePin from "../../../Pins/pin-blue.png";
import YellowPin from "../../../Pins/pin-yellow.png";
import OrangePin from "../../../Pins/pin-orange.png";
import GreyPin from "../../../Pins/pin-grey.png";
import GreenPin from "../../../Pins/pin-green.png";

interface UserProps {
  user: UserType;
  onSelectUser: (user: UserType) => void;
}

const User: React.FC<UserProps> = ({ user, onSelectUser }) => {
  const { id, position, listingsCount, userTypeIdentifier, primaryTradeType } =
    user;

  let pin: string = "";

  if (userTypeIdentifier === "farmer") {
    if (primaryTradeType === "buyer") {
      pin = GreenPin;
    } else if (primaryTradeType === "seller") {
      pin = YellowPin;
    } else {
      pin = GreyPin;
    }
  }
  if (userTypeIdentifier === "trading_house") pin = BluePin;
  if (userTypeIdentifier === "advisor") pin = BlackPin;
  if (userTypeIdentifier === "mill") pin = OrangePin;

  return (
    <Marker
      key={id}
      position={position}
      onClick={() => onSelectUser(user)}
      options={{
        label: {
          text: listingsCount.toString(),
          color: pin === BlackPin ? "white" : "",
          fontSize: "20px",
          fontWeight: "bold",
        },
      }}
      icon={{
        url: pin,
        scaledSize: new window.google.maps.Size(30, 30),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(20, 20),
      }}
    />
  );
};

export default User;
