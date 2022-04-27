import renderer from 'react-test-renderer';
import NoPage from '../components/NoPage';

it('render correctly', () => {
  const tree = renderer.create(<NoPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
