import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import moment from "moment";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import db from "../../firebase";
import { IOrder, ISession } from "../../typings";
import Header from "../components/Header";
import Order from "../components/Order";

type Props = {
  orders: IOrder[];
};

const Orders = ({ orders }: Props) => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-l max-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-[fast_blue]">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get user logged in credentials
  const session: ISession | null = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  // // Firebase db
  const stripeOrdersQuery = query(
    collection(doc(collection(db, "users"), session.user.email), "orders"),
    orderBy("timestamp", "desc")
  );
  const stripeOrders = await getDocs(stripeOrdersQuery);

  // Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().amount,
      amount_shipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
 
  return {
    props: {
      orders,
    },
  };
};
