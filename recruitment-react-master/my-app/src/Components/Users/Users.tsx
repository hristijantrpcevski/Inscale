import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import User from "./User/User";
import { getAllUsers } from "../../Redux/Actions/users";
import { CircularProgress } from "@material-ui/core";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface Props {}
const Users: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.usersReducer.users);
  const loadingUsers = useSelector((state: any) => state.usersReducer.loading);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 50.3851,
    lng: 10.1734,
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
              <User user={user} />
            ))}
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
