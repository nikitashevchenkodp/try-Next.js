import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer";
export default function User ({user}) {

    const {query: {id}} = useRouter()

    return (
        <MainContainer keywords={`${user.name}`} title = {user.name}>
            <h1>User with id {id}</h1>
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