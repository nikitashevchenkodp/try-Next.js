import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => (
    <MainContainer keywords={'app-users'} title = "Users">
        <h1>Users list</h1>
        <ul>
            {
                users.map((user) => (
                        <Link key = {user.id} href={`/users/${user.id}`}>
                            <li>{user.name}</li>
                        </Link>
                ))
            }
        </ul>
    </MainContainer>
);

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return { props: { users } };
}

export default Users;
