import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { paths } from '.';

import GridMessages from '../pages/GridMessages';
import Welcome from '../pages/Welcome';

import * as S from './styles';


export default function Private() {
  const privateRoutes = [
    {
      path: paths.gridMessages,
      element: <GridMessages />,
    },
    {
      path: paths.welcome,
      element: <Welcome />,
    },
  ];

  const { loadingAware } = useSelector(
    ({ loading }) => loading.status
  );

  if (loadingAware) return <Loading />;
  <>
    <S.ContainRoute>
      <Routes>
        {privateRoutes
          .map(route => (
            <Route
              path={route.path}
              exact
              element={route.element}
            />
          ))}
        {/* <Route path={paths.gridMessages} exact element={<GridMessages />} /> */}
      </Routes>
    </S.ContainRoute>
  </>
}
