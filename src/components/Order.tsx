import moment from "moment";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { IOrder } from "../../typings";

type Props = {
  order: IOrder;
};

const Order = ({ order }: Props) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p className="font-bold text-xs">
            {moment.unix(order.timestamp).format("DD MMM YYYY")}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={order.amount} currency="CAD" /> - One-Day
            Delivery{" "}
            <Currency quantity={order.amount_shipping} currency="CAD" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right text-fast_blue-light">
          {order.items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER ID: {order.id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {order.images.map((image, i) => (
            <Image className="object-contain w-40 h-40" key={i} src={image} alt="image" width={128} height={80} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
