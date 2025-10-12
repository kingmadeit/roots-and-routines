import RotatingText from "../RotatingText";

const AutonomySection = () => {
  return (
    <div className="text-5xl font-nunito font-extrabold flex justify-center items-center space-x-4 my-32 relative w-full">
      <div className="w-50 h-55 bg-complementary/5 z-0 absolute -top-50 rounded-t-full rounded-bl-full right-0"></div>
      <span className="text-secondary">Your</span>
      <span className="w-[150px]">
        <RotatingText
          texts={['Home', 'Pace', 'Peace']}
          mainClassName="sm:px-2 md:px-4 bg-secondary text-primary overflow-hidden sm:py-1 md:py-2 justify-center rounded-4xl"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </span>

    </div>
  );
};

export default AutonomySection;