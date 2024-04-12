import './ProjectCard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div className="project-card" data-testid="projectCard">
      <div>
        <img src={logo} alt={`${name} Logo`} className="project-card-logo" data-testid="projectCardLogo" />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent">{content}</p>
        <a href={link} target="_blank" rel="noreferrer" data-testid="projectCardLink">
          <img src="/link.svg" alt="" />
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: '#',
};

export default ProjectCard;
