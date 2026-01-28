// Routines with language-neutral keys + numbers in English digits.
const ROUTINES = [{
  id:"2",
  titleKey:"routine2.title",
  patientKey:"routine2.patient",
  sections:[
    { id:"warmup", nameKey:"section.warmup", items:[
      { id:"trap-stretch", nameKey:"ex.trap.name", howKey:"ex.trap.how", img:"images/trap-stretch.jpg", dosage:"30 sec × 3" },
      { id:"lev-stretch", nameKey:"ex.lev.name", howKey:"ex.lev.how", img:"images/lev-stretch.jpg", dosage:"30 sec × 3" },
      { id:"ankle-circles", nameKey:"ex.ankle.name", howKey:"ex.ankle.how", img:"images/ankle-circles.jpg", dosage:"10 reps × 2" },
      { id:"hip-gait", nameKey:"ex.hipgait.name", howKey:"ex.hipgait.how", img:"images/hip-gait.jpg", dosage:"10 reps × 2" },
      { id:"standing-hip-flexor", nameKey:"ex.hipflexor.name", howKey:"ex.hipflexor.how", img:"images/standing-hip-flexor.jpg", dosage:"30 sec × 3" },
      { id:"figure-4", nameKey:"ex.figure4.name", howKey:"ex.figure4.how", img:"images/figure-4.jpg", dosage:"30 sec × 3" },
      { id:"prone-quad", nameKey:"ex.pronequad.name", howKey:"ex.pronequad.how", img:"images/prone-quad.jpg", dosage:"30 sec × 3" }
    ]},
    { id:"neck", nameKey:"section.neck", items:[
      { id:"neck-isometrics", nameKey:"ex.neckiso.name", howKey:"ex.neckiso.how", img:"images/neck-isometrics.png", dosage:"5 sec hold × 10 reps each side" }
    ]},
    { id:"lowerlimb", nameKey:"section.lowerlimb", items:[
      { id:"slr-band", nameKey:"ex.slrband.name", howKey:"ex.slrband.how", img:"images/slr-band.jpeg", dosage:"As prescribed" },
      { id:"clamshells", nameKey:"ex.clamshell.name", howKey:"ex.clamshell.how", img:"images/clamshells.jpg", dosage:"10 reps × 2" },
      { id:"hip-hikes", nameKey:"ex.hiphikes.name", howKey:"ex.hiphikes.how", img:"images/hip-hikes.jpg", dosage:"10 reps × 2" },
      { id:"toe-raises", nameKey:"ex.toeraises.name", howKey:"ex.toeraises.how", img:"images/toe-raises.jpg", dosage:"10 reps × 2" },
      { id:"calf-raises", nameKey:"ex.calfraises.name", howKey:"ex.calfraises.how", img:"images/calf-raises.gif", dosage:"10 reps × 2" },
      { id:"banded-chair-squats", nameKey:"ex.bandedSquat.name", howKey:"ex.bandedSquat.how", img:"images/banded-chair-squats.svg", dosage:"10 reps × 2" }
    ]}
  ]
},
{
  id:"1",
  titleKey:"routine1.title",
  patientKey:"routine1.patient",
  sections:[
    { id:"lowerlimb", nameKey:"section.lowerlimb", items:[
      { id:"ankle-movements", nameKey:"ex.anklemove.name", howKey:"ex.anklemove.how", img:"images/ankle-movements.jpg", dosage:"10 reps × 2" },
      { id:"hamstring-stretch", nameKey:"ex.hamstring.name", howKey:"ex.hamstring.how", img:"images/hamstring-stretch.jpg", dosage:"30 sec × 3" },
      { id:"calf-stretch", nameKey:"ex.calfstretch.name", howKey:"ex.calfstretch.how", img:"images/calf-stretch.jpg", dosage:"30 sec × 3" },
      { id:"side-lying-abduction", nameKey:"ex.sidelyingabd.name", howKey:"ex.sidelyingabd.how", img:"images/side-lying-abduction.jpg", dosage:"5 sec hold × 10" },
      { id:"knee-to-chest", nameKey:"ex.kneetochest.name", howKey:"ex.kneetochest.how", img:"images/knee-to-chest.jpg", dosage:"30 sec × 3" },
      { id:"bridging", nameKey:"ex.bridging.name", howKey:"ex.bridging.how", img:"images/bridging.jpg", dosage:"5 sec hold × 10 reps" }
    ]}
  ]
},
{
  id:"3",
  titleKey:"routine3.title",
  patientKey:"routine3.patient",
  sections:[
    { id:"warmup", nameKey:"section.warmup", items:[
      { id:"bicep-stretch", nameKey:"ex.bicepstretch.name", howKey:"ex.bicepstretch.how", img:"images/bicep-stretch.jpg", dosage:"30 sec × 3" },
      { id:"tricep-stretch", nameKey:"ex.tricepstretch.name", howKey:"ex.tricepstretch.how", img:"images/tricep-stretch.jpg", dosage:"30 sec × 3" },
      { id:"shoulder-clock", nameKey:"ex.shoulderclock.name", howKey:"ex.shoulderclock.how", img:"images/shoulder-clock.jpg", dosage:"10 reps each side" },
      { id:"rhomboid-stretch", nameKey:"ex.rhomboidstretch.name", howKey:"ex.rhomboidstretch.how", img:"images/rhomboid-stretch.jpg", dosage:"30 sec × 3" },
      { id:"pec-minor-er-stretch", nameKey:"ex.pecminorer.name", howKey:"ex.pecminorer.how", img:"images/pec-minor-er-stretch.jpg", dosage:"30 sec × 3" },
      { id:"wrist-circles", nameKey:"ex.wristcircles.name", howKey:"ex.wristcircles.how", img:"images/wrist-circles.jpg", dosage:"10 reps" }
    ]},
    { id:"exercises", nameKey:"section.exercises", items:[
      { id:"banded-bicep-curls", nameKey:"ex.bandedbicepcurl.name", howKey:"ex.bandedbicepcurl.how", img:"images/banded-bicep-curls.jpg", dosage:"10 reps × 2" },
      { id:"banded-tricep-extension", nameKey:"ex.bandedtriceps.name", howKey:"ex.bandedtriceps.how", img:"images/banded-tricep-extension.gif", dosage:"10 reps × 2" },
      { id:"wall-angels", nameKey:"ex.wallangels.name", howKey:"ex.wallangels.how", img:"images/wall-angels.jpg", dosage:"10 reps × 2" },
      { id:"banded-ir-er", nameKey:"ex.bandedirer.name", howKey:"ex.bandedirer.how", img:"images/banded-ir-er.gif", dosage:"10 reps × 2" },
      { id:"banded-wrist-flex-ext", nameKey:"ex.bandwristflexext.name", howKey:"ex.bandwristflexext.how", img:"images/banded-wrist-flex-ext.jpg", dosage:"10 reps × 2" },
      { id:"banded-pull-apart", nameKey:"ex.bandedpullapart.name", howKey:"ex.bandedpullapart.how", img:"images/banded-pull-apart.jpg", dosage:"10 reps × 2" }
    ]}
  ]
}
];
