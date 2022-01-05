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


function monterLegende() {
	let index__p1 = document.querySelector('.index__p1');
	return anime({
		targets: index__p1 , 
		translateY: '-5em', 
		autoplay: false,
		easing: 'linear',
		duration: 200,
		update: function() {
		index__p1.style.display = "block";
		}
	}).play;
}

function descendreLegende() {
	return anime({
		targets: '.index__p1', 
		translateY: '5em',
		autoplay:false,
		easing: 'linear',
		duration: 200
	}).play;
}