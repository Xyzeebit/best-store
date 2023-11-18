import { useRouteError } from 'react-router-dom'
import { Layout } from '../components/core';

const Page404 = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

const Error404 = () => (
    <Layout renderHeader={true}>
        <Page404 />
    </Layout>
)

export default Error404;