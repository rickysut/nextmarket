'use client'
import Nav from '../components/Nav'
import {  ApolloProvider, gql, useQuery } from '@apollo/client'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { client } from '../../gqlClient'

loadDevMessages();
loadErrorMessages();


const GET_SHOP = gql`
query {
  findShopByID(id: "377756192052609089") {
    _id
    name
    ownerID
    description
    products {
      _id
    }
  }
}
`

function QueryShop() {
  const { loading, error, data } = useQuery(GET_SHOP);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // console.log(' ==> ', data)
  
}

export default function Home() {
  return (
    <ApolloProvider client={ client }>
      
      <QueryShop />  
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Home !
      </main>
    </ApolloProvider>
  )
}
