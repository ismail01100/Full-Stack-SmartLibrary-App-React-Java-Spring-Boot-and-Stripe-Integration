import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";
import { LeaveAReview } from "../Utils/LeaveAReview";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean,
    currentLoansCount:number, isAuthenticated: any, isCheckedOut: boolean ,
    checkoutBook: any, isReviewLeft: boolean, submitReview:any}> = (props) => {

        function buttonRender() {
            if (props.isAuthenticated) {
                if (!props.isCheckedOut && props.currentLoansCount < 5) {
                    return (<button onClick={() => props.checkoutBook()} className='btn btn-success btn-lg'>Emprunter</button>)
                } else if (props.isCheckedOut) {
                    return (<p><b>Livre emprunté. Profitez-en!</b></p>)
                } else if (!props.isCheckedOut) {
                    return (<p className='text-danger'>Trop de livres empruntés.</p>)
                }
            }
            return (<Link to={'/login'} className='btn btn-success btn-lg'>Connectez-vous</Link>)
        }
        function reviewRender() {
            if (props.isAuthenticated && !props.isReviewLeft) {
                return(
                <div>
                    <LeaveAReview submitReview={props.submitReview}/>
                </div>
                )
            } else if (props.isAuthenticated && props.isReviewLeft) {
                return(
                <p>
                    <b>/</b>
                </p>
                )
            }
            return (
            <div>
                <hr/>
                <p>Connectez-vous pour pouvoir laisser un commentaire.</p>
            </div>
            )
        }
    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className='mt-3'>
                    <p>
                        <b>{props.currentLoansCount} </b>
                        Livres empruntés
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                        <h4 className='text-success'>
                            Disponible
                        </h4>
                        :
                        <h4 className='text-danger'>
                            Liste d'attente
                        </h4>
                    }
                    <div className='row'>
                        <p className='col-6 lead'>
                            <b>{props.book?.copies} </b>
                            exemplaires
                        </p>
                        <p className='col-6 lead'>
                            <b>{props.book?.copiesAvailable} </b>
                            Disponible
                        </p>
                    </div>
                </div>
                <Link to='/#' className='btn btn-success btn-lg'>{buttonRender()}</Link>
                <hr />
                <p className='mt-3'>
                Ce nombre peut changer jusqu'à ce que la commande soit finalisée.
                </p>
                    {reviewRender()}
            </div>
        </div>
    );
}