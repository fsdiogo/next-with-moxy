import Highway from '@dogstudio/highway/src/highway';
import anime from 'animejs';

class Fade extends Highway.Transition {
    out({ from, done }) {
        anime({
            targets: from,
            opacity: [1, 0],
            duration: 1000,
            complete: () => done(),
        });
    }

    in({ from, to, done }) {
        from.remove();

        anime({
            targets: to,
            opacity: [0, 1],
            duration: 1000,
            complete: () => done(),
        });
    }
}

export default Fade;
