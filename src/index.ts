const unitTypes = {
    dagger:"@dagger",
    mace:"@mace",
    crawler:"@crawler",
    atrax:"@atrax",
    spiroct:"@spiroct",
    arkyid:"@arkyid",
    toxopid:"@toxopid",
    flare:"@flare",
    horizon:"@horizon",
    zenith:"@zenith",
    antumbra:"@antumbra",
    eclipse:"@eclipse",
    fortress:"@fortress",
    mono:"@mono",
    poly:"@poly",
    mega:"@mega",
    quad:"@quad",
    oct:"@oct",
    risso:"@risso",
    minke:"@minke",
    bryde:"@bryde",
    sei:"@sei",
    omura:"@omura",
    scepter:"@scepter",
    retusa:"@retusa",
    oxynoe:"@oxynoe",
    cyerce:"@cyerce",
    aegires:"@aegires",
    navanax:"@navanax",
    alpha:"@alpha",
    beta:"@beta",
    gamma:"@gamma",
    stell:"@stell",
    locus:"@locus",
    reign:"@reign",
    precept:"@precept",
    vanquish:"@vanquish",
    conquer:"@conquer",
    merui:"@merui",
    cleroi:"@cleroi",
    anthicus:"@anthicus",
    tecta:"@tecta",
    collaris:"@collaris",
    elude:"@elude",
    nova:"@nova",
    avert:"@avert",
    obviate:"@obviate",
    quell:"@quell",
    disrupt:"@disrupt",
    evoke:"@evoke",
    incite:"@incite",
    pulsar:"@pulsar",
    emanate:"@emanate",
    quasar:"@quasar",
    vela:"@vela",
    corvus:"@corvus"
}

const unitStates = {
    nonexisitent:0,
    alive:1,
    dead:2
}

class position {
    x:number;
    y:number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
}

class Unit {
    type:keyof typeof unitTypes;
    state:0|1|2 = 0;
    position:position|null = null;
    /**
     * Spawn this unit.
     * @worldOnly
     */
    public spawn(x:number, y:number) {
        mlog.raw(`spawn ${this.type} ${x} ${y} 90 @sharded result`)
    }
    constructor(type:keyof typeof unitTypes) {
        this.type = type;
    }
}