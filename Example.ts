class ParticleAnimationStarts {

    constructor()
    {
        this.makeAnimation();
    }

    private makeAnimation() : void {

        let type = "WebGL";
        if (!PIXI.utils.isWebGLSupported())
            type = "canvas";
        PIXI.utils.sayHello(type);


        this.app = new PIXI.Application({
            width: window.innerWidth/2,
            height: window.innerHeight/2,
            antialias: true,
            transparent: false,
            resolution: 1
        });

        document.body.appendChild(this.app.view);

        PIXI.loader
            .add("images/particle.png")
            .load(() => {
                let emitterContainer = new PIXI.Container();
                this.app.stage.addChild(emitterContainer);
                this.emitter = new PIXI.particles.Emitter(emitterContainer, [PIXI.Texture.fromImage("images/particle.png")], {
                    "alpha": {
                        "start": 0.8,
                        "end": 0.1
                    },
                    "scale": {
                        "start": 1,
                        "end": 0.3
                    },
                    "color": {
                        "start": "fb1010",
                        "end": "f5b830"
                    },
                    "speed": {
                        "start": 200,
                        "end": 100
                    },
                    "startRotation": {
                        "min": 0,
                        "max": 360
                    },
                    "rotationSpeed": {
                        "min": 0,
                        "max": 0
                    },
                    "lifetime": {
                        "min": 0.5,
                        "max": 0.5
                    },
                    "frequency": 0.008,
                    "emitterLifetime": 0.31,
                    "maxParticles": 1000,
                    "pos": {
                        "x": 0,
                        "y": 0
                    },
                    "addAtBack": false,
                    "spawnType": "circle",
                    "spawnCircle": {
                        "x": 0,
                        "y": 0,
                        "r": 10
                    }
                });

                this.emitter.updateOwnerPos(window.innerWidth/4, window.innerHeight/4);

                this.elapsed = Date.now();
                this.emitter.emit = true;
                this.update.call(this);
            });
    }

    update()
    {
        requestAnimationFrame(this.update.bind(this));
        this.now = Date.now();
        this.emitter.update((this.now - this.elapsed) * 0.001);
        this.elapsed = this.now;
    }
}

let particleAnimStart = new ParticleAnimationStarts();