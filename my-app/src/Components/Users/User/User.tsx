import React from "react";
import { Marker } from "@react-google-maps/api";
import { UserType } from "../../../Types/types";

interface UserProps {
  user: UserType;
  onSelectUser: (user: UserType) => void;
}

const User: React.FC<UserProps> = ({ user, onSelectUser }) => {
  const { id, position, listingsCount } = user;

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
