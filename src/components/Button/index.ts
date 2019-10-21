import Button from './Button';
import {ButtonWrapperAdd, ButtonWrapperMark, ButtonWrapperPlan} from './ButtonWrapperMark';


const ButtonMark = ButtonWrapperMark(Button);
const ButtonPlan = ButtonWrapperPlan(Button);
const ButtonAdd = ButtonWrapperAdd(Button);

export {
  Button,
  ButtonMark,
  ButtonPlan,
  ButtonAdd
};
