import * as motion from "motion/react-client";

const SectionTag = ({
  tag,
  className = "",
}: {
  tag: string;
  className?: string;
}) => {
  return (
    <motion.h4
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`section-name ${className} absolute top-10`}
    >
      {tag}
    </motion.h4>
  );
};

export default SectionTag;
