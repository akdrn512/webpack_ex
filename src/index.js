import { btnChange } from '@js/btn';
import { changeColor } from '@js/color';
import './asset/style/reset.scss';

btnChange.addEventListener('click', function() {
    changeColor('pink');
});

console.log('Hello World');