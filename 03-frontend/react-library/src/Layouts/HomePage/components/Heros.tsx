import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {

    const { authState } = useOktaAuth();

    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Qu'as-tu lu récemment ?</h1>
                            <p className='lead'> L'équipe de la bibliothèque aimerait savoir ce que vous avez lu. 
Que ce soit pour apprendre une nouvelle compétence ou 
progresser dans une que vous possédez déjà,
 nous serons en mesure de vous fournir les meilleurs contenus !
                            </p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explorer les meilleurs livres </Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Créer un compte</Link>
                            }  
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Notre collection change toujours !</h1>
                            <p className='lead'>
                            Essayez de vous connecter quotidiennement car notre collection change constamment ! 
                            Nous travaillons sans relâche pour vous offrir la sélection de livres la plus précise possible !
                         Nous sommes rigoureux concernant notre choix de livres et nos livres seront toujours notre priorité absolue.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>Qu'as-tu lu récemment ?</h1>
                            <p className='lead'>
                            L'équipe de la bibliothèque aimerait savoir ce que vous avez lu. 
Que ce soit pour apprendre une nouvelle compétence ou 
progresser dans une que vous possédez déjà,
 nous serons en mesure de vous fournir les meilleurs contenus !
                            </p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explorer les meilleurs livres</Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Créer un compte</Link>
                        }
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Notre collection change toujours !</h1>
                            <p className='lead'>
                            Essayez de vous connecter quotidiennement car notre collection change constamment ! 
                            Nous travaillons sans relâche pour vous offrir la sélection de livres la plus précise possible !
                         Nous sommes rigoureux concernant notre choix de livres et nos livres seront toujours notre priorité absolue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}