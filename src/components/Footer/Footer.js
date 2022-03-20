import { Content } from "../UI/Content"
import HygieneRating from "./HygieneRating"

const Footer = () => {
  return (
    <footer className="bg-uni-black border-t-2 border-gray-300">
      <Content className="flex flex-wrap sm:flex-nowrap items-center justify-around">
        <div className="w-full sm:w-1/3 text-center py-2 mx-2">
          <p className="text-sm text-white font-bold">
            © 2022 Uni Takeaway. All Rights Reserved
          </p>
          <p className="text-xs text-white font-bold italic">
            Website Designed by{" "}
            <a href="https://louannloizou.co.uk">Louann Loizou</a>
          </p>
        </div>
        <HygieneRating />
      </Content>
    </footer>
  )
}

export default Footer
