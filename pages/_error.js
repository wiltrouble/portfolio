import Layout from "../components/Layout";

const _error =({statusCode}) => {
    return (
        <Layout>
            {
                statusCode ? ( <p className="text-center">Could not load your page: Status code {statusCode}</p>) : ( <p>Could not load your page</p>)
            }
        </Layout>
    )
}

export default _error;