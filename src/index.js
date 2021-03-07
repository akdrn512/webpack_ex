import { btnChange } from './app/btn';
import { changeColor } from './app/color';
import './asset/style/reset.scss';

btnChange.addEventListener('click', function() {
    changeColor('pink');
});

console.log('Hello World');