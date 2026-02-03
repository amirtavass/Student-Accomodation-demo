import CheckIcon from "../../public/images/icons/checkicon.png";
function BulletPoints() {
  const points = [
    {
      icon: (
        <img
          src={CheckIcon}
          alt="Check Icon"
          className="w-8 h-8 text-accent filter invert"
        />
      ),
      title: "All Bills Included",
    },
    {
      icon: (
        <img
          src={CheckIcon}
          alt="Check Icon"
          className="w-8 h-8 text-accent filter invert"
        />
      ),
      title: "No Deposit Required",
    },
    {
      icon: (
        <img
          src={CheckIcon}
          alt="Check Icon"
          className="w-8 h-8 text-accent filter invert"
        />
      ),
      title: "24/7 Security, Gated Site",
    },
  ];

  return (
    <section className="w-full text-text-light px-4 py-8 bg-bg-dark">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-bg-dark border-2 border-orange-500  px-6 py-3  transition-colors "
            >
              <span className="text-white font-semibold">{point.title}</span>
              <span className="text-xs text-accent">{point.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BulletPoints;
