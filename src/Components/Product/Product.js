import React, { useEffect } from 'react'
import { useState } from 'react'
// import './Product.css'
import styles from './Product.module.css'
import ProdImg from '../../assets/images/istockphoto-1150425221-612x612.jpg'
import icon from "../../assets/images/ae82ddcb42f1cfb920a3e739a61aeb4f-removebg-preview.png";

// import icon from '../../assets/images/clip-art-portable-network-graphics-palm-trees-image-transparency-png-favpng-QGGSuu1FE1p19Z7UeQmhMnnnT.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getallproducts } from '../../Redux/Slices/ProductSlice'
import Productcard from './Productcard'
import { NavLink, useNavigate } from 'react-router-dom'

function Product() {

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.ProductSlice)
    let [arr, setarr] = useState([]);
    let [active, setactive] = useState(false);
    let [active2, setactive2] = useState(false);
    let [active3, setactive3] = useState(false);
    let [origin, setorigin] = useState([]);
    
    // let [num, setnum] = useState();
    // let x = 0;
    

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let nav = useNavigate();
    useEffect(() => {
        dispatch(getallproducts()).then((result) => {
            setarr([...result.payload]);

        }).catch((err) => {

        });
        // console.log(products);
        // setarr([...products]);
        console.log("kjj");
        setorigin(products);
        let role = localStorage.getItem("role");

        if (role === "user") {
            setIsLoggedIn(true);
        } else if (role === "farmer") {
            setIsLoggedIn(true);
        } else if (role === "engineer") {
            setIsLoggedIn(true);
        } else {

        }

    }, [])
    // useEffect(() => {
    //     dispatch(getallproducts());
    //     console.log(products);
    //     setarr([...products]);
    //     // console.log("kjj");
    //     // setorigin(products);


    // }, [products])
    console.log();
    function Filterbycatigory(category) {

        if (category === "") {
            setarr(products);
        }
        else {
            let newarr = products.filter((item) => item.category === category);
            setarr(newarr);
            console.log(newarr);
            return newarr;

        }
    }
    return (


        <section className={styles.Product}>
            <div className={styles.container}>
                <div className={styles['prod__header']}>
                    <img src={icon}
                        alt="" />
                    <h2>المنتجات</h2>
                </div>
                <div className={styles['prod__butt']}>
                    {/* <li className={styles.active}>
                        <NavLink onClick={() => { Filterbycatigory('') }}> كل المنتجات</NavLink>
                    </li> */}
                    {/* <li className={styles.active }> */}
                    <li className={active ? styles.color : styles.active} >
                        <NavLink onClick={() => {
                            Filterbycatigory('dates')
                            if (active) {
                                setactive(false)
                            } else {
                                setactive(true);
                                setactive2(false)
                                setactive3(false)
                            }
                        }} > بلح</NavLink>
                    </li>
                    <li className={active2 ? styles.color : styles.active}>
                        <NavLink onClick={() => {
                            Filterbycatigory('palm')
                            if (active2) {
                                setactive2(false)
                            } else {
                                setactive2(true);
                                setactive3(false);
                                setactive(false);
                            }

                        }}>نخيل</NavLink>
                    </li>
                    <li className={active3 ? styles.color : styles.active}>
                        <NavLink onClick={() => {
                        Filterbycatigory('fertilizer')
                        if (active3) {
                            setactive3(false)
                        } else {

                            setactive3(true);
                            setactive(false);
                            setactive2(false);
                        }
                    }
                    }> سمـاد</NavLink></li>
                </div>
                <div className={styles.row}>
                    <div className={styles.items}>
                        {
                            arr.map((item, index) => {
                                return <Productcard dataa={item} key={index} />
                            })
                        }


                    </div>
                </div>
                {isLoggedIn && <button className={`${['btn-cart']} ${styles.button}`}
                 type="button" title="أضف إلى عربة التسوق" >
                    <NavLink className={`${['fa fa-shopping-cart']} ${styles.btnicon}`} to="/cart">
                    {/* <span className={styles.cartLength}>{num}</span> */}
                    </NavLink>
                </button>}
            </div>
        </section>
    )
}

export default Product