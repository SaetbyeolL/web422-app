import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import  RouteGuard  from '../components/RouteGuard';

import '../styles/globals.css'//
import { cartListAtom } from '@/store';//


export async function getStaticProps(context) {

  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
  const data = await res.json()

  return { props: { staticProduct: data } }
}

function MyApp({ Component, pageProps }) {
  return <RouteGuard><Layout><Component {...pageProps} /></Layout></RouteGuard>;
}

export default MyApp
