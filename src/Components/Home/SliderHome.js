import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/clip-art-portable-network-graphics-palm-trees-image-transparency-png-favpng-QGGSuu1FE1p19Z7UeQmhMnnnT.jpg";
import Trend from "./Slider.module.css";
import { getallproducts } from '../../Redux/Slices/ProductSlice'
import { useDispatch } from "react-redux";


function SliderHome() {
  const { product } = useSelector((state) => state.ProductSlice);
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setArr(product);
  // }, [product]);

  useEffect(() => {
    dispatch(getallproducts())
      .then((result) => {
        setArr([...result.payload]);
        console.log('inhome', arr);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);
  const api = "http://localhost:3500/";

  // 
  const [isImgExpanded, setIsImgExpanded] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMoreOpened, setIsMoreOpened] = useState(false);
  const [isPopularOpened, setIsPopularOpened] = useState(false);

  const handleMenuBtnClick = () => {
    setIsImgExpanded(!isImgExpanded);
    setIsMenuOpened(!isMenuOpened);
    setIsMoreOpened(!isMoreOpened);
    document.querySelectorAll(".card").forEach((item) => {
      item.classList.toggle("opened");
    });
    setIsPopularOpened(false);
  };

  console.log(arr);
  return (
    <div className={Trend.profile_card}>
      <div className={Trend.wrapper}>
        <div className={Trend.outer}>
          {
            arr && arr.map((item, index) => (
              // console.log(1+index),
              <div className={`${Trend.card} ${isImgExpanded ? "img-expand" : ""} ${isMenuOpened ? "opened" : ""}`} style={{'--delay':`-${index}`}}>
                <div className={Trend.content}>
                  <div className={Trend.img}>
                    <img src={`${api}${item.imageUrl}`} alt="" />
                  </div>
                <div className={Trend.a}>
                  <h4> اسم المنتج : <span>{item.name}</span> </h4>
                  <h5> السعر : <span>{item.price}</span> </h5>
                  <h5>النوع :  <span>{item.category}</span> </h5>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default SliderHome

