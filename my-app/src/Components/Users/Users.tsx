import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import User from "./User/User";
import { getAllUsers } from "../../Redux/Actions/users";
import { CircularProgress, Typography } from "@material-ui/core";
import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api";
import { UserType } from "../../Types/types";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 50.3851,
  lng: 10.1734,
};
const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(
    (state: RootStateOrAny) => state.usersReducer.users
  );
  const loadingUsers = useSelector(
    (state: RootStateOrAny) => state.usersReducer.loading
  );
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const onSelectUser = (user: UserType | null) => {
    setSelectedUser(user);
  };
  const showInformation = (info: string | string[], name: string) => {
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
