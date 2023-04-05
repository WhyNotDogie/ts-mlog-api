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

class Unit {
    type:keyof typeof unitTypes;
    /**
     * Spawn this unit.
     * @worldOnly
     */
    public spawn() {
        
    }
    constructor(type:keyof typeof unitTypes) {
        this.type = type;
    }
}