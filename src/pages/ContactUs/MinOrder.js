import tw from "../../helpers/tailwind"

const MinOrder = (props) => {
  return (
    <div
      className={tw(
        "border-2",
        "border-uni-green",
        "shadow-md",
        "rounded-sm",
        "text-center",
        "m-2",
        "bg-white",
        "w-full",
        "p-2",
        "lg:w-1/3",
        "xl:w-1/4",
        "flex flex-col"
      )}
    >
      <p className="h-full p-2">{props.counties}</p>
      <p className="text-uni-red">MINIMUM ORDER £{props.minimum}</p>
      <p className="font-semibold">+ £{props.charge} Delivery charge</p>
    </div>
  )
}

export default MinOrder
