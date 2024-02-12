import { NavLink } from 'react-router-dom';

function NotFound(){
    return(
        <section className='not-found'>
            <h1>404</h1>
            <p>Page not found</p>
            <NavLink to="/"><p>Back to Home Page</p></NavLink>
        </section>
    )
}
export default NotFound;