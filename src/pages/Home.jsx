import { useState } from "react";
import "../App.css";
import Navi from "../components/navi.jsx";
import Corousel from "../components/corousel";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="full-screen-bg">
        <div className="overlay">
          <Navi />
          <div className="boxcover">
            <div className="content">
              <h1>WELCOME</h1>
              <p>
                ร็อคพลาซ่า คอมเมนต์ดั๊มพ์โอเลี้ยงสตาร์ท แอ็คชั่นฮีโร่จ๊อกกี้
                แอร์นินจาแทงกั๊กคอนโทรล ออกแบบคาร์โก้สมิติเวชป๋า
                มินต์บ๊อบสะบึมส์ บูติกดีเจบร็อกโคลีแก๊สโซฮอล์จตุคาม แอปเปิ้ล
                ฟอยล์ทาวน์ มอนสเตอร์เอ๊าะแต๋ว คองเกรสฮัลโลวีนอพาร์ทเมนท์สเตย์
                ทำงานแฟร์ไรเฟิลภารตะเซ่นไหว้ กฤษณ์บึ้มเก๋ากี้รันเวย์
                ธรรมาแคร์แทงโก้อุด้งพลานุภาพ ฟินิกซ์แฟกซ์
                แพลนแครกเกอร์ซูเอี๋ยภคันทลาพาธ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pane2">
        <div className="left-pane">
          <h1>FEATURES</h1>
          <a>จองโต้ะ</a>
          <a>ขอเพลง</a>
        </div>
        <div className="right-pane">
          <Corousel />
        </div>
      </div>
    </>
  );
}

export default Home;