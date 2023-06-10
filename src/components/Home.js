

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import db from "../firebase";
import { setMovies } from "../features/Movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import Footer from "./Footer";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const recommends = useRef([]);
  const newDisneys = useRef([]);
  const originals = useRef([]);
  const trending = useRef([]);

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends.current);
        switch (doc.data().type) {
          case "recommend":
            recommends.current = [...recommends.current, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys.current = [...newDisneys.current, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals.current = [...originals.current, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending.current = [...trending.current, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
        return null;
      });

      dispatch(
        setMovies({
          recommend: recommends.current,
          newDisney: newDisneys.current,
          original: originals.current,
          trending: trending.current,
        })
      );
    });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;


