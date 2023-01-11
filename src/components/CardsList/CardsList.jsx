import PropTypes from 'prop-types'
import { ListCss } from './CardsList.styled';
import { Card } from 'components/Card/Card';


export const CardsList = ({ items }) => {
  return (
    <ListCss>
      {items.map((el) => (
          <li key={el.name}>
              <Card name={el.name}
                  location={el.location}
                  speaker={el.speaker}
                  type={el.type}
                  start={el.time.start}
                  end={el.time.end} />
          </li>
      ))}
    </ListCss>
  );
};
CardsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
