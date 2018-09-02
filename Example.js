var ParticleAnimationStarts = /** @class */ (function () {
    function ParticleAnimationStarts() {
        this.makeAnimation();
    }
    ParticleAnimationStarts.prototype.makeAnimation = function () {
        var _this = this;
        var type = "WebGL";
        if (!PIXI.utils.isWebGLSupported())
            type = "canvas";
        PIXI.utils.sayHello(type);
        this.app = new PIXI.Application({
            width: window.innerWidth / 2,
            height: window.innerHeight / 2,
            antialias: true,
            transparent: false,
            resolution: 1
        });
        document.body.appendChild(this.app.view);
        PIXI.loader
            .add("images/particle.png")
            .load(function () {
            var emitterContainer = new PIXI.Container();
            _this.app.stage.addChild(emitterContainer);
            _this.emitter = new PIXI.particles.Emitter(emitterContainer, [PIXI.Texture.fromImage("images/particle.png")], {
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
            _this.emitter.updateOwnerPos(window.innerWidth / 4, window.innerHeight / 4);
            _this.elapsed = Date.now();
            _this.emitter.emit = true;
            _this.update.call(_this);
        });
    };
    ParticleAnimationStarts.prototype.update = function () {
        requestAnimationFrame(this.update.bind(this));
        this.now = Date.now();
        this.emitter.update((this.now - this.elapsed) * 0.001);
        this.elapsed = this.now;
    };
    return ParticleAnimationStarts;
}());
var particleAnimStart = new ParticleAnimationStarts();
