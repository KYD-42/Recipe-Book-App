import { NavLink } from 'react-router-dom';

function NotFound(){
    return(
        <section className='not-found'>
            <h1>404</h1>
            <p>Page not "fondue"</p>
            <NavLink to="/"><button className='form_btn'>Back to Home Page</button></NavLink>
        </section>
    )
}
export default NotFound;