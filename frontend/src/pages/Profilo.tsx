export default function Profilo() {
  return (
    <div
      className="min-h-screen w-full px-6 pt-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="text-5xl md:text-7xl font-semibold leading-none tracking-tight text-white">
            About <span className="text-white/55">me</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="panel p-8 lg:col-span-7" data-reveal="card">
            <p className="text-lg text-white/75 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, accusamus inventore? Nam optio ab nemo, sapiente vel perferendis, maiores repudiandae debitis tempore et sint. Ipsa rem ullam reiciendis quo numquam quisquam delectus cupiditate, nostrum perferendis! Suscipit molestiae ducimus expedita aliquam delectus ad ipsa, id blanditiis harum optio aperiam accusantium mollitia.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}