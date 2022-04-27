import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

it('render correctly', () => {
  const handleButtonClick = (btnContent) => btnContent;
  const tree = renderer
    .create(<Buttons handleButtonClick={handleButtonClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
