import { Routes, Route } from 'react-router-dom';
import Header from 'components/header';
import 'styles/style.scss';
import Homepage from 'pages/Homepage';
import Product from 'pages/Product/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSettingAsync } from 'actions/settingActions';

function App() {
  const dispatch = useDispatch();
  const setting = useSelector((state) => state.setting.SettingsData);
  useEffect(() => {
    dispatch(getSettingAsync());
  }, []);
  return (
    <div className="main" style={{ backgroundColor: setting.mainColor }}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
