import { Link } from "react-router-dom";
export const ExploreTopBooks = () => {

    return (
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white 
                d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Trouvez votre prochaine lecture</h1>
                    <p className='col-md-8 fs-4'>Qu'aimeriez-vous lire ensuite ?</p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/search'> 
                    Explorer les meilleurs livres</Link>
                </div>
            </div>
        </div>
    );
}