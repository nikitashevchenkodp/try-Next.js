import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";

export default function User ({user}) {

    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState(null)
    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true));
        Router.events.on('routeChangeComplete', () => setLoading(false));
        Router.events.on('routeChangeError', () => setLoading(false));
        return () => {
          Router.events.off('routeChangeStart', () => setLoading(true));
          Router.events.off('routeChangeComplete', () => setLoading(false));
          Router.events.off('routeChangeError', () => setLoading(false));
        };
      }, [Router.events]);
    const {query: {id}} = useRouter()

    if(loading) {
        return <h1>Loading...</h1>
    }


    return (
        <MainContainer keywords={`${user.name}`} title = {user.name}>
            <h1 style = {{backgroundColor: color}} onMouseEnter={() => setColor('red') } onMouseLeave = {() => setColor(null)}>User with id {id}</h1>
            <h3>Name ---- {user.name}</h3>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()

    return { props: {user} }
  }