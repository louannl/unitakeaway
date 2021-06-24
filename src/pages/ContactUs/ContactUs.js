import { Element } from 'react-scroll';
import { Content } from '../../components/UI/Content';
import { Header, SubHeader } from '../../components/UI/headers';
import MinOrder from './MinOrder';

const ContactUs = () => {
  return (
    <Element name="contact-us">
      <Content>
        <Header>Contact Us</Header>
        <SubHeader>
          Hungry? Find us on Wood Road, Treforest or place your order over the
          phone to get your food delivered to your doorstep.
        </SubHeader>
        <div className="text-center">
          <div>
            <p>102 Wood Rd</p>
            <p>Pontypridd</p>
            <p>Mid Glamorgan</p>
            <p>CF37 1RJ</p>
          </div>
          <p className="italic">01443 405599</p>
        </div>
        <SubHeader className="text-center text-uni-green">
          We deliver to:
        </SubHeader>
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
      </Content>
    </Element>
  );
};

export default ContactUs;
