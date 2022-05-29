const canvas = document.getElementById("myCanvas");
canvas.width = 300;

const context = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "AI");
const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 1.5)
];


animate();

function animate() {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }

    car.update(road.borders, traffic);

    canvas.height = window.innerHeight;

    context.save();
    context.translate(0, -car.y + canvas.height * 0.75);

    road.draw(context);

    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(context, "green");
    }

    car.draw(context, "blue");

    context.restore();

    requestAnimationFrame(animate);
}