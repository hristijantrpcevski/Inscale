import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import User from "./User/User";
import { getAllUsers } from "../../Redux/Actions/users";
import { CircularProgress, Typography } from "@material-ui/core";
import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api";

interface Props {}
const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 50.3851,
  lng: 10.1734,
};
const Users: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.usersReducer.users);
  const loadingUsers = useSelector((state: any) => state.usersReducer.loading);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const onSelectUser = (user: any) => {
    setSelectedUser(user);
  };
  const showInformation = (info: any, name: string) => {
    return info && info.length > 0 ? (
      <Typography>
        <strong>{name}</strong> {info}
      </Typography>
    ) : null;
  };
  return (
    <Container>
      {loadingUsers ? (
        <Spinner>
          <CircularProgress />
        </Spinner>
      ) : (
        <LoadScript googleMapsApiKey="AIzaSyDhslsCNo7ykPML8NNSNdyodynrubTN__I">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={5}
            center={defaultCenter}
          >
            {users.map((user: any) => (
              <User user={user} key={user.id} onSelectUser={onSelectUser} />
            ))}
            {selectedUser && (
              <InfoWindow
                position={selectedUser.position}
                onCloseClick={() => onSelectUser(null)}
              >
                <div>
                  {selectedUser.company.logoPath ? (
                    <Typography>
                      <img
                        src={selectedUser.company.logoPath}
                        alt="Logo"
                        width="50"
                      />
                    </Typography>
                  ) : null}
                  {showInformation(selectedUser.company.name, "Company name:")}
                  {showInformation(
                    selectedUser.company.translatedUserType,
                    "User Type:"
                  )}
                  {showInformation(
                    selectedUser.company.agricultureTypes,
                    "Agriculture Types:"
                  )}
                  {showInformation(
                    selectedUser.company.productionTypes,
                    "Production Types:"
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </Container>
  );
};
const Spinner = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  padding: 0 20px;
`;
export default Users;
