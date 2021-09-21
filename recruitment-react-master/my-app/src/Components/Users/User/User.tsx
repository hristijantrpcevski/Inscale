import React from "react";

import { Marker } from "@react-google-maps/api";

interface UserProps {
  user: any;
}

const User: React.FC<UserProps> = ({ user }) => {
  //   console.log(user, "USER");

  return <Marker key={user.id} position={user.position} />;
};

export default User;
