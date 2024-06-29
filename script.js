	document.addEventListener('DOMContentLoaded', function() {
		const sidebar = document.getElementById('sidebar');
		const sidebarToggle = document.getElementById('sidebarToggle');
		const closeSidebar = document.getElementById('closeSidebar');

		sidebarToggle.addEventListener('click', function() {
			sidebar.classList.toggle('open');
			sidebarToggle.classList.toggle('hidden'); // Hide the toggle button
		});

		closeSidebar.addEventListener('click', function() {
			sidebar.classList.remove('open');
			sidebarToggle.classList.remove('hidden'); // Show the toggle button
		});
	});
	//SOCMED OF BGYO
	window.addEventListener("DOMContentLoaded",() => {
		const fr = new FaceRating("#face-rating");
	});

	//FACE RATING
	class FaceRating {
		constructor(qs) {
			this.input = document.querySelector(qs);
			this.input?.addEventListener("input",this.update.bind(this));
			this.face = this.input?.previousElementSibling;
			this.update();
		}
		update(e) {
			let value = this.input.defaultValue;

			// when manually set
			if (e) value = e.target?.value;
			// when initiated
			else this.input.value = value;

			const min = this.input.min || 0;
			const max = this.input.max || 100;
			const percentRaw = (value - min) / (max - min) * 100;
			const percent = +percentRaw.toFixed(2);

			this.input?.style.setProperty("--percent",`${percent}%`);

			// face and range fill colors
			const maxHue = 120;
			const hueExtend = 30;
			const hue = Math.round(maxHue * percent / 100);

			let hue2 = hue - hueExtend;
			if (hue2 < 0) hue2 += 360;

			const hues = [hue,hue2];
			hues.forEach((h,i) => {
				this.face?.style.setProperty(`--face-hue${i + 1}`,h);
			});

			this.input?.style.setProperty("--input-hue",hue);

			// emotions
			const duration = 1;
			const delay = -(duration * 0.99) * percent / 100;
			const parts = ["right","left","mouth-lower","mouth-upper"];

			parts.forEach(p => {
				const el = this.face?.querySelector(`[data-${p}]`);
				el?.style.setProperty(`--delay-${p}`,`${delay}s`);
			});

			// aria label
			const faces = [
				"Sad face",
				"Slightly sad face",
				"Straight face",
				"Slightly happy face",
				"Happy face"
			];
			let faceIndex = Math.floor(faces.length * percent / 100);
			if (faceIndex === faces.length) --faceIndex;

			this.face?.setAttribute("aria-label",faces[faceIndex]);
		}
	}
// Music on hover
document.querySelectorAll('.card').forEach((card, index) => {
	const audioId = `audio-${index + 1}`;
	const audioElement = document.getElementById(audioId);
	if (audioElement) {
		console.log(`Adding hover events to card ${index + 1}`);
		card.addEventListener('mouseenter', () => {
			console.log(`Playing audio ${audioId}`);
			audioElement.play();
		});

		card.addEventListener('mouseleave', () => {
			console.log(`Pausing and resetting audio ${audioId}`);
			audioElement.pause();
			audioElement.currentTime = 0; // Reset the audio to the start
		});
	} else {
		console.warn(`No audio element found for card ${index + 1}`);
	}
});

//Slider
let index = 0;

/*GELO*/
const gelo = [
    "gelo 01.png",
    "gelo 02.png",
	"gelo 03.png",
    "gelo 04.png",
	"gelo 05.png"
];

function updategelo(){
    document.getElementById('gelo').src = gelo[index];
}

function left_gelo(){
    index = (index + 1) % gelo.length;
    updategelo();
}

function right_gelo(){
    index = (index - 1 + gelo.length) % gelo.length
    updategelo();
}
/*AKIRA*/
const akira = [
    "akira 01.png",
    "akira 02.png",
	"akira 03.png",
    "akira 04.png",
	"akira 05.png"
];

function updateakira(){
    document.getElementById('akira').src = akira[index];
}

function left_akira(){
    index = (index + 1) % akira.length;
    updateakira();
}

function right_akira(){
    index = (index - 1 + akira.length) % akira.length
    updateakira();
}
/*JL*/
const jl = [
    "jl 01.png",
    "jl 02.png",
	"jl 03.png",
    "jl 04.png",
	"jl 05.png"
];

function updatejl(){
    document.getElementById('jl').src = jl[index];
}

function left_jl(){
    index = (index + 1) % jl.length;
    updatejl();
}

function right_jl(){
    index = (index - 1 + akira.length) % jl.length
    updatejl();
}
/*MIKKI*/
const mikki = [
    "mikki 01.png",
    "mikki 02.png",
	"mikki 03.png",
    "mikki 04.png",
	"mikki 05.png"
];

function updatemikki(){
    document.getElementById('mikki').src = mikki[index];
}

function left_mikki(){
    index = (index + 1) % mikki.length;
    updatemikki();
}

function right_mikki(){
    index = (index - 1 + mikki.length) % mikki.length
    updatemikki();
}
/*NATE*/
const nate = [
    "nate 01.png",
    "nate 02.png",
	"nate 03.png",
    "nate 04.png",
	"nate 05.png"
];

function updatenate(){
    document.getElementById('nate').src = nate[index];
}

function left_nate(){
    index = (index + 1) % nate.length;
    updatenate();
}

function right_nate(){
    index = (index - 1 + nate.length) % nate.length
    updatenate();
}
//SIDE BAR
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});

//Music player

function changeVideoSource(newSource) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = newSource;
}

// Sidebar toggle functionality
document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});

