import Highway from '@dogstudio/highway/src/highway';
import anime from 'animejs';

class Slide extends Highway.Transition {
    out({ from, done }) {
        anime({
            targets: from,
            translateX: [0, 3000],
            duration: 400,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            complete: () => done(),
        });
    }

    in({ from, to, done }) {
        from.remove();

        anime({
            targets: to,
            translateY: [3000, 0],
            duration: 400,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            complete: () => done(),
        });
    }
}

export default Slide;
