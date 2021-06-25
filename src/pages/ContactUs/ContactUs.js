import { Element } from 'react-scroll';
import { Content } from '../../components/UI/Content';
import { Header, SubHeader } from '../../components/UI/headers';
import MinOrder from './MinOrder';

const ContactUs = () => {
  return (
    <Element name="contact-us">
      <Content>
        <Header>Contact Us</Header>
        <SubHeader className="text-center">
          Hungry? Find us on Wood Road, Treforest or place your order over the
          phone to get your food delivered to your doorstep.
        </SubHeader>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2 text-center">
            <p>102 Wood Rd</p>
            <p>Pontypridd</p>
            <p>Mid Glamorgan</p>
            <p>CF37 1RJ</p>
            <p className="italic">01443 405599</p>
          </div>
          <div className="sm:w-1/2">
            <iframe
              class="inline-block"
              height="200px"
              title="map"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.co.uk/maps?hl=en&amp;ie=UTF8&amp;q=uni+takeaway&amp;fb=1&amp;gl=uk&amp;hq=uni+takeaway&amp;cid=0,0,16201449134386230022&amp;t=m&amp;ll=51.595748,-3.329351&amp;spn=0.004265,0.009656&amp;z=16&amp;iwloc=A&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <SubHeader className="text-center text-uni-green">
          We deliver to:
        </SubHeader>
        <div className="flex flex-wrap justify-around">
          <MinOrder
            counties="Treforest, Graig and Rhydyfelin"
            minimum="6"
            charge="1.00"
          />
          <MinOrder
            counties="Hawthorn, Maesycoed, Graigwen, Hopkinstown and Cilfynydd"
            minimum="8"
            charge="1.50"
          />
          <MinOrder
            counties="Tonteg, Church Village, Glyncoch and Coed Y Cwm"
            minimum="10"
            charge="2.00"
          />
          <MinOrder
            counties="Trehafod, Beddau, Llantwit Fadre, Ynysybwl, Taffs Well, Nantgarw and Efail Isaf"
            minimum="10"
            charge="2.50"
          />
        </div>
      </Content>
    </Element>
  );
};

export default ContactUs;
