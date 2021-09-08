import { Content } from '../UI/Content';

const Footer = () => {
  return (
    <footer className="bg-uni-black border-t-2 border-gray-300">
      <Content className="flex items-center justify-around">
        <div className="sm:w-2/3 text-center py-6 mx-2">
          <p className="text-sm text-white font-bold">
            © 2021 Uni Takeaway. All Rights Reserved
          </p>
        </div>
        <div className="sm:w-1/3 text-white py-1 font-bold mx-2">
          <p className="text-sm text-white font-bold">
            Website Designed by{' '}
            <a href="https://louannloizou.co.uk">Louann Loizou</a>
          </p>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
