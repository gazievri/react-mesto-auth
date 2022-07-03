import imageSuccess from '../images/tooltip-success.svg';
import imageError from '../images/tooltip-error.svg';


const InfoTooltip = ({ isSuccess }) => {

  const signUpResult = {
    success: "Вы успешно зарегистрировались!",
    fail: "Что-то пошло не так! Попробуйте ещё раз."
  }

  return(
    <div className="popup" >
      <div className="popup__container popup__container_type_info-tooltip">
        <button className="popup__close-button" type="button" />
        <div className='popup__tooltip-image'  style={{ backgroundImage: `url(${isSuccess ? imageSuccess : imageError})` }} ></div>
        <p className='popup__tooltip-text'>{isSuccess ? signUpResult.success : signUpResult.fail}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;

