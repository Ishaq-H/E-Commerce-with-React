import PropTypes from "prop-types";

const Highlight = (props) => {
  console.log(props);
  const { icon, para, title } = props;
  return (
    <div className="highlight">
      <div className="highlight__img">{icon}</div>
      <h3 className="highlight__subtitle">{para}</h3>
      <p className="highlight__para">{title}</p>
    </div>
  );
};

Highlight.propTypes = {
  icon: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Highlight;
