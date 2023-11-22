import React from 'react';
import about from './About.module.css';
import AbdElrahman from '../../assets/images/Abdelrahman.jpeg';
import Alaa from '../../assets/images/alaa.jpeg';
import Amal from '../../assets/images/amal.jpeg';
import Esraa from '../../assets/images/Esraa.jpeg';
import Mariam from '../../assets/images/mariam.jpeg';
import Mohamed from '../../assets/images/file.enc';

function About() {
  return (
    <section className={`${about.ecommerce_about_team} ${"bg-opacity-50"}`}>
      <div className={"container"}>
        <div className={about.about_us}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-6"}>
              <div className={"text-center mb-5"}>
                <h2 className={`${"mb-3"} ${about.team}`}>فريق إدارة المشروع</h2>
                <p className={"text-muted fs-15"}>
                  خبرة القائد أولًا وقبل كل شيء، حيث يتمتع بخبرة عميقة في المجال الذي
                  يقوده
                </p>
              </div>
            </div>
          </div>
          <div className={"row gy-4 justify-content-between"}>
            <div className={"col-xl-2 col-md-6"}>
              <div className={`${[about.team_box]} ${about["text-center"]}`}>
                <div className={about["team-img"]}>
                  <img
                    src={AbdElrahman}
                    alt=""
                    className={"img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"}
                  />
                </div>
                <div className={"mt-4 pt-1"}>
                    <h5 className={`${about.team} ${"text-center"}`}>عـبدالرحمن عـلي</h5>
                  <p className={"text-muted text-center"}>Our Founder</p>
                </div>
              </div>
            </div>
            <div className={"col-xl-2 col-md-6"}>
              <div className={`${[about.team_box]} ${about["text-center"]}`}>
                <div className={about["team-img"]}>
                  <img
                    src={Alaa}
                    alt=""
                    className={"img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"}
                  />
                </div>
                <div className={"mt-4 pt-1"}>
                    <h5 className={`${about.team} ${"text-center"}`}>الاء أكرم</h5>
                  <p className={"text-muted text-center"}>Our Founder</p>
                </div>
              </div>
            </div>
            <div className={"col-xl-2 col-md-6"}>
              <div className={`${[about.team_box]} ${about["text-center"]}`}>
                <div className={about["team-img"]}>
                  <img
                    src={Amal}
                    alt=""
                    className={"img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"}
                  />
                </div>
                <div className={"mt-4 pt-1"}>
                    <h5 className={`${about.team} ${"text-center"}`}> امـل مـوسـي</h5>
                  <p className={"text-muted text-center"}>Our Founder</p>
                </div>
              </div>
            </div>
            <div className={"col-xl-2 col-md-6"}>
              <div className={`${[about.team_box]} ${about["text-center"]}`}>
                <div className={about["team-img"]}>
                  <img
                    src={Mohamed}
                    alt=""
                    className={"img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"}
                  />
                </div>
                <div className={"mt-4 pt-1"}>
                    <h5 className={`${about.team} ${"text-center"}`}>مـحمد بـدوي</h5>
                  <p className={"text-muted text-center"}>Our Founder</p>
                </div>
              </div>
            </div>
            <div className={"col-xl-2 col-md-6"}>
              <div className={`${[about.team_box]} ${about["text-center"]}`}>
                <div className={about["team-img"]}>
                  <img
                    src={Esraa}
                    alt=""
                    className={"img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"}
                  />
                </div>
                <div className={"mt-4 pt-1"}>
                    <h5 className={`${about.team} ${"text-center"}`}>اسـراء صـلاح</h5>
                  <p className={"text-muted text-center"}>Our Founder</p>
                </div>
              </div>
            </div>
            <div className={"col-xl-2 col-md-6"}>
              <div className={`${[about.team_box]} ${about["text-center"]}`}>
                <div className={about["team-img"]}>
                  <img
                    src={Mariam}
                    alt=""
                    className={"img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"}
                  />
                </div>
                <div className={"mt-4 pt-1"}>
                    <h5 className={`${about.team} ${"text-center"}`}>مـريـم مصـطفـي</h5>
                  <p className={"text-muted text-center"}>Our Founder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About