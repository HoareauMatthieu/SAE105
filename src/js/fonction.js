function carrousel() {
    var carrousel__bloc = document.querySelectorAll('.carrousel__bloc');
    let d = 2000;
    let delta = 1000;

    carrousel__bloc.forEach(function(img,indice) {
        img.style.zIndex = carrousel__bloc.length - indice;
    });

    let anim153 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim153.add({
        targets: carrousel__bloc,
        translateX: [{value: '182px', duration: d},
                     {value: '-182px', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (2*delta)+d;
                         if (ind == 1) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'easeInOutSine',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}


function monterLegende1() {
	let page__legende1 = document.querySelector('.page__legende1');
	return anime({
		targets: page__legende1 , 
		translateY: '0', 
		autoplay: false,
		easing: 'linear',
		duration: 100,
		
	}).play;
}

function descendreLegende1() {
    let page__legende1 = document.querySelector('.page__legende1');
	return anime({
		targets: page__legende1, 
		translateY: '5em',
		autoplay:false,
		easing: 'linear',
		duration: 100
	}).play;
}


function monterLegende2() {
	let page__legende2 = document.querySelector('.page__legende2');
	return anime({
		targets: page__legende2 , 
		translateY: '0', 
		autoplay: false,
		easing: 'linear',
		duration: 100,
		
	}).play;
}

function descendreLegende2() {
    let page__legende2 = document.querySelector('.page__legende2');
	return anime({
		targets: page__legende2, 
		translateY: '5em',
		autoplay:false,
		easing: 'linear',
		duration: 100
	}).play;
}

function monterLegende3() {
	let page__legende3 = document.querySelector('.page__legende3');
	return anime({
		targets: page__legende3 , 
		translateY: '0', 
		autoplay: false,
		easing: 'linear',
		duration: 100,
		
	}).play;
}

function descendreLegende3() {
    let page__legende3 = document.querySelector('.page__legende3');
	return anime({
		targets: page__legende3, 
		translateY: '5em',
		autoplay:false,
		easing: 'linear',
		duration: 100
	}).play;
}
