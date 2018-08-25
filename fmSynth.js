const reverb = new Tone.Freeverb().toMaster()
const vibrato = new Tone.Vibrato().toMaster()
const chorus = new Tone.Chorus().toMaster()
const delay = new Tone.PingPongDelay().toMaster()
// const autoFilter = new Tone.AutoFilter('8n').toMaster()
// const lfo = new Tone.LFO('4n', 1, 1)
// lfo.connect(delay)



const synth = new Tone.FMSynth().chain(reverb, vibrato, chorus, delay)

reverb.wet.value = 1.0
vibrato.wet.value = 1.0
chorus.wet.value = 1.0
delay.wet.value = 1.0


document.getElementById('synth').addEventListener('click', (event) => {
	if(event.target.matches('#C')) synth.triggerAttackRelease("C4", "4n");
	else if(event.target.matches('#C_sharp')) synth.triggerAttackRelease("Db4", "2n");
	else if(event.target.matches('#D')) synth.triggerAttackRelease("D4", "2n");
	else if(event.target.matches('#D_sharp')) synth.triggerAttackRelease("Eb4", "2n");
	else if(event.target.matches('#E')) synth.triggerAttackRelease("E4", "2n");
	else if(event.target.matches('#F')) synth.triggerAttackRelease("F4", "2n");
	else if(event.target.matches('#F_sharp')) synth.triggerAttackRelease("Gb4", "2n")
	else if(event.target.matches('#G')) synth.triggerAttackRelease("G4", "2n");
	else if(event.target.matches('#G_sharp')) synth.triggerAttackRelease("Ab4", "2n");
	else if(event.target.matches('#A')) synth.triggerAttackRelease("A4", "2n");
	else if(event.target.matches('#A_sharp')) synth.triggerAttackRelease("Bb4", "2n");
	else if(event.target.matches('#B')) synth.triggerAttackRelease("B4", "2n");
})

