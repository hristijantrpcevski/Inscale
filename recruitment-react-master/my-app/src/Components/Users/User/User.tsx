import React from "react";
import { Marker } from "@react-google-maps/api";

interface UserProps {
  user: any;
  onSelectUser: (user: any) => void;
}

const User: React.FC<UserProps> = ({ user, onSelectUser }) => {
  const { id, position, listingsCount, userTypeIdentifier, primaryTradeType } =
    user;

  return (
    <Marker
      key={id}
      position={position}
      label={listingsCount.toString()}
      onClick={() => onSelectUser(user)}
    />
  );
};

export default User;
