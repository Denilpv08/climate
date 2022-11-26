import style from '../css/Loading.module.css';

const Loanding = () =>{
    return(
        <div className={ style.loadingContainer }>
            <div className={ style.loader }>
                <div></div>
            </div>
        </div>
    );
}

export default Loanding;