import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';
import css from './Card.module.css';
import { CardCss ,TitleCss, InfoCss, ChipCss} from './Card.styled';
export const Card = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const formattedDuration = formatEventDuration(start, end);
    return (
      <CardCss>
        <TitleCss>{name}</TitleCss>
        <InfoCss>
          <FaMapMarkerAlt size={iconSize.sm} />
          {location}
        </InfoCss>
        <InfoCss>
          <FaUserAlt size={iconSize.sm} />
          {speaker}
        </InfoCss>
        <InfoCss>
          <FaCalendarAlt size={iconSize.sm} />
          {formattedStart}
        </InfoCss>
        <InfoCss>
          <FaClock className={css.icon} size={iconSize.sm} />
          {formattedDuration}
        </InfoCss>
        <ChipCss cardType={type} a={5} b={10} img="hahaha">{type}</ChipCss>
      </CardCss>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: {
        start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
    }
}
