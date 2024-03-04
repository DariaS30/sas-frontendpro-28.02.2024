let ladder = { step: 0, up: () => (++ladder.step, ladder), down: () => (--ladder.step, ladder), showStep: () => alert(ladder.step) };
ladder.up().up().down().showStep(); // 1

