import React, { useState } from 'react';
import styles from './Contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/860aa5ea752dcbca071bb357004ad5ea-removebg-preview.png';
import { useDispatch } from 'react-redux';
import { addmessage } from "../../Redux/Slices/MessageSlice"
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cont() {
  const dispatch = useDispatch();
  let formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    // validationSchema:schema,

    // On Submit 
    onSubmit: async (values) => {

      console.log(values);
      // send data in form of multipart/form-data(encreyption)
      let form = new FormData();
      form.append("email", values.email);
      form.append("message", values.message);
      try {
        dispatch(addmessage(values))
        // setSuccess('User loggedin successfully!');
        console.log("object");
        setAlert(true);
      } catch (error) {
        console.log(error);
        console.log("2");
        setAlert(false);
        // setSuccess('Error lggedin user. Please try again.');
      }
    }
  })
  const [lert, setAlert] = useState(false)
  const notify = () => toast('🦄 تـم أرسـال الـرساله بنجـاح', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notify1 = () => toast.error('يـجـب ادخـال جـميـع الحـقول', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  // console.log(alert, "asdsadsadas");

  return (
    <section className={styles.contactussection} id={styles.contactussection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={styles['section-text']}>
              <h2 className={styles['section-title']}>تواصل معنا</h2>
              <p className={styles['section-description']}>
                في حال احتياجك إلى التحدث معنا لأي سبب لا تتردد في التواصل معنا
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className={styles['contact-form']}>
              <form method="post" className={styles['contact-form-aqua']} onSubmit={formik.handleSubmit}>
                <h2 className={styles['contact-head']}>أرسل رسالة :</h2>
                <input
                  type="text"
                  name="name"
                  required=""
                  placeholder="* الاسم"
                  className={styles['contact-frm']}
                />
                <input
                  type="email"
                  name="email"
                  required=""
                  placeholder="* الايميل"
                  className={styles['contact-frm']}
                  onChange={formik.handleChange}
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="* الرسالة"
                  className={styles["contact-msg"]}
                  defaultValue={""}
                  onChange={formik.handleChange}

                />
                <input
                  type="submit"
                  defaultValue="ارسال"
                  value="ارسال"
                  className={styles["global-btn"]}
                  onClick={()=>{
                    if(lert){
                      notify();
                    }
                    else{
                      notify1();
                    }
                  }}
                  
                />
                 {/* <button onClick={notify}>Notify!</button> */}
<ToastContainer/>

                <br />
                <br />
                <span className={styles['msgSubmit']} />
              </form>
              {/* {
                setAlert && (
                  alert("saaad")
                )
              } */}
            </div>
          </div>

          <div className="col-lg-6 mx-auto">
            <div className={styles['contact-img']}>
              <img src={img} alt="#" />
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Cont